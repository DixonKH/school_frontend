import { Card, CardContent } from "@/components/ui/card";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";

export default function KpiCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
}: any) {
  const isUp = trend === "up";
  return (
    <Card className="relative overflow-hidden border-0 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <h2 className="text-3xl font-semibold tracking-tight">{value}</h2>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                isUp ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {isUp ? (
                <IoTrendingUp className="h-4 w-4" />
              ) : (
                <IoTrendingDown className="h-4 w-4" />
              )}
              {change} last months
            </div>
          </div>

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${
              isUp ? "bg-emerald-100" : "bg-rose-100"
            }`}
          >
            <Icon
              className={`h-6 w-6 ${
                isUp ? "text-emerald-600" : "text-rose-600"
              }`}
            />
          </div>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 h-1 ${
            isUp ? "bg-emerald-500" : "bg-rose-500"
          }`}
        />
      </CardContent>
    </Card>
  );
}


