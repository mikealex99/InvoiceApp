export declare class CreateUserInput {
    email: string;
    password: string;
    name?: string;
}
export declare class UpdateUserInput {
    id: number;
    name?: string;
    password?: string;
}
export declare class UserResponse {
    id: number;
    email: string;
    name?: string;
}
