import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StudentsFilters() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Select>
        <SelectTrigger className="w-full max-w-36">
          <SelectValue placeholder="Select a class" />
        </SelectTrigger>
        <SelectContent className="bg-white border-0 overflow-y-auto">
          <SelectGroup>
            <SelectLabel>All Classes</SelectLabel>
            <SelectItem value="apple">1-A</SelectItem>
            <SelectItem value="banana">1-B</SelectItem>
            <SelectItem value="blueberry">2-A</SelectItem>
            <SelectItem value="grapes">2-B</SelectItem>
            <SelectItem value="pineapple">3-A</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full max-w-36">
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent className="bg-white border-0">
          <SelectGroup>
            <SelectLabel>Student Status</SelectLabel>
            <SelectItem value="apple">Active</SelectItem>
            <SelectItem value="banana">Inactive</SelectItem>
            <SelectItem value="blueberry">Graduated</SelectItem>
            <SelectItem value="grapes">Transferred</SelectItem>
            <SelectItem value="pineapple">Dropped</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      </div>
      <input
        placeholder="Search student..."
        className=" border border-gray-400 focus:ring-1 focus:ring-secondary rounded-lg px-4 py-2 w-72"
      />
    </div>
  );
}
