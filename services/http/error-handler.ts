import { AxiosError } from "axios";

export const handleApiError = (error: AxiosError) => {
    if (error.response?.status === 401) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    }

    return Promise.reject(error);
};