// attendance.utils.ts
export function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: (Date | null)[] = [];

  // start padding
  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(null);
  }

  // real days
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  return days;
}
