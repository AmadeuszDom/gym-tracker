interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
  sets: number;
  duration: string;
  timestamp: string;
  marginb?: boolean;
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
    <div
      className={`flex flex-row justify-between rounded-t-2xl p-3 ${marginb ? "border-white border-b" : ""} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-white hover:bg-[#2a2a3a]`}
    >
      <div className="flex flex-row items-center gap-2">
        <div id="icon" className="bg-[#E8793B]/20 p-2 rounded-xl">
          {icon}
        </div>

        <div id="details">
          <h5 className="font-bold text-md">{title}</h5>
          <p className="font-light text-xs opacity-50">
            {desc} &bull; {sets} sets
          </p>
        </div>
      </div>

      <div id="time" className="flex flex-col items-center">
        <h5 className="font-semibold text-md">{duration}</h5>
        <p className="font-light text-xs opacity-50">{timestamp}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
