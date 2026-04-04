import Icon from "../../../public/Icons";

function MainSectionRecents() {
  const latestActivites = [
    {
      icon: Icon.workout,
      title: "Push day",
      desc: "Chest, shoulders, triceps",
      sets: 16,
      duration: "52m",
      timestamp: "4 days ago",
    },
  ];
  return (
    <div
      id="recents"
      className="flex flex-col gap-2 items-start md:items-center"
    >
      <h2 className="font-bold text-lg">Recent activity</h2>
      <div
        id="activites"
        className="flex flex-col gap-0 w-full bg-[#2a2a3a]/40 rounded-2xl"
      ></div>
    </div>
  );
}

export default MainSectionRecents;
