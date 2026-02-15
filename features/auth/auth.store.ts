// store/auth.store.ts
import { authRole } from "@/shared/types/enum";
import { create } from "zustand";

type User = {
  id: string;
  role: authRole;
  profile: any;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setUser: (user: User) => void;
  setLoading: (v: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),

  setLoading: (v) => set({ isLoading: v }),

  logout: () => {
    localStorage.removeItem("accessToken");
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
}));
