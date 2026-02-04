'use client'
import { useUIStore } from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import SideBar from "@/shared/Sidebar";
import TopBar from "@/shared/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  const role: "ADMIN" | "TEACHER" | "STUDENT" = "TEACHER";
  return (
    <div className="w-full flex h-screen overflow-hidden">
      <div className={cn("bg-primary transition-all duration-300 ease-in-out", sidebarCollapsed ? "w-64" : "w-19")}>
        <SideBar role={role} toggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
      </div>

      <div className="w-full flex flex-col flex-1">
        <div className="h-18 shrink-0 border-b border-gray-200 flex items-center px-6">
          <TopBar />
        </div>
        <main className="flex-1 overflow-y-auto bg-zinc-50 p-6">{children}</main>
      </div>
    </div>
  );
}
