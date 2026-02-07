// components/JournalTable.tsx
import JournalCell from "./JournalCell";

const students = [
  { id: 1, name: "Aliyev Jamshid" },
  { id: 2, name: "Karimova Dilnoza" },
  { id: 3, name: "Rahmonov Aziz" },
];

const lessonDates = [
  "05.09",
  "07.09",
  "09.09",
  "12.09",
  "14.09",
  "16.09",
  "19.09",
  "21.09",
  "23.09",
  "26.09",
  "28.09",
  "30.09",
  "03.10",
  "05.10",
  "07.10",
  "10.10",
  "12.10",
  "14.10",
  "17.10",
  "19.10",
];

export default function JournalTable() {
  return (
    <div className="border rounded-md border-gray-200 overflow-auto max-h-[70vh]">
      <table className="border-collapse min-w-max w-full">
        {/* HEADER */}
        <thead className="sticky top-0 z-20 bg-accent text-gray-600">
          <tr>
            <th className="sticky left-0 z-30 bg-accent border px-4 py-2 w-56 text-left">
              Talaba
            </th>

            {lessonDates.map((date) => (
              <th
                key={date}
                className="border px-2 py-2 text-center text-sm"
              >
                {date}
              </th>
            ))}

            <th className="border px-3 text-sm">CH1</th>
            <th className="border px-3 text-sm">YAK</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-teal-200/50">
              <td className="sticky left-0 z-10 bg-background border px-4 py-2 font-medium">
                {student.name}
              </td>

              {lessonDates.map((date) => (
                <td key={date} className="border px-1 py-1 text-center">
                  <JournalCell />
                </td>
              ))}

              {/* Chorak baho */}
              <td className="border text-center">
                <JournalCell final />
              </td>

              {/* Yakuniy baho */}
              <td className="border text-center">
                <JournalCell final />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
