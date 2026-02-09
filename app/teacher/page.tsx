"use client";
import { useState } from "react";
import TeacherWeeklyCalendar from "../(dashboard)/admin/teachers/[id]/components/teacher-weekly-calendar";
import TeacherModal from "./components/teacher-modal";
import TeacherEditModal from "./components/teacher-edit-modal";
import ClassCard from "./classes/components/class-card";
import { useRoleGuard } from "@/features/auth/hooks/useRoleGuard";
import { authRole } from "@/shared/types/enum";

const teacher = {
  fullName: "Max Leiter",
  classes: "10-A",
  phone: "1234567890",
  email: "fj5Bc@example.com",
  address: "Istanbul, Turkey",
  subject: "Russian",
};

export default function TeacherDashboard() {
  useRoleGuard([authRole.TEACHER])
  const [open, setOpen] = useState(false);
  return (
    <section className="flex flex-col gap-12">
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <TeacherModal setOpen={setOpen} />
        </div>
        <div className="col-span-3">
          <ClassCard
                    id="1"
                    name="English"
                    grade="10-A"
                    studentsCount={28}
                    journalActive
                    lastLessonDate="12 Feb"
                  />
        </div>
      </div>
      <div className="grid lg:grid-cols-12 gap-3">
        <div className="col-span-9">
          <TeacherWeeklyCalendar />
        </div>
        <div className="col-span-3 border border-gray-200 bg-white rounded-xl p-3">
          performance
        </div>
      </div>
      <div className={open ? "block" : "hidden"}>
        <TeacherEditModal
          teacher={teacher}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
}
