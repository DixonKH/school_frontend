import { FiUsers } from "react-icons/fi";

function KpiCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-row justify-between gap-1">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-2xl font-semibold">{value}</span>
      </div>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
        <FiUsers className="h-6 w-6 text-emerald-600" />
      </span>
    </div>
  );
}

export default KpiCard;
