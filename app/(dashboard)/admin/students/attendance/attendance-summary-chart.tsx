"use client";

import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Present", value: 20 },
  { name: "Late", value: 6 },
  { name: "Absent", value: 4 },
];

export function AttendanceSummaryChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 pb-10 h-80">
      <h3 className="font-semibold mb-3">Attendance Summary</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill={cn("#1a68ea")} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
