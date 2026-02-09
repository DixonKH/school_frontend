"use client";

import { useAuthStore } from "@/features/auth/auth.store";
import { http } from "@/services/http/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useAuthStore((s) => s.setUser);
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    http
      .get("/auth/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        logout();
      });
  }, [setUser, logout]);

  return <>{children}</>;
}
