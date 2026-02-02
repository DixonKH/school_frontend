import { Badge } from "@/components/ui/badge";

export default function TeacherClasses() {
  return (
    <div className="p-3 border border-gray-300 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Classes</h3>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 rounded-xl border border-l-4 border-l-blue-400 border-gray-300 transition cursor-pointer">
          <div className="flex justify-between">
            <h4 className="font-medium">10-A</h4>
            <Badge className="bg-blue-600 text-white">Math</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            28 students
          </p>
        </div>
         <div className="p-4 rounded-xl border border-l-4 border-l-red-500 border-gray-300 transition cursor-pointer">
          <div className="flex justify-between">
            <h4 className="font-medium">10-A</h4>
            <Badge className="bg-blue-600 text-white">Math</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            28 students
          </p>
        </div>
      </div>
      
    </div>
  );
}
