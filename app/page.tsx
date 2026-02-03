import { redirect } from "next/navigation";

export default function Home() {
  const userRole = {
    role: ["ADMIN", "TEACHER", "STUDENT"],
  };

  if (!userRole) redirect("/login");

  switch (userRole.role[0]) {
    case "ADMIN":
      redirect("/admin");
    case "TEACHER":
      redirect("/teacher");
    case "STUDENT":
      redirect("/student");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Private School CRM
      </h1>
    </div>
  );
}
