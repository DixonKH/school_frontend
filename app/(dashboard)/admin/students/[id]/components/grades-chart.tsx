"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { subject: "Math", score: 5 },
  { subject: "English", score: 4 },
  { subject: "Physics", score: 3 },
  { subject: "Chemistry", score: 4.0 },
  { subject: "Biology", score: 4 },
  { subject: "Geography", score: 5 },
  { subject: "History", score: 2 },
  { subject: "Art", score: 3.0 },
  { subject: "Music", score: 4 },
  { subject: "Science", score: 3 },
];

export function GradesChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 pb-14 h-86">
      <h3 className="font-semibold mb-4">Average Score by Subject</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockData}>
          <XAxis dataKey="subject" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Bar dataKey="score" fill="#1a68ea" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
