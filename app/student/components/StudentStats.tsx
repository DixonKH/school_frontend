export {StarsIcon} from 'lucide-react'

export default function StudentStats() {
  const stats = [
    { label: "O‘rtacha baho", value: "4.3", color: "text-green-600" },
    { label: "Yo‘qlama", value: "96%", color: "text-blue-600" },
    { label: "Fanlar soni", value: "12", color: "text-purple-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white p-5 rounded-xl shadow"
        >
          <p className="text-sm text-muted-foreground">{s.label}</p>
          <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
        </div>
      ))}
    </div>
  );
}
