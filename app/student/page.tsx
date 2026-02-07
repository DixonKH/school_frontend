'use client'
import { useState } from "react";
import AttendanceCard from "./components/AttendanceCard";
import GradesTable from "./components/GradesTable";
import StudentHeader from "./components/StudentHeader";
import StudentStats from "./components/StudentStats";
import TodaySchedule from "./components/TudaySchedule";
import StudentEditModal from "./components/student-edit-modal";
import { add } from "date-fns";

const student = {
    fullName: "Dilshod",
    grade: "10-A",
    id: "#ST-10234",
    birthDate: "01.01.2000",
    phone: "+998 90 123 45 67",
    email: "fj5Bc@example.com",
    address: "Tashkent, Chilonzor district",
    img: "https://github.com/maxleiter.png",
  };

export default function StudentPage() {
    const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <StudentHeader setOpen={setOpen} />
      <StudentStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TodaySchedule />
        <AttendanceCard />
      </div>
      <GradesTable />
      <StudentEditModal open={open} student={student} onClose={() => setOpen(false)} />
    </div>
  );
}
