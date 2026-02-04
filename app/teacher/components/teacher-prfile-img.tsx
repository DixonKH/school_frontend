import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuMessageCircle } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { MdAddAPhoto } from "react-icons/md";

export default function TeacherImgProfile() {
    return (
        <div className="flex items-center justify-center gap-6">
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
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-gray-800">Max Leiter</h1>
          <p className="text-sm font-semibold text-teal-500">
            Russian | English | 10-A class Leader
          </p>
          <p className="font-medium">Istanbul, Turkey</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-teal-200 w-10 h-10 rounded-lg flex justify-center items-center">
              <LuMessageCircle className="w-5 h-5 text-teal-600" />
            </span>
            <span className="bg-teal-200 w-10 h-10 rounded-lg flex justify-center items-center">
              <AiOutlinePhone className="w-5 h-5 text-teal-600" />
            </span>
          </div>
        </div>
      </div>
    );
}