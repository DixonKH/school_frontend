import Link from "next/link";

type Props = {
  data: {
    id: number;
    name: string;
    score: number;
    attendance: number;
    students: number;
  };
};

export default function ClassPerformanceCard({ data }: Props) {
  return (
    <Link
      href={`/dashboard/classes/${data.id}`}
      className="block"
    >
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-5 space-y-4 cursor-pointer">
        {/* header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Class {data.name}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
            Good
          </span>
        </div>

        {/* score */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Average score</span>
            <span className="font-medium">{data.score}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${data.score}%` }}
            />
          </div>
        </div>

        {/* attendance */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Attendance</span>
            <span className="font-medium">{data.attendance}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${data.attendance}%` }}
            />
          </div>
        </div>

        {/* footer */}
        <div className="pt-2 flex items-center justify-between text-sm text-gray-500">
          <span>{data.students} students</span>
          <span className="text-blue-600">View details →</span>
        </div>
      </div>
    </Link>
  );
}
