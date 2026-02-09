'use client'
import { useQuery, useMutation } from "@tanstack/react-query";
import { getMeApi, loginApi, registerApi } from "./auth.api";
import { useAuthStore } from "./auth.store";
import { useRouter } from "next/navigation";


export const useRegister = () => {
  const router = useRouter();

  return useMutation(
    { mutationFn: registerApi,
      onSuccess: () => {
         console.log("register success");
         router.push("/login");
      }
     }
  );
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({ 
    mutationFn: loginApi,

    onSuccess: (res) => {
      console.log("res data: ", res);

      const { user, accessToken } = res.data;

      if(!accessToken) {
        throw new Error("Token not found");
      }

      localStorage.setItem("accessToken", accessToken);

      useAuthStore.getState().setUser(user);

      if(user.role === "ADMIN") router.push("/admin");
      if(user.role === "TEACHER") router.push("/teacher");
      if(user.role === "STUDENT") router.push("/student");
    },

    onError: (error: any) => {
      console.log("login error: ", error);
    }
  });
};

export const useGetMe = () => {
  return useQuery({ queryKey: ["me"], queryFn: getMeApi });
};
