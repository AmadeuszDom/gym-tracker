import MainSectionHeader from "./MainSectionHeader";
import MainSectionSummary from "./MainSectionSummary";
function MainSection() {
  return (
    <section
      id="mainBody"
      className="flex-1 p-6  bg-[#16161f] text-[#E4E4E7] flex "
    >
      <MainSectionHeader username="Huju osrany oszczany" />
      <MainSectionSummary></MainSectionSummary>
    </section>
  );
}

export default MainSection;
