"use client";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import TeacherEditModal from "./teacher-edit-modal";

export default function TeacherHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </div>
        <div>
          <h2 className="text-xl font-semibold">John Smith</h2>
          <div className="flex gap-2 mt-1">
            <Badge>Math</Badge>
            <Badge>Physics</Badge>
          </div>
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg cursor-pointer bg-ring text-white"
      > 
        Edit
      </button>
      <TeacherEditModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
