// components/class/ClassCard.tsx
import Link from "next/link";

type ClassCardProps = {
  id: string;
  name: string;
  grade: string;
  studentsCount: number;
  journalActive: boolean;
  lastLessonDate?: string;
};

export default function ClassCard({
  id,
  name,
  grade,
  studentsCount,
  journalActive,
  lastLessonDate,
}: ClassCardProps) {
  return (
    <Link href={`/teacher/classes/${id}`}>
      <div className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            📘 {name}
          </h3>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              journalActive
                ? "bg-teal-100 text-teal-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {journalActive ? "Journal Active" : "No Journal"}
          </span>
        </div>

        {/* Info */}
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>Grade: <span className="font-medium">{grade}</span></p>
          <p>Students: <span className="font-medium">{studentsCount}</span></p>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-100" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {lastLessonDate
              ? `Last lesson: ${lastLessonDate}`
              : "No lessons yet"}
          </p>

          <span className="text-sm font-medium text-blue-600 transition group-hover:translate-x-1">
            Open Journal →
          </span>
        </div>
      </div>
    </Link>
  );
}
