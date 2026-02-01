"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", attendance: 92 },
  { day: "Tue", attendance: 88 },
  { day: "Wed", attendance: 94 },
  { day: "Thu", attendance: 90 },
  { day: "Fri", attendance: 96 },
  { day: "Sat", attendance: 98 },
];

export default function AttendanceSection() {
  return (
    <section className="w-full rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Attendance Overview
          </h2>
          <p className="text-sm text-gray-500">
            Weekly student attendance rate
          </p>
        </div>

        <div className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
          +3.2%
        </div>
      </div>

      {/* Chart */}
      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="day" />
            <YAxis domain={[80, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="attendance"
              strokeWidth={3}
              stroke="#22c55e"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}



