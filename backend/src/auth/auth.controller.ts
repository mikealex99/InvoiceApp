import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginInput: LoginInput,
  ): Promise<{ accessToken: string }> {
    const token = await this.authService.login(
      loginInput.email,
      loginInput.password,
    );
    return { accessToken: token.token };
  }
}
