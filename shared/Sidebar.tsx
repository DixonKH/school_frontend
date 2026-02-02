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

const menuByRole = {
  ADMIN: [
    { name: "Dashboard", icon: MdSpaceDashboard, href: "/admin" },
    { name: "Students", icon: FaUser, href: "/admin/students" },
    { name: "Teachers", icon: FaUserGraduate, href: "/admin/teachers" },
    { name: "Classes", icon: FaChalkboardTeacher, href: "/admin/classes" },
    { name: "Payments", icon: IoWallet, href: "/admin/payments" },
    { name: "Settings", icon: IoIosSettings, href: "/admin/settings" },
  ],

  TEACHER: [
    { name: "Dashboard", icon: MdSpaceDashboard, href: "/teacher" },
    { name: "My Classes", icon: FaChalkboardTeacher, href: "/teacher/classes" },
    { name: "Schedule", icon: IoNotifications, href: "/teacher/schedule" },
  ],

  STUDENT: [
    { name: "Dashboard", icon: MdSpaceDashboard, href: "/student" },
    { name: "My Grades", icon: FaUserGraduate, href: "/student/grades" },
    { name: "Attendance", icon: IoNotifications, href: "/student/attendance" },
  ],
};

export default function SideBar({
  role,
  toggleSidebar,
  sidebarCollapsed,
}: {
  role: "ADMIN" | "TEACHER" | "STUDENT";
  toggleSidebar: () => void;
  sidebarCollapsed: boolean;
}) {
  const pathname = usePathname();
  const menu = menuByRole[role];

  return (
    <div className="flex flex-col h-full px-2 pt-4">
      {/* Logo */}
      <div className="mb-5 flex gap-2 items-center text-white pl-3">
        <GiBookmarklet size={32} />
        {sidebarCollapsed && (
          <div>
            <p className="text-xl font-bold">EduCRM</p>
            <p className="text-sm">Private School</p>
          </div>
        )}
      </div>

      <nav className="space-y-2">
        {menu.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "menu-item",
                isActive && "bg-border text-secondary",
                !sidebarCollapsed && "justify-center"
              )}
            >
              <item.icon size={20} />
              {sidebarCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse */}
      <button
        onClick={toggleSidebar}
        className="mt-auto mb-4 mx-auto bg-gray-800 p-2 rounded-xl"
      >
        {sidebarCollapsed ? <FaAngleLeft /> : <MdKeyboardDoubleArrowRight />}
      </button>
    </div>
  );
}

