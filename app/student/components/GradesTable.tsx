export default function GradesTable() {
  const subjects = [
    { name: "Matematika", avg: 4.5, teacher: "A. Karimov" },
    { name: "Fizika", avg: 4.0, teacher: "B. Tursunov" },
    { name: "Ingliz tili", avg: 4.8, teacher: "S. Lee" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="font-semibold text-lg mb-4">📘 Grades</h2>

      <table className="w-full text-sm">
        <thead className="border-b border-gray-300 bg-accent">
          <tr>
            <th className="text-left py-2">Subjects</th>
            <th>Average</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((s) => (
            <tr key={s.name} className="border-b border-gray-300 last:border-none">
              <td className="py-2">{s.name}</td>
              <td className="text-center font-semibold">
                {s.avg}
              </td>
              <td className="text-center text-muted-foreground">
                {s.teacher}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
