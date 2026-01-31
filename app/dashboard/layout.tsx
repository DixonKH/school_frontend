import SideBar from "@/shared/Sidebar";
import TopBar from "@/shared/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">
      <div className="w-full">
        <SideBar />
        <div>
          <TopBar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
