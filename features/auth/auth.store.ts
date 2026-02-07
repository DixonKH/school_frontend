import { create } from "zustand";

type AuthUser = {
    username: string;
    email: string;
    password: string;
    role: string;
}

export const useAuthStore = create((set) => ({
    user: null,
    role: null,
    isAuthenticated: false,
    
    setUser: (user: AuthUser) => {
        set({
            user,
            role: user.role,
            isAuthenticated: true
        })
    },

    logout: () => {
        localStorage.removeItem('accessToken');
        set({
            user: null,
            role: null,
            isAuthenticated: false
        })
    }
    
}));