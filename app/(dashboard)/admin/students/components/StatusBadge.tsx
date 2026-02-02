export function StudentStatusBadge({ status }: { status: string }) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        isActive
          ? "bg-teal-100 text-green-700 text-xs font-medium"
          : "bg-red-100 text-red-700 text-sm font-medium"
      }`}
    >
      {status}
    </span>
  );
}

export default StudentStatusBadge;