import  AttendanceCalendar from "./attendance-calendar";
import { AttendanceSummaryChart } from "./attendance-summary-chart";
import { AttendanceLegend } from "./attendance-legend";

export function StudentAttendanceSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Attendance</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceCalendar />
        </div>

        <div className="flex flex-col gap-4">
          <AttendanceSummaryChart />
          <AttendanceLegend />
        </div>
      </div>
    </div>
  );
}
