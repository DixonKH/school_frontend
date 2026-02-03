import { ClassCard } from "./[id]/components/class-card";

export default function ClassPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Classes</h1>
          <p className="text-sm text-muted-foreground">
            All school classes overview
          </p>
        </div>
        <button className="bg-ring cursor-pointer text-white px-4 py-2 rounded-md">
          Add teacher
        </button>
      </div>

      <div className="flex items-center justify-between">
        <input
          placeholder="Search class..."
          className=" border border-gray-400 focus:ring-1 focus:ring-secondary rounded-lg px-4 py-2 w-72"
        />
        <div className="font-semibold text-sm">Sort by:
          <select className="px-2 py-1 ml-1 border border-gray-300 rounded-lg focus:outline-none">
          <option value="name">Z-a</option>
          <option value="date">A-z</option>
          </select></div>
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
