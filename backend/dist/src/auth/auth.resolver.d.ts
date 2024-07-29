import { AuthService } from './auth.service';
import { LoginInput, AuthPayload } from './dto/auth.dto';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInput: LoginInput): Promise<AuthPayload>;
}
