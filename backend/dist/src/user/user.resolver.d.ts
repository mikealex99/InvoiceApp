import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<User>;
    deleteUser(id: number): Promise<boolean>;
}
