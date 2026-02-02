import { Card } from "@/components/ui/card";
import { StudentRow } from "./students-row";

const students = [
  {
    id: "1",
    name: "Ali Karimov",
    status: "ACTIVE",
  },
  {
    id: "2",
    name: "Malika Saidova",
    status: "ACTIVE",
  },
  {
    id: "3",
    name: "Jasmin Akramova",
    status: "INACTIVE",
  },
  {
    id: "4",
    name: "Bekzod Rustamov",
    status: "ACTIVE",
  },
  {
    id: "5",
    name: "Shohruh Aliyev",
    status: "ACTIVE",
  },
];

export function ClassStudents() {
  return (
    <div className="px-5 py-6 border border-gray-300 rounded-xl h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          Students
        </h3>
        <span className="text-sm text-muted-foreground">
          {students.length}
        </span>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2 overflow-y-auto pr-1">
        {students.map((student) => (
          <StudentRow key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

