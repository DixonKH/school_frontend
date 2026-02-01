import { StudentStatusBadge } from "../../components/StatusBadge";

interface Props {
  student: any;
}

export default function StudentHeader({ student }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          {student.fullName.charAt(0)}
        </div>

        <div>
          <h1 className="text-xl font-semibold flex items-center gap-2">
            {student.fullName}
            <StudentStatusBadge status="ACTIVE" />
          </h1>
          <p className="text-sm text-gray-500">
            Class ID: {student.classId}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50">
          Edit
        </button>
        <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm">
          Disable
        </button>
      </div>
    </div>
  );
}
