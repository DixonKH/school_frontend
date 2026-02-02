'use client'
import { useState } from "react";
import { ClassEditModal } from "./class-edit-modal";

export function ClassHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">10-A</h2>
        <p className="text-sm text-muted-foreground">
          Academic year 2024–2025
        </p>
      </div>

      <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-md cursor-pointer bg-ring text-white">
        Edit class
      </button>
      <ClassEditModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
