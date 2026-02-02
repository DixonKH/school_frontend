"use client";

export default function TeacherError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-full items-center justify-center flex-col gap-4">
      <h2 className="text-xl font-semibold text-destructive">
        Teachers error
      </h2>

      <p className="text-sm text-muted-foreground">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-md bg-primary text-white"
      >
        Try again
      </button>
    </div>
  );
}