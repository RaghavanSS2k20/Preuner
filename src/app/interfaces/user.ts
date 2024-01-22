export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
}
export interface UserResponse{
    token: string;
     user: User;
}
