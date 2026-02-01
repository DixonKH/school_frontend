// const mockDays = Array.from({ length: 30 }).map((_, i) => ({
//   day: i + 1,
//   status:
//     i % 7 === 0
//       ? "absent"
//       : i % 5 === 0
//       ? "late"
//       : "present",
// }));

// export function AttendanceCalendar() {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6">
//       <h3 className="font-semibold mb-4">Monthly Attendance</h3>

//       <div className="grid grid-cols-7 gap-2">
//         {mockDays.map((d) => (
//           <div
//             key={d.day}
//             className={`
//               h-12 flex items-center justify-center rounded-md text-sm font-medium
//               ${
//                 d.status === "present"
//                   ? "bg-teal-100 text-teal-700"
//                   : d.status === "late"
//                   ? "bg-yellow-100 text-yellow-700"
//                   : "bg-red-100 text-red-700"
//               }
//             `}
//           >
//             {d.day}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// attendance-calendar.tsx
"use client";

import { useState } from "react";
import { getMonthDays } from "./attendance.utils";
import clsx from "clsx";

// attendance.types.ts
export type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE";

export type AttendanceDay = {
  date: string; // YYYY-MM-DD
  status: AttendanceStatus;
};


type Props = {
  data?: AttendanceDay[]; // backenddan keladi
};

export default function AttendanceCalendar({ data = [] }: Props) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const days = getMonthDays(year, month);

  const map = new Map(data.map((d) => [d.date, d.status]));

  function statusColor(status?: string) {
    if (status === "PRESENT") return "bg-emerald-500 text-white";
    if (status === "ABSENT") return "bg-red-500 text-white";
    if (status === "LATE") return "bg-yellow-400 text-black";
    return "bg-zinc-100 text-zinc-400";
  }

  return (
    <div className="rounded-2xl bg-white shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          Attendance – {new Date(year, month).toLocaleString("en-US", { month: "long", year: "numeric" })}
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() => setMonth((m) => (m === 0 ? 11 : m - 1))}
            className="px-3 py-1 rounded-lg bg-muted text-white"
          >
            ←
          </button>
          <button
            onClick={() => setMonth((m) => (m === 11 ? 0 : m + 1))}
            className="px-3 py-1 rounded-lg bg-muted text-white"
          >
            →
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-sm text-center text-muted-foreground mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, i) => {
          if (!date) return <div key={i} />;

          const key = date.toISOString().slice(0, 10);
          const status = map.get(key);

          return (
            <div
              key={key}
              className={clsx(
                "h-16 rounded-xl flex flex-col items-center justify-center text-sm cursor-pointer transition",
                statusColor(status)
              )}
            >
              <span className="font-medium">{date.getDate()}</span>
              <span className="text-xs opacity-80">{status ?? "—"}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-6 text-sm">
        <Legend color="bg-emerald-500" label="Present" />
        <Legend color="bg-red-500" label="Absent" />
        <Legend color="bg-yellow-400" label="Late" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded ${color}`} />
      <span>{label}</span>
    </div>
  );
}

