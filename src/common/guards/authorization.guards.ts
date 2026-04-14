import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorarors/public.decorator';
import { ROLES_KEY } from '../decorarors/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      // true
      context.getHandler(), // route method
      context.getClass(), // class
    ]);

    if (isPublic) return true; // pass

    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(), // route method
      context.getClass(), // class
    ]);

    // إذا كان المسار لا يطلب رتبة معينة، اسمح للريكويست بالمرور بأمان
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    // ["admin", "user"]
    return requiredRoles.includes(user?.role); // true false
  }
}
