import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

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
          <Image src="/avatar.jpg" width={40} height={40} alt="avatar" />
          <div className="flex flex-col">
            Admin User
            <span className="text-xs">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
