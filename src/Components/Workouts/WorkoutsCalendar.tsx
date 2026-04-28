const polishWeekDays = ["PN", "WT", "ŚR", "CZ", "PT", "SO", "ND"];

function getWeekStart(date: Date) {
  const day = date.getDay();
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(date.getDate() + (day === 0 ? -6 : 1 - day));
  return monday;
}

function createWeekDays(today: Date) {
  const start = getWeekStart(today);
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

function WorkoutsCalendar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatLocalDate = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate(),
    ).padStart(2, "0")}`;

  const todayString = formatLocalDate(today);
  const weekDays = createWeekDays(today);
  // Dates of past days in this week
  const completedDates = new Set(
    weekDays
      .filter((day) => formatLocalDate(day) < todayString)
      .map((day) => formatLocalDate(day)),
  );
  // Dates from stored workouts
  const stored =
    typeof window !== "undefined" ? localStorage.getItem("workouts") : null;
  const storedWorkouts: { date: string }[] = stored ? JSON.parse(stored) : [];
  const storedDates = new Set(storedWorkouts.map((w) => w.date));

  return (
    <div className="bg-[#16161F] border border-[#2a2a3a] rounded-[28px] p-5 w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8888A0]">
              bieżący tydzień
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Przegląd treningów
            </h2>
          </div>
          <p className="text-sm text-[#E4E4E7]/80">
            {today.toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "short",
            })}{" "}
            &#x2022;
            {weekDays[6].toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>

        <div className="grid grid-cols-7 gap-3">
          {weekDays.map((date, index) => {
            const isToday = formatLocalDate(date) === todayString;
            const hasWorkout = storedDates.has(date.toDateString());
            const dotClass = isToday
              ? "bg-[#4ADE80]"
              : hasWorkout
                ? "bg-[#4ADE80]"
                : "bg-[#8888A0]";

            return (
              <div
                key={date.toISOString()}
                className={`rounded-3xl border px-3 py-4 flex flex-col items-center gap-2 text-center transition ${
                  isToday
                    ? "border-[#EF4444] bg-[#EF4444]/10 shadow-[0_15px_35px_-25px_rgba(239,68,68,0.9)]"
                    : "border-[#2a2a3a] bg-[#111119]"
                }`}
              >
                <span className="text-xs font-semibold uppercase text-[#8888A0]">
                  {polishWeekDays[index]}
                </span>
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-semibold ${
                    isToday ? "text-[#EF4444]" : "text-white"
                  }`}
                >
                  {date.getDate()}
                </span>
                <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkoutsCalendar;
