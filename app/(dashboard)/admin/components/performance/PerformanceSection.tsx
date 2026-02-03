// import PerformanceCard from "./PerformanceCard";
// import { performanceData } from "./performance.mock";
// import { MdOutlineCalculate } from "react-icons/md";

// export default function PerformanceSection() {
//   return (
//     <section className="w-full space-y-4">
//       {/* Header */}
//       <div className="flex flex-col gap-1">
//         <h2 className="text-xl font-semibold">Class Performance</h2>
//         <p className="text-md text-muted-foreground text-gray-700">
//           Average academic performance by class
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {performanceData.map((item) => (
//           <PerformanceCard key={item.id} data={item} />
//         ))}
//       </div>

//       {/* Insight */}
//       <div className="flex items-center text-muted-foreground">
//         <MdOutlineCalculate size={18} className="inline mr-1" />
//         <span className="text-sm">
//           Performance is calculated based on recent exams and assessments.
//         </span>
//       </div>
//     </section>
//   );
// }

// components/dashboard/performance/PerformanceSection.tsx
import Link from "next/link";
import ClassPerformanceCard from "./PerformanceCard";

const mockData = [
  {
    id: 1,
    name: "9-A",
    score: 78,
    attendance: 92,
    students: 32,
  },
  {
    id: 2,
    name: "9-B",
    score: 64,
    attendance: 85,
    students: 28,
  },
  {
    id: 3,
    name: "10-A",
    score: 88,
    attendance: 96,
    students: 30,
  },
  {
    id: 4,
    name: "10-B",
    score: 55,
    attendance: 72,
    students: 25,
  },
];

export default function PerformanceSection() {
  return (
    <section className="w-full space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Class Performance
          </h2>
          <p className="text-sm text-gray-500">
            Academic score & attendance overview
          </p>
        </div>

        <Link href="/admin/classes" className="text-sm px-3 py-1 rounded-lg bg-gray-100">
          View all
        </Link>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {mockData.map((item) => (
          <ClassPerformanceCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}



