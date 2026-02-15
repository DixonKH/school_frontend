"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authRole } from "@/shared/types/enum";
import { useAuthStore } from "../auth.store";

export function useRoleGuard(allowedRoles: string[]) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (user && !allowedRoles.includes(user.role)) {
      router.replace("/403");
    }
  }, [user, isAuthenticated, isLoading]);
}
