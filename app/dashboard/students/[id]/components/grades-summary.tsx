interface Props {
  average: number;
  total: number;
}

export function GradesSummary({ average, total }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl shadow-md p-5">
        <p className="text-sm text-gray-500">Average Score</p>
        <p className="text-3xl font-bold text-primary">{average}</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5">
        <p className="text-sm text-gray-500">Total Grades</p>
        <p className="text-3xl font-bold">{total}</p>
      </div>
    </div>
  );
}
