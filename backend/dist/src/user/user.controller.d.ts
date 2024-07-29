import { UserService } from './user.service';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserResponse } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<UserResponse>;
    getUserById(id: number): Promise<UserResponse>;
    updateUser(id: number, updateUserInput: UpdateUserInput): Promise<UserResponse>;
    deleteUser(id: number): Promise<void>;
}
