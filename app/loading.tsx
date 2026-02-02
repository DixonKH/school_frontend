import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-6">
      
      {/* Page title */}
      <Skeleton className="h-8 w-1/3" />

      {/* KPI cards */}
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-24 rounded-xl" />
        <Skeleton className="h-24 rounded-xl" />
        <Skeleton className="h-24 rounded-xl" />
      </div>

      {/* Content area */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-4">
          <Skeleton className="h-48 rounded-xl" />
          <Skeleton className="h-48 rounded-xl" />
        </div>

        <div className="col-span-4">
          <Skeleton className="h-105 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
