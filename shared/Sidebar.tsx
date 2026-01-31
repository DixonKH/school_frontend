"use client";
import Link from "next/link";
import { GiBookmarklet } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menu = [
  { name: "Dashboard", icon: MdSpaceDashboard, href: "/dashboard" },
  { name: "Students", icon: FaUser, href: "/dashboard/students" },
  { name: "Teachers", icon: FaUserGraduate, href: "/dashboard/teachers" },
  { name: "Classes", icon: FaChalkboardTeacher, href: "/dashboard/classes" },
  { name: "Payments", icon: IoWallet, href: "/dashboard/payments" },
  {
    name: "Notifications",
    icon: IoNotifications,
    href: "/dashboard/notifications",
  },
  { name: "Settings", icon: IoIosSettings, href: "/dashboard/settings" },
];

export default function SideBar(props: any) {
  const { toggleSidebar, sidebarCollapsed } = props;
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col items-center justify-start px-2 pt-4">
      <div className="mb-5 pl-3 w-full flex flex-row gap-2 items-center text-white">
        <span>
          <GiBookmarklet size={32} />
        </span>
        <p
          className={cn(
            "flex flex-col transition-all duration-200 overflow-hidden",
            sidebarCollapsed ? "opacity-100 max-h-20" : "opacity-0 max-h-0",
          )}
        >
          <span className="text-xl font-bold">EduCRM</span>
          <span className="text-sm text-primary-foreground">
            Private School
          </span>
        </p>
      </div>
      <div className="border-[0.2px] border-border w-full mb-4"></div>
      <nav className="p-1 space-y-2 w-full">
        {menu.map((item) => {
          const isActive = item.href === pathname;
          return (
            <Link
              key={item.name}
              href={item.href}
              aria-current="page"
              className={cn(
                "menu-item",
                isActive && "text-secondary bg-border",
                !sidebarCollapsed && "justify-center",
              )}
            >
              <item.icon
                size={20}
                className={`text-primary-foreground ${isActive ? "text-secondary" : ""}`}
              />
              <span
                className={cn(
                  "transition-all duration-200 whitespace-nowrap overflow-hidden",
                  sidebarCollapsed ? "opacity-100 w-auto" : "opacity-0 w-0",
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
      <button
        onClick={toggleSidebar}
        className={cn(
          "flex items-center justify-center mt-32 gap-1 p-2 bg-gray-800 rounded-xl text-primary-foreground cursor-pointer transition-all duration-200 ease-in-out",
          sidebarCollapsed ? "w-52" : "w-15",
        )}
      >
        {sidebarCollapsed ? (
          <>
            <FaAngleLeft size={20} /> <span>Collapse</span>
          </>
        ) : (
          <MdKeyboardDoubleArrowRight size={21} />
        )}
      </button>
    </div>
  );
}
