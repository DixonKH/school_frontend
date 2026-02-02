import { Badge } from "@/components/ui/badge";

export function LessonBlock({
  subject,
  className,
}: {
  subject: string;
  className: string;
}) {
  return (
    <div className="absolute cursor-pointer inset-1 rounded-lg bg-yellow-400 p-2 text-xs flex flex-col justify-between items-center">
      <span className="font-medium">{subject}</span>
      <Badge className="bg-yellow-500 text-black">
        {className}
      </Badge>
    </div>
  );
}
