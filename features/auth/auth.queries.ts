import { useQuery, useMutation } from "@tanstack/react-query";
import { getMeApi, loginApi, registerApi } from "./auth.api";

export const useRegister = () => {
  useMutation({ mutationFn: registerApi });
};

export const useLogin = () => {
  useMutation({ mutationFn: loginApi });
};

export const useGetMe = () => {
  return useQuery({ queryKey: ["me"], queryFn: getMeApi });
};
