import { StudentAttendanceSection } from "./attendance/attendance-section";
import KpiCard from "./components/KpiCard";
import { StudentsFilters } from "./components/students-filters";
import { StudentsTable } from "./components/students-table";

const students = [
  {
    id: 1,
    fullName: "John Doe",
    classId: "9-A",
    parentName: "Jane Doe",
    phone: "1234567890",
    status: "ACTIVE",
  },
  {
    id: 2,
    fullName: "John Doe",
    classId: "9-A",
    parentName: "Jane Doe",
    phone: "1234567890",
    status: "INACTIVE",
  },
  {
    id: 3,
    fullName: "John Doe",
    classId: "9-A",
    parentName: "Jane Doe",
    phone: "1234567890",
    status: "GRADUATED",
  },
  {
    id: 4,
    fullName: "John Doe",
    classId: "9-A",
    parentName: "Jane Doe",
    phone: "1234567890",
    status: "TRANSFERRED",
  },
];

export default function StudentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Students</h1>
        <p className="text-gray-500">
          Manage and monitor all students in your school
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KpiCard title="Total students" value="245" />
        <KpiCard title="Active" value="230" />
        <KpiCard title="Inactive" value="15" />
      </div>

      <StudentsFilters />
      <StudentsTable students={students} />
    </div>
  );
}
