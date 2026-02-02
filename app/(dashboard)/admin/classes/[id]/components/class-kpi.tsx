import { Star } from "lucide-react";

export default function ClassKpi() {
  const data = {
    averageScore: 4,
    totalGrade: 13,
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Average score */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
        <p className="text-sm text-gray-500">Average score</p>

        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-gray-900">
            {data.averageScore}
          </span>
          <span className="text-gray-400">/5</span>
        </div>

        {/* stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < data.averageScore
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* Total grades */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
        <p className="text-sm text-gray-500">Total grades</p>
        <p className="text-3xl font-semibold text-gray-900">
          {data.totalGrade}
        </p>
        <p className="text-xs text-gray-400">Used to calculate average score</p>
      </div>

      {/* Performance label */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center">
        <span className="text-xs text-gray-500 mb-2">Performance</span>
        <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
          Good
        </span>
      </div>
    </div>
  );
}
