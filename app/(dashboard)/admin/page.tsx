import AttendanceSection from "./components/attendance/AttendanceSection";
import KpiSection from "./components/kpi/KpiSection";
import PerformanceSection from "./components/performance/PerformanceSection";

export default function Dashboard() {
  return (
    <div className="flex flex-col p-2">
      <div className="space-y-2 mb-4">
        <div className="text-2xl font-semibold">Dashboard</div>
        <p className="text-gray-700 text-md font-normal">
          Welcome back! Here's what's happening at your school.
        </p>
      </div>
      <div className="flex w-full flex-col gap-12 items-center justify-between">
        <KpiSection />
        <PerformanceSection />
        <AttendanceSection />
      </div>
    </div>
  );
}