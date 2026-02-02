
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ClassFilter() {
    return (
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
    );
}