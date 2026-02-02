import { ClassAttendance } from "./components/class-attendance";
import { ClassHeader } from "./components/class-header";
import ClassKpi from "./components/class-kpi";
import { ClassPerformance } from "./components/class-performance";
import { ClassSchedule } from "./components/class-schedule";
import { ClassStudents } from "./components/class-students";

type Props = {
  params: {
    id: string;
  };
};

export default function ClassDetailPage({ params }: Props) {
  // MOCK (keyin API ulanadi)
  const data = {
    averageScore: 4,
    totalGrade: 13,
  };

  return (
    <section className="flex flex-col gap-8">
      <ClassHeader />
      <ClassKpi />
      <ClassSchedule />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 space-y-6">
          <ClassPerformance />
          <ClassAttendance />
        </div>
        <div className="col-span-5">
          <ClassStudents />
        </div>
      </div>
    </section>
  );
}
