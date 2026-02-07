"use client";

import { IoIosSchool } from "react-icons/io";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE (INFO / BRAND) */}
      <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-blue-600 to-indigo-700 text-white p-10">
        <h1 className="text-4xl font-bold mb-4">EduCRM</h1>
        <p className="text-lg opacity-90 text-center max-w-md">
          Smart school management system for teachers, students and administrators.
        </p>

        <div className="mt-10 mb-30">
          <IoIosSchool size={200} />
        </div>
      </div>

      {/* RIGHT SIDE (LOGIN FORM) */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back 👋
          </h2>
          <p className="text-gray-500 mb-6">
            Please login to your account
          </p>

          <form className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="teacher@school.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} EduCRM. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
