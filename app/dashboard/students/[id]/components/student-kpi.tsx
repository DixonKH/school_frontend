interface KPIProps {
  label: string;
  value: string | number;
}

function KPICard({ label, value }: KPIProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-1 hover:scale-[1.02] transition">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}

export default function StudentKpiSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <KPICard label="Average Score" value="4.2" />
      <KPICard label="Attendance" value="92%" />
      <KPICard label="Total Grades" value="134" />
      <KPICard label="Enrollment" value="2024-09-01" />
    </div>
  );
}