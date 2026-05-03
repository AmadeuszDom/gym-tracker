import SummaryCard from "./SummaryCard";
import Icon from "../../../public/Icons";
import { useWorkouts } from "../../contexts/WorkoutsContext";
import { weeklyStats } from "../../utils/workoutHelpers";

function MainSectionSummary() {
  const { workouts } = useWorkouts();
  const { totalWeight, totalSets, totalReps, count } = weeklyStats(workouts);
  const cardsData = [
    {
      icon: Icon.calcCard,
      title: "TOTAL WEIGHT LIFTED",
      value: `${totalWeight} kg`,
      color: "#E8793B",
      color2: "#F4A261",
      perc: 45,
    },

    {
      icon: Icon.clockCard,
      title: "TOTAL TIME",
      value: "5h 24m",
      color: "#6366F1",
      color2: "#818CF8",
      perc: 52,
    },
    {
      icon: Icon.repCard,
      title: "TOTAL SETS",
      value: `${totalSets} sets`,
      color: "#EC4899",
      color2: "#F472B6",
      perc: 65,
    },
  ];
  return (
    <div
      id="summary"
      className="flex flex-col gap-2 items-start md:items-center"
    >
      <h2 className="font-bold text-lg">Weekly Summary</h2>
      <div
        id="summaryCards"
        className="flex flex-col gap-0.5 w-full md:flex-row md:gap-x-6 md:gap-y-0 md:w-7/8 md:flex-wrap"
      >
        {cardsData.map((card, index) => (
          <SummaryCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            color={card.color}
            color2={card.color2}
            perc={card.perc}
          />
        ))}
      </div>
    </div>
  );
}

export default MainSectionSummary;
