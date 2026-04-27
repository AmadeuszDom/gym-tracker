import DashboardHeader from "./DashboardHeader";
import DashboardPlanSection from "./DashboardPlanSection";

function DashboardSection() {
  return (
    <section
      id="mainBody"
      className="flex-1 p-4 bg-[#111119] text-[#E4E4E7] flex flex-col gap-2.5"
    >
      <DashboardHeader username="Tomasz"></DashboardHeader>
      {/*<DashboardPlanSection></DashboardPlanSection>*/}
    </section>
  );
}

export default DashboardSection;
