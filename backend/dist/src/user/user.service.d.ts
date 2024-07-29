import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserResponse } from './dto/user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(createUserInput: CreateUserInput): Promise<UserResponse>;
    getUserById(id: number): Promise<UserResponse>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserResponse>;
    deleteUser(id: number): Promise<void>;
    private mapToUserResponse;
}
