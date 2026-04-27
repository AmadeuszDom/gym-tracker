import WorkoutsHeader from "./WorkoutsHeader";
import WorkoutsCalendar from "./WorkoutsCalendar";

function WorkoutsSection() {
  return (
    <section className="flex-1 p-4 bg-[#111119] text-[#E4E4E7] flex flex-col gap-6">
      <WorkoutsHeader username="Tomasz" />
      <WorkoutsCalendar />
    </section>
  );
}

export default WorkoutsSection;
