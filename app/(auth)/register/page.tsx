"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosSchool } from "react-icons/io";
import { useState } from "react";
import { useRegister } from "@/features/auth/auth.queries";
import {
  registerSchema,
  RegisterSchema,
} from "@/features/auth/schema/register.schema";
import { authRole } from "@/shared/types/enum";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const registerMutation = useRegister();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = (data: RegisterSchema) => {
    console.log("FORM SUBMIT");
    registerMutation.mutate(data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-indigo-600 to-blue-700 text-white p-10">
        <h1 className="text-4xl font-bold mb-4">EduCRM</h1>
        <p className="text-lg opacity-90 text-center max-w-md">
          Create your school account and manage students, teachers and classes
          in one place.
        </p>

        <div className="mt-10 mb-30">
          <IoIosSchool size={200} />
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create account 🚀
          </h2>
          <p className="text-gray-500 mb-6">Sign up to start using EduCRM</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {formState.errors.username && (
                <p className="text-red-500 text-sm">
                  {formState.errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="admin@school.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {formState.errors.email && (
                <p className="text-red-500 text-sm">
                  {formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {formState.errors.password && (
                <p className="text-red-500 text-sm">
                  {formState.errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                {...register("role")}
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value={authRole.ADMIN}>Admin</option>
                <option value={authRole.TEACHER}>Teacher</option>
                <option value={authRole.STUDENT}>Student</option>
              </select>
              {formState.errors.role && (
                <p className="text-red-500 text-sm">
                  {formState.errors.role.message}
                </p>
              )}
            </div>

            {registerMutation.error && (
              <p className="text-red-500 text-sm">
                {(registerMutation.error as any)?.response?.data?.message}
              </p>
            )}

            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 mt-2"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
