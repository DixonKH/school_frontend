import  StudentHeader from "./components/student-header";
import  StudentKpiSection from "./components/student-kpi";
import  StudentTabs  from "./components/student-tabs";

export default function StudentDetailPage() {
  // keyin API’dan keladi
  const student = {
    id: "1",
    fullName: "John Doe",
    classId: "Class A",
    email: "",
    username: "",
    birthDate: "",
  };

  return (
    <div className="flex flex-col gap-6">
      <StudentHeader student={student} />
      <StudentKpiSection />
      <StudentTabs />
    </div>
  );
}
