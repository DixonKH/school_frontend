"use client";

import { useAuthStore } from "@/features/auth/auth.store";
import { http } from "@/services/http/client";
import "@/services/http/auth-interceptor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading, logout } = useAuthStore();

  console.log("AuthProvider");

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("accessToken");
      console.log("TOKEN:", localStorage.getItem("accessToken"));

      if (!token) {
        try {
          // access yo‘q → refreshga urinamiz
          console.log("REFRESH START");

          const res = await http.post("/auth/refresh");
          const newToken = res.data.data.accessToken;
          localStorage.setItem("accessToken", newToken);
        } catch {
          setLoading(false);
          return;
        }
      }

      try {
        const me = await http.get("/auth/me");
        console.log("me: ", me);
        setUser(me.data.data);
      } catch {
        console.log("REFRESH FAILED");
        logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  return <>{children}</>;
}
