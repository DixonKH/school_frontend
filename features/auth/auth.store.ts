import { authRole } from "@/shared/types/enum";
import { create } from "zustand";

type AuthUser = {
  id: string;
  username: string;
  email: string;
  role: authRole;
};

type AuthState = {
  user: AuthUser | null;
  role: authRole | null;
  isAuthenticated: boolean;

  setUser: (user: AuthUser) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      role: user.role,
      isAuthenticated: true
    }),

  logout: () => {
    localStorage.removeItem("accessToken");
    set({
      user: null,
      role: null,
      isAuthenticated: false
    });
  }
}));
