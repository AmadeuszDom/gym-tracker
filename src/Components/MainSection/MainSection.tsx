import MainSectionHeader from "./MainSectionHeader";
import MainSectionSummary from "./MainSectionSummary";
import MainSectionRecents from "./MainSectionRecents";
function MainSection() {
  return (
    <section
      id="mainBody"
      className="flex-1 p-6 bg-[#111119] text-[#E4E4E7] flex flex-col gap-2.5"
    >
      <MainSectionHeader username="Huju osrany oszczany" />
      <MainSectionSummary></MainSectionSummary>
      <MainSectionRecents></MainSectionRecents>
    </section>
  );
}

export default MainSection;
