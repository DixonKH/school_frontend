import Link from "next/link";
import { FiEdit, FiEye } from "react-icons/fi";

export function StudentRowActions({ id }: { id: string }) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Link
        href={`/admin/students/${id}`}
        className="text-gray-500 hover:text-primary"
      >
        <FiEye />
      </Link>

      <button className="text-gray-500 hover:text-primary">
        <FiEdit />
      </button>
    </div>
  );
}
