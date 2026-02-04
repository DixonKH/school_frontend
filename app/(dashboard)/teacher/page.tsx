'use client';
import { useState } from "react";
import TeacherWeeklyCalendar from "../admin/teachers/[id]/components/teacher-weekly-calendar";
import TeacherModal from "./components/teacher-modal";
import TeacherEditModal from "./components/teacher-edit-modal";

const teacher = {
    fullName: "Max Leiter",
    classes: "10-A",
    phone: "1234567890",
    email: "fj5Bc@example.com",
    address: "Istanbul, Turkey",
    subject: "Russian",
    
}


export default function TeacherDashboard() {
    const [open, setOpen] = useState(false);
  return (
    <section className="flex flex-col gap-12">
      <TeacherModal setOpen={setOpen} />
      <div className="grid lg:grid-cols-12 gap-3">
        <div className="col-span-9">
          <TeacherWeeklyCalendar />
        </div>
        <div className="col-span-3 border border-gray-200 bg-white rounded-xl p-3">performance</div>
      </div>
      <div className={(open ? "block" : "hidden")}>
        <TeacherEditModal teacher={teacher} open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}
