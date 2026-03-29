import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { IS_PUBLIC_KEY } from '../decorarors/public.decorator';

// @UseGuards() // Authentication , authorization
// @UsePipes() // validation

// ----------------------------------------------------------------
// Middleware (NESTJS) // Logger Parsing CORS
// Interceptor

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _JwtService: JwtService,
    private readonly _ConfigService: ConfigService,
    private readonly _UserRepository: UserRepository,
    private readonly _TokenRepository: TokenRepository,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(), // Route
      context.getClass(), // class
    ]);
    if (isPublic) return true; // pass

    // logic authentication
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeaders(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = this._JwtService.verify(token, {
        secret: this._ConfigService.get('JWT_SECRET'),
      });

      const user = await this._UserRepository.findOne({
        filter: { _id: payload.id },
      });

      if (!user) throw new NotFoundException(' User not found!');

      const tokenDoc = await this._TokenRepository.findOne({
        filter: { token, isValid: true, user: user._id },
      });

      if (!tokenDoc) throw new UnauthorizedException('Invalid token!');

      request.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeaders(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
