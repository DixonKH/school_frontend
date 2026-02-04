// components/JournalCell.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Value = "" | "A" | "L" | "2" | "3" | "4" | "5";

export default function JournalCell({ final = false }: { final?: boolean }) {
  const [value, setValue] = useState<Value>("");

  const values: Value[] = final
    ? ["", "3", "4", "5"]
    : ["", "A", "L", "2", "3", "4", "5"];

  const styles: Record<Value, string> = {
    "": "",
    A: "bg-red-100 text-red-700",
    L: "bg-yellow-100 text-yellow-700",
    "2": "bg-red-100 text-yellow-700",
    "3": "bg-yellow-100 text-yellow-700",
    "4": "bg-blue-100 text-blue-700",
    "5": "bg-green-100 text-green-700",
  };

  const nextValue = () => {
    const index = values.indexOf(value);
    setValue(values[(index + 1) % values.length]);
  };

  return (
    <button
      onClick={nextValue}
      className={cn(
        "h-8 w-8 rounded border text-sm font-semibold transition",
        styles[value]
      )}
    >
      {value || "—"}
    </button>
  );
}
