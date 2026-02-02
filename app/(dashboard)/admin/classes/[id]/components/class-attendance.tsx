"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const days = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  rate: Math.floor(Math.random() * 30) + 70, // mock 70–100%
}));

export function ClassAttendance() {
  return (
    <div className="p-5 py-6 border border-gray-300 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            Attendance
          </h3>
          <p className="text-sm text-muted-foreground">
            Monthly class attendance
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button className="p-1 rounded hover:bg-muted">
            <ChevronLeft size={16} />
          </button>
          <span className="font-medium">January 2025</span>
          <button className="p-1 rounded hover:bg-muted">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((d) => (
          <DayCell key={d.day} day={d.day} rate={d.rate} />
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 flex justify-between text-sm">
        <span>
          Average attendance:
          <strong className="ml-1">92%</strong>
        </span>
        <span className="text-muted-foreground">
          Absent days: 3
        </span>
      </div>
    </div>
  );
}

function DayCell({
  day,
  rate,
}: {
  day: number;
  rate: number;
}) {
  const color =
    rate > 90
      ? "bg-emerald-100 text-emerald-700"
      : rate > 80
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div
      className={`
        h-14 rounded-lg flex flex-col items-center justify-center
        text-xs font-medium cursor-pointer transition
        hover:scale-105 ${color}
      `}
    >
      <span>{day}</span>
      <span>{rate}%</span>
    </div>
  );
}


