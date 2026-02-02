"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border border-red-500/30 bg-white p-8 shadow-sm text-center space-y-6">
        
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
          <AlertTriangle className="h-7 w-7" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-gray-900">
            Something went wrong
          </h1>
          <p className="text-sm text-gray-500">
            An unexpected error occurred. Please try again or refresh the page.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-ring/90 transition"
          >
            <RefreshCcw className="h-4 w-4" />
            Try again
          </button>

          <a
            href="/"
            className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Go home
          </a>
        </div>

        {/* Optional debug (dev only) */}
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-4 rounded-lg bg-gray-50 p-3 text-left text-xs text-gray-500 overflow-auto">
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
}