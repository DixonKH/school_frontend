
import { StudentRowActions } from "./student-row-actions";
import StudentStatusBadge from "./StatusBadge";

interface Props {
  students: any[];
}

export function StudentsTable({ students }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Student</th>
            <th className="px-4 py-3">Class</th>
            <th className="px-4 py-3">Parent</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="px-4 py-3 font-medium">
                {student.fullName}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {student.classId}
              </td>

              <td className="px-4 py-3">
                {student.parentName ?? "-"}
              </td>

              <td className="px-4 py-3">
                {student.phone ?? "-"}
              </td>

              <td className="px-4 py-3">
                <StudentStatusBadge status="ACTIVE" />
              </td>

              <td className="px-4 py-3 text-right">
                <StudentRowActions id={student.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
