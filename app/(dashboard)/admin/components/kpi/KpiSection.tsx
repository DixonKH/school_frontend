import { FiUsers } from "react-icons/fi";
import { LuGraduationCap, LuCalendarCheck } from "react-icons/lu";
import { Users, GraduationCap, BookOpen, CreditCard } from "lucide-react";
import KpiCard from "./KpiCard";

const kpis = [
{
title: "Total Students",
value: "1,248",
change: "+12%",
trend: "up",
icon: FiUsers,
},
{
title: "Total Students",
value: "1,248",
change: "+12%",
trend: "up",
icon: FiUsers,
},
{
title: "Active Classes",
value: "86",
change: "+4%",
trend: "up",
icon: LuGraduationCap,
},
{
title: "Attendance Rate",
value: "92%",
change: "-1.2%",
trend: "down",
icon: LuCalendarCheck,
},
];

export default function KpiSection() {
return (
<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
{kpis.map((kpi) => (
<KpiCard key={kpi.title} {...kpi} />
))}
</section>
);
}


