import TeacherHeader from "./components/teacher-header";
import TeacherStats from "./components/teacher-stats";
import TeacherClasses from "./components/teacher-classes";
import TeacherWeeklyCalendar from "./components/teacher-weekly-calendar";

export default function TeacherProfilePage() {
  return (
    <section className="flex flex-col gap-8">
      <TeacherHeader />
      <TeacherStats />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <TeacherClasses />
        </div>
        <div className="col-span-8">
          <TeacherWeeklyCalendar />
        </div>
      </div>
    </section>
  );
}

