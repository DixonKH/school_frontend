
import { GoPencil } from "react-icons/go";
import TeacherProfile from "./teacher-profile";
import TeacherImgProfile from "./teacher-prfile-img";

export default function TeacherModal({ setOpen }: any) {
  return (
    <div className="flex-1 rounded-xl shadow-sm hover:transform-all duration-300 hover:scale-101 cursor-pointer flex py-4 px-6 justify-between items-start bg-white">
      <TeacherImgProfile />
      <TeacherProfile />

      <button
        onClick={() => setOpen(true)}
        className="w-7 h-7 cursor-pointer flex justify-center items-center bg-teal-200 rounded-full"
      >
        <GoPencil className="w-3.5 h-3.5 text-teal-700" />
      </button>
    </div>
  );
}
