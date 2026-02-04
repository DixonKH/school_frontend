import { Card } from "@/components/ui/card";
import { LessonBlock } from "./lesson-block";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const times = [
  "08:00",
  "08:50",
  "09:40",
  "10:30",
  "11:20",
  "13:00",
  "13:50",
  "14:40",
  "15:30",
];

export default function TeacherWeeklyCalendar() {
  return (
    <div className="border border-gray-300 p-4 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Weekly Schedule</h3>
        <div className="text-sm text-muted-foreground">
          2026 – 2027 Akademic year
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-[80px_repeat(7,1fr)] border border-gray-200 rounded-xl overflow-hidden">
        {/* Top-left empty */}
        <div />

        {/* Days header */}
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium py-4 px-1 bg-gray-200/60 text-gray-700 border-l border-white"
          >
            {day}
          </div>
        ))} 

        {/* Time rows */}
        {times.map((time) => (
          <>
            {/* Time label */}
            <div
              key={time}
              className="text-xs text-center bg-gray-200/60 text-gray-700 font-semibold px-2 py-3 border-t border-white"
            >
              {time}
            </div>

            {/* Day cells */}
            {days.map((day) => (
              <div
                key={day + time}
                className="relative border-dashed border-r border-b h-14 hover:bg-teal-300/60 transition-all duration-300"
              >
                {/* Example lesson block */}
                {day === "Mon" && time === "10:30" && (
                  <LessonBlock
                    subject="Math"
                    className="10-A"
                  />
                )}
                {day === "Tue" && time === "08:50" && (
                  <LessonBlock
                    subject="Math, Physics"
                    className="10-A"
                  />
                )}
                {day === "Wed" && time === "08:00" && (
                  <LessonBlock
                    subject="Math"
                    className="10-A"
                  />
                )}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
