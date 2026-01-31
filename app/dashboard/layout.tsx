'use client'
import { useUIStore } from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import SideBar from "@/shared/Sidebar";
import TopBar from "@/shared/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  return (
    <div className="w-full flex h-screen">
      <div className={cn("bg-primary transition-all duration-300 ease-in-out", sidebarCollapsed ? "w-64" : "w-19")}>
        <SideBar toggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
      </div>
      <div className="w-10/12 h-screen flex flex-col justify-start">
        <div className="h-16">
          <TopBar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
