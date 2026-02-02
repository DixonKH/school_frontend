import { GradesSummary } from "./grades-summary";
import { GradesChart } from "./grades-chart";

export function StudentGradesSection() {
  return (
    <div className="flex flex-col gap-6">
      <GradesSummary average={4.1} total={134} />
      <GradesChart />
    </div>
  );
}
