import { ClassCard } from "./[id]/components/class-card";
import ClassDetailPage from "./[id]/page";

export default function ClassPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Classes</h1>
        <p className="text-sm text-muted-foreground">
          All school classes overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </section>
  );
}
