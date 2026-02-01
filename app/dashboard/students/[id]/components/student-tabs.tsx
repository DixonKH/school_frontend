"use client";

import { useState } from "react";
import { StudentGradesSection } from "./student-grades-sectio";
import { StudentAttendanceSection } from "../../attendance/attendance-section";

const tabs = ["Overview", "Grades", "Attendance"];

export default function StudentTabs() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex gap-6 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 text-sm font-medium ${
              active === tab
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-600">
        {active === "Overview" && <p>Student overview info</p>}
        {active === "Grades" && <StudentGradesSection />}
        {active === "Attendance" && <StudentAttendanceSection />}
      </div>
    </div>
  );
}
