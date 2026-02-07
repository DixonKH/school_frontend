export default function AttendanceCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="font-semibold text-lg mb-4">🟢 Attendance</h2>

      <div className="space-y-2 text-sm">
        <p>Active: <b>88</b></p>
        <p>Inactive: <b>3</b></p>
        <p>Absent: <b className="text-red-600">1</b></p>
      </div>

      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-green-500 rounded-full w-[96%]" />
      </div>
    </div>
  );
}
