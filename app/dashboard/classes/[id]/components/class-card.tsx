import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function ClassCard() {
  return (
    <Link href="/dashboard/classes/1" className="group">
      <div
        className="
          p-5 h-full border border-gray-300 rounded-xl cursor-pointer
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-1
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition">
              10-A Class
            </h3>
            <p className="text-sm text-muted-foreground">
              Academic year 2025–2026
            </p>
          </div>

          <Badge variant="secondary">
            Active
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Stat
            icon={<Users size={18} />}
            label="Students"
            value="28"
          />
          <Stat
            icon={<TrendingUp size={18} />}
            label="Avg score"
            value="4.5"
          />
        </div>

        {/* Footer */}
        <div className="mt-6 text-sm text-muted-foreground">
          Attendance: <span className="font-medium text-teal-600">93%</span>
        </div>
      </div>
    </Link>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn("p-2 rounded-lg text-white", label === 'Students' ? "bg-blue-500" : "bg-green-400")}>
        {icon}
      </div>
      <div className="text-sm">
        <p className="text-muted-foreground">{label}</p>
        <div className="flex gap-1">
         {value >= "4.5" && value <= "5" && <Star size={18} className="text-yellow-400" />}
        <p className="font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

