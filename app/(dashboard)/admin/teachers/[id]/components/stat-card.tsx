
export function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-1">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
} 
