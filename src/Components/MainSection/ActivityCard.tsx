interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
  sets: number;
  duration: string;
  timestamp: string;
  marginb?: true;
}

function ActivityCard({
  icon,
  title,
  desc,
  sets,
  duration,
  timestamp,
  marginb,
}: Props) {
  return (
    <div className={`flex flex-row justify-between`}>
      <div id="icon">{icon}</div>
    </div>
  );
}

export default ActivityCard;
