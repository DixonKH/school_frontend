
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuMessageCircle } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

const teacher = {
    fullName: "Max Leiter",
    classes: "10-A",
    phone: "1234567890",
    email: "fj5Bc@example.com",
    address: "Istanbul, Turkey",
    subject: "Russian",
    
}

export default function TeacherModal({ setOpen }: any) {
  return (
    <div className="flex-1 rounded-xl shadow-sm hover:transform-all duration-300 hover:scale-101 cursor-pointer flex py-4 px-6 justify-between items-start bg-white">
      <div className="flex items-center justify-center gap-6">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
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
      <div className="flex gap-8 items-center">
        <div className="flex flex-col gap-2 border-l border-l-teal-300 pl-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Date of Birth</p>
            <p className="text-sm font-medium text-gray-500">12/12/1996</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Email</p>
            <p className="text-sm font-medium text-gray-500">
              o0k1T@example.com
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Phone</p>
            <p className="text-sm font-medium text-gray-500">
              +90 555 555 55 55
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-l border-l-teal-300 pl-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Date of Birth</p>
            <p className="text-sm font-medium text-gray-500">12/12/1996</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Email</p>
            <p className="text-sm font-medium text-gray-500">
              o0k1T@example.com
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Phone</p>
            <p className="text-sm font-medium text-gray-500">
              +90 555 555 55 55
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="w-7 h-7 cursor-pointer flex justify-center items-center bg-teal-200 rounded-full"
      >
        <GoPencil className="w-3.5 h-3.5 text-teal-700" />
      </button>
    </div>
  );
}
