const items = [
  { label: "Present", color: "bg-teal-100 text-teal-700" },
  { label: "Late", color: "bg-yellow-100 text-yellow-700" },
  { label: "Absent", color: "bg-red-100 text-red-700" },
];

export function AttendanceLegend() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-2">
      {items.map((i) => (
        <div key={i.label} className="flex items-center gap-2 text-sm">
          <span className={`w-3 h-3 rounded-full ${i.color}`} />
          <span>{i.label}</span>
        </div>
      ))}
    </div>
  );
}
