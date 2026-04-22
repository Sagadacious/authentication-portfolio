import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { AuthenticationService } from './authentication.service';
import { UUID } from 'node:crypto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

interface LoginResponseInterface {
  success: boolean;
  data?: {
    id: UUID;
    email: string;
  };
  message?: string;
}

@ApiTags('Authentication')
@Controller('authentication')
@UseGuards(AuthGuard)
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login User Using JWT Token' })
  @ApiParam({ name: 'Password' })
  @ApiParam({ name: 'Email' })
  @ApiResponse({ status: 200, description: 'Logged In Successfully...' })
  @ApiResponse({ status: 401, description: 'Invalid Credentials...' })
  LoginUser(request: Request): LoginResponseInterface {
    return this.authService.doLogin(request);
  }
}
