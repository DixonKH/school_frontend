import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const teachers = [
  {
    id: 1,
    name: "John Smith",
    subjects: ["Math", "Physics"],
    classes: ["9-A", "10-B"],
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Alice Johnson",
    subjects: ["Biology"],
    classes: ["9-A", "10-B"],
    status: "INACTIVE",
  },
  {
    id: 3,
    name: "Mark Davis",
    subjects: ["Chemistry"],
    classes: ["9-A", "10-B"],
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Emily Wilson",
    subjects: ["English"],
    classes: ["9-A", "10-B"],
    status: "ACTIVE",
  },
];

export default function TeachersPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Teachers</h1>
          <p className="text-sm text-gray-500">
            Manage teachers and assignments
          </p>
        </div>
        <button className="bg-ring text-white px-4 py-2 rounded-xl">
          Add teacher
        </button>
      </div>

      {/* Search */}
      <input
        placeholder="Search teacher..."
        className=" border border-gray-400 focus:ring-1 focus:ring-secondary rounded-lg px-4 py-2 w-72"
      />

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr className="text-left">
              <th className="px-4 py-3">Teacher</th>
              <th className="px-4 py-3">Subjects</th>
              <th className="px-4 py-3">Classes</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-3 font-medium cursor-pointer">
                  <Link href={`/dashboard/teachers/${teacher.id}`}>
                    {teacher.name}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  {teacher.subjects.map((subject) => (
                    <Badge key={subject}>{subject}</Badge>
                  ))}
                </td>
                <td className="px-4 py-3">
                  {teacher.classes.map((cls) => (
                    <Badge key={cls}>{cls}</Badge>
                  ))}
                </td>
                <td>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      teacher.status === "ACTIVE"
                        ? "bg-teal-100 text-green-700"
                        : "bg-red-100 text-red-700",
                    )}
                  >
                    {teacher.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
