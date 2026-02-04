import { Badge } from "@/components/ui/badge";

export function LessonBlock({
  subject,
  className,
}: {
  subject: string;
  className: string;
}) {
  return (
    <div className=" cursor-pointer gap-1 inset-1 rounded-lg bg-accent p-2 text-xs flex flex-col justify-between items-center">
      <span className="flex font-medium">{subject}</span>
      <Badge className="bg-white text-black">
        {className} class
      </Badge>
    </div>
  );
}
