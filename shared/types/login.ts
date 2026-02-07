import { authRole } from "./enum";

export interface RegisterDTO {
    email: string;
    username: string;
    password: string;
    role: authRole;
}

export interface LoginDTO {
    username: string;
    password: string;
}
