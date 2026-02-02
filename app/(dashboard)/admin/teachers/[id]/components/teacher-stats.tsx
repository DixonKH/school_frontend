import { StatCard } from "./stat-card";

export default function TeacherStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard title="Classes" value={5} />
      <StatCard title="Students" value={120} />
      <StatCard title="Weekly lessons" value={18} />
    </div>
  );
}
