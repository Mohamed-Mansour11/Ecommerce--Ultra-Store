import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Types } from 'mongoose';
import { Server, Socket } from 'socket.io';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { UserRepository } from 'src/DB/repositories/user.repository';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class StockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: Server;
  socketUsers = new Map<string, Socket>(); // key >>> value

  constructor(
    private readonly _JwtService: JwtService,
    private readonly _ConfigService: ConfigService,
    private readonly _UserRepository: UserRepository,
    private readonly _TokenRepository: TokenRepository,
  ) {}

  async handleConnection(client: Socket) {
    // check token
    const authHeader = client.handshake.auth?.authorization;
    console.log({ authHeader });

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Invalid token!');
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = this._JwtService.verify(token, {
        secret: this._ConfigService.get('JWT_SECRET'),
      });

      const user = await this._UserRepository.findOne({
        filter: { _id: payload.id },
      });

      if (!user) throw new NotFoundException('User not found!');

      const tokenDoc = await this._TokenRepository.findOne({
        filter: { token, isValid: true, user: user._id },
      });

      if (!tokenDoc) throw new UnauthorizedException('Invalid token!');

      client.data.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    const userId = client.data.user.id;
    this.socketUsers.set(userId, client);
    console.log('Client connected: ', client.id);
    console.log('Client connected: ', userId);
  }

  // on
  handleDisconnect(client: any) {
    this.socketUsers.delete(client.data.user.id);
    console.log('Client disconnected: ', client.data.user.id);
  }

  // notify all users with the stock update
  broadcastStockUpdate(productId: Types.ObjectId, newStock: number) {
    this.server.emit('stock-update', { productId, stock: newStock });
  }

  // listen >>> .on
  @SubscribeMessage('get-data') // frontend emit get-data
  handleGetData(client: Socket, data: any) {
    console.log('Recieved event get-data!');
  }

  // private to specific socket
  @SubscribeMessage('private')
  privateMsg(client: Socket, data: { recevierId: string; message: string }) {
    const sender = client.data.user;

    if (!sender) {
      return client.emit('error', { message: 'Sender not authenticated!' });
    }

    const recevierSocket = this.socketUsers.get(data.recevierId);

    if (!recevierSocket) {
      return client.emit('error', { message: 'recevier not authenticated!' });
    }

    recevierSocket.emit('private', {
      message: data.message,
      from: { id: sender._id, name: sender.name },
    });
  }
}
