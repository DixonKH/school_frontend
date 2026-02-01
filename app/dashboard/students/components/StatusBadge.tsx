export function StudentStatusBadge({ status }: { status: string }) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  );
}

export default StudentStatusBadge;