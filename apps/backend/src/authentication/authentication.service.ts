import { Injectable } from '@nestjs/common';
import { UUID } from 'node:crypto';

interface LoginResponseInterface {
  success: boolean;
  data?: {
    id: UUID;
    email: string;
  };
  message?: string;
}

@Injectable()
export class AuthenticationService {
  doLogin(request: Request): LoginResponseInterface {
    if (!request) return { success: false, message: 'Invalid Request' };
    return {
      success: false,
      message: 'There is no process happening',
    };
  }
}
