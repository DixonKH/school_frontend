import { Card } from "@/components/ui/card";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];

const schedule: Record<string, Record<string, { subject: string; teacher: string }>> = {
  Mon: {
    "08:00": { subject: "Math, English, History, Geography, Business Studies, Computer Science", teacher: "Mr. Ali" },
    "09:00": { subject: "English, History, Geography, Business Studies, Computer Science, Physics", teacher: "Ms. Sara" },
  },
  Tue: {
    "10:00": { subject: "Physics, Chemistry, Biology, Computer Science", teacher: "Mr. John" },
  },
  Wed: {
    "08:00": { subject: "Chemistry, Geography, Biology, Computer Science, Business Studies", teacher: "Ms. Lina" },
    "11:00": { subject: "History, Art, Music, Science, Geography, Biology", teacher: "Mr. Bob" },
  },
};

export function ClassSchedule() {
  return (
    <div className="px-5 py-6 border border-gray-300 rounded-xl">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">
          Class schedule
        </h3>
        <p className="text-sm text-muted-foreground">
          Weekly timetable for 10-A class
        </p>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `80px repeat(${days.length}, minmax(120px, 1fr))`,
          }}
        >
          {/* Header row */}
          <div />
          {days.map((day) => (
            <div
              key={day}
              className="text-sm font-medium text-center pb-2"
            >
              {day}
            </div>
          ))}

          {/* Time rows */}
          {times.map((time) => (
            <>
              {/* Time label */}
              <div
                key={time}
                className="text-xs text-muted-foreground py-3"
              >
                {time}
              </div>

              {/* Cells */}
              {days.map((day) => {
                const item = schedule[day]?.[time];
                return (
                  <div
                    key={day + time}
                    className="border border-gray-600 border-dashed rounded-lg m-1 min-h-14 flex items-center justify-center"
                  >
                    {item && (
                      <ScheduleItem
                        subject={item.subject}
                        teacher={item.teacher}
                      />
                    )}
                  </div>
                );
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScheduleItem({
  subject,
  teacher,
}: {
  subject: string;
  teacher: string;
}) {
  return (
    <div className="w-full h-full bg-teal-300/30 text-primary rounded-md p-2 text-xs text-center">
      <div className="flex font-semibold">{subject}</div>
      <div className="text-[11px] opacity-70">
        {teacher}
      </div>
    </div>
  );
}

