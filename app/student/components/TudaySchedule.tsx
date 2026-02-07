export default function TodaySchedule() {
  const lessons = [
    { time: "08:30", subject: "Matematika", teacher: "A. Karimov" },
    { time: "09:30", subject: "Ingliz tili", teacher: "S. Lee" },
    { time: "10:30", subject: "Fizika", teacher: "B. Tursunov" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="font-semibold text-lg mb-4">📚 Todays lesson</h2>
      <ul className="space-y-3">
        {lessons.map((l) => (
          <li
            key={l.time}
            className="flex justify-between border-b border-gray-300 pb-2 last:border-none"
          >
            <span className="font-medium">{l.time}</span>
            <span>{l.subject}</span>
            <span className="text-muted-foreground">
              {l.teacher}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
