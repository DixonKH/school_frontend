import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function StudentRow({
  student,
}: {
  student: {
    id: string;
    name: string;
    status: string;
  };
}) {
  return (
    <Link
      href={`/students/${student.id}`}
      className="
        flex items-center justify-between
        rounded-lg px-3 py-2
        hover:bg-blue-400 hover:text-white transition
      "
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            {student.name[0]}
          </AvatarFallback>
        </Avatar>

        <span className="text-sm font-medium">
          {student.name}
        </span>
      </div>

      <Badge
        variant={
          student.status === "ACTIVE"
            ? "secondary"
            : "destructive"
        }
      >
        {student.status}
      </Badge>
    </Link>
  );
}
