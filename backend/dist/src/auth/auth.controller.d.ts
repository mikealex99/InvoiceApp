import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInput: LoginInput): Promise<{
        accessToken: string;
    }>;
}
