"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";

const mockData = [
  { subject: "Math", avg: 4.3 },
  { subject: "English", avg: 4.1 },
  { subject: "Physics", avg: 3.6 },
  { subject: "Chemistry", avg: 3.9 },
  { subject: "History", avg: 4.5 },
  { subject: "Geography", avg: 4.2 },
  { subject: "Biology", avg: 4.0 },
  { subject: "Computer Science", avg: 3.7 },
  { subject: "Business Studies", avg: 3.8 },
  { subject: "Art", avg: 4.2 },
  { subject: "Music", avg: 4.1 },
  { subject: "Science", avg: 3.9 },
];

export function ClassPerformance() {
  return (
    <div className="p-5 py-6 border border-gray-300 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">
            Class performance
          </h3>
          <p className="text-sm text-muted-foreground">
            Average score by subject
          </p>
        </div>

        {/* filter (future API) */}
        <Select>
          <option>Last month</option>
          <option>Last semester</option>
        </Select>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockData}>
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar
              dataKey="avg"
              fill="#1a68ea"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Hint */}
      <p className="mt-4 text-xs text-muted-foreground">
        Scale: 1 (low) → 5 (excellent)
      </p>
    </div>
  );
}
