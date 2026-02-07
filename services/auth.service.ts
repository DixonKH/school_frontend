import { LoginDTO, RegisterDTO } from "@/shared/types/login";
import {http} from "./http/client";

export const register = (data: RegisterDTO) => {
    return http.post('/auth/register', data);
}

export const login = (data: LoginDTO) => {
    return http.post('/auth/login', data);
}

export const getMe = () => {
    return http.get('/auth/me');
}

export const logout = () => {
    return http.post('/auth/logout');
}