// attendance-detail-modal.tsx
"use client";

import clsx from "clsx";

type Props = {
  open: boolean;
  onClose: () => void;
  date?: string;
  status?: "PRESENT" | "ABSENT" | "LATE";
};

export default function AttendanceDetailModal({
  open,
  onClose,
  date,
  status,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Attendance Detail</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        {/* Date */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">{date}</p>
        </div>

        {/* Status */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Status</p>
          <span
            className={clsx(
              "inline-flex px-3 py-1 rounded-full text-sm font-medium",
              status === "PRESENT" && "bg-emerald-100 text-emerald-700",
              status === "ABSENT" && "bg-red-100 text-red-700",
              status === "LATE" && "bg-yellow-100 text-yellow-700"
            )}
          >
            {status ?? "Not recorded"}
          </span>
        </div>

        {/* Placeholder */}
        <div className="text-sm text-gray-500">
          Later: reason, time, edit actions…
        </div>
      </div>
    </div>
  );
}
