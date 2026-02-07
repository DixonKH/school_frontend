import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdAddAPhoto } from "react-icons/md";

export default function StudentHeader({ setOpen }: any) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow">
      <div className="flex justify-center items-center gap-4">
        <div className="relative w-24 h-24">
          <Avatar className="relative w-24 h-24">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
          <button className="absolute bottom-0 right-0 w-7 h-7 p-1 bg-teal-500 cursor-pointer rounded-full flex justify-center items-center">
            <MdAddAPhoto className="w-5 h-5 text-white" />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Salom, Dilshod 👋</h1>
          <p className="text-muted-foreground">
            10-A sinf • 2025–2026 o‘quv yili
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-muted-foreground">Student ID</p>
        <p className="font-semibold">#ST-10234</p>
        <button onClick={() => setOpen(true)} className="text-sm font-semibold bg-teal-500 text-white px-4 py-2 rounded">Edit</button>
      </div>
    </div>
  );
}
