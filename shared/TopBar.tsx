import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="relative">
        <CiSearch size={20} className="absolute top-3 left-2 text-gray-500" />
        <input
          type="text"
          placeholder=" Search Students, Teachers, Classes..."
          className="w-96 py-3 pl-8 text-sm rounded-xl ring-secondary bg-gray-100"
        />
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="relative">
          <IoIosNotificationsOutline size={22} className="w-6 h-6" />
          <span className="badge text-gray-600">3</span>
        </div>
        <div className="flex items-center gap-2">
         <div className="relative w-12 h-12">
                   <Avatar className="relative w-12 h-12">
                   <AvatarImage
                     src="https://github.com/maxleiter.png"
                     alt="@maxleiter"
                   />
                   <AvatarFallback>LR</AvatarFallback>
                 </Avatar>
                   <button className="absolute -bottom-1 -right-1 w-5 h-5 p-1 bg-teal-500 cursor-pointer rounded-full flex justify-center items-center">
                     <MdAddAPhoto className="w-5 h-5 text-white" />
                   </button>
                 </div>
          <div className="flex flex-col">
            Admin User
            <span className="text-xs">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
