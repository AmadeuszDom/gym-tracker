import Icon from "../../../public/Icons";
import ActivityCard from "./ActivityCard";

function MainSectionRecents() {
  const latestActivites = [
    {
      icon: Icon.workout,
      title: "Push day",
      desc: "Chest, shoulders, triceps",
      sets: 16,
      duration: "52m",
      timestamp: "4 days ago",
      marginb: true,
    },
    {
      icon: Icon.workout,
      title: "Pull day",
      desc: "Back, biceps",
      sets: 12,
      duration: "45m",
      timestamp: "2 days ago",
      marginb: true,
    },
    {
      icon: Icon.workout,
      title: "Leg day",
      desc: "Quads, hamstrings etc.",
      sets: 19,
      duration: "1h 13m",
      timestamp: "Yesterday",
    },
  ];
  return (
    <div
      id="recents"
      className="flex flex-col gap-2 items-start md:items-center"
    >
      <h2 className="font-bold text-lg ">Recent activity</h2>
      <div
        id="activites"
        className="flex flex-col w-full  rounded-2xl border-[#2a2a3a] border md:w-4/6 lg:w-1/2"
      >
        {latestActivites.map((activity, index) => (
          <ActivityCard
            key={index}
            icon={activity.icon}
            title={activity.title}
            desc={activity.desc}
            sets={activity.sets}
            duration={activity.duration}
            timestamp={activity.timestamp}
            marginb={activity.marginb}
          ></ActivityCard>
        ))}
      </div>
    </div>
  );
}

export default MainSectionRecents;
