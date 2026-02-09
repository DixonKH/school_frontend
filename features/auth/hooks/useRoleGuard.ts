"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authRole } from "@/shared/types/enum";
import { useAuthStore } from "../auth.store";

export function useRoleGuard(allowedRoles: authRole[]) {
  const router = useRouter();
  const { role, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (role && !allowedRoles.includes(role)) {
      router.replace("/403");
    }
  }, [role, isAuthenticated]);
}
