import { Star } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">
          Class {!params.id ? "1" : params.id}
        </h1>
        <p className="text-gray-500">
          Class performance overview by subject and date range
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3">
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a Subjects" />
          </SelectTrigger>
          <SelectContent className="bg-white border-0">
            <SelectGroup>
              <SelectLabel>Subjects</SelectLabel>
              <SelectItem value="apple">Maths</SelectItem>
              <SelectItem value="banana">English</SelectItem>
              <SelectItem value="blueberry">Science</SelectItem>
              <SelectItem value="grapes">History</SelectItem>
              <SelectItem value="pineapple">Geography</SelectItem>
              <SelectItem value="watermelon">Chemistry</SelectItem>
              <SelectItem value="watermelon">Biology</SelectItem>
              <SelectItem value="watermelon">Physics</SelectItem>
              <SelectItem value="watermelon">Computer Science</SelectItem>
              <SelectItem value="watermelon">Business Studies</SelectItem>

            </SelectGroup>
          </SelectContent>
        </Select>

        <input
          type="date"
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
        />
        <input
          type="date"
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
        />
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Average score */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
          <p className="text-sm text-gray-500">Average score</p>

          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-gray-900">
              {data.averageScore}
            </span>
            <span className="text-gray-400">/5</span>
          </div>

          {/* stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={
                  i < data.averageScore
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>

        {/* Total grades */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
          <p className="text-sm text-gray-500">Total grades</p>
          <p className="text-3xl font-semibold text-gray-900">
            {data.totalGrade}
          </p>
          <p className="text-xs text-gray-400">
            Used to calculate average score
          </p>
        </div>

        {/* Performance label */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center">
          <span className="text-xs text-gray-500 mb-2">Performance</span>
          <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            Good
          </span>
        </div>
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="bg-white rounded-2xl shadow-sm p-6 h-72 flex items-center justify-center text-gray-400">
        Average score trend (coming soon)
      </div>
    </div>
  );
}
