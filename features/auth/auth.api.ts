import { LoginDTO, RegisterDTO } from "@/shared/types/login";
import * as authService from "../../services/auth.service";

export const registerApi = async (payload: RegisterDTO) => {
    const {data} = await authService.register(payload);
    return data;
}

export const loginApi = async (payload: LoginDTO) => {
    const {data} = await authService.login(payload);
    return data;
}

export const getMeApi = async () => {
    const {data} = await authService.getMe();
    return data;
}

export const logoutApi = async () => {
    const {data} = await authService.logout();
    return data;
}