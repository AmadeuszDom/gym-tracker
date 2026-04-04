interface Props {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
  color2: string;
  perc: number;
  percLastWeek?: number;
}

function SummaryCard({ icon, title, value, color, color2, perc }: Props) {
  return (
    <div className="summaryCard bg-[#2a2a3a]/40 rounded-2xl p-4 my-5 flex flex-col items-start gap-4 w-full md:flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-white hover:rotate-1">
      <div
        id="category"
        className="flex items-center justify-between gap-10 w-full "
      >
        <div
          id="icon"
          className="rounded-2xl p-2"
          style={{ color: color, backgroundColor: `${color}1A` }}
        >
          {icon}
        </div>
        <span className="text-[#4ADE80] bg-[#4ADE80]/10 p-3 rounded-2xl text-xs font-medium">
          + X%
        </span>
      </div>
      <div id="values" className="flex flex-col gap-2 w-full ">
        <h3 className="text-sm  text-[#6a6a70]">{title}</h3>
        <h4 className="text-3xl font-bold text-[#F3F4F6] font-JetBrains_Mono">
          {value}
        </h4>
        <div id="progressContainer">
          <div
            id="progressBar"
            className="w-full bg-neutral-quaternary rounded-full bg-[#5a5a70] mt-3"
          >
            <div
              className="bg-brand text-xs font-medium text-white text-center leading-none rounded-full h-1.5 flex items-center justify-center"
              style={{
                width: `${perc}%`,
                background: `linear-gradient(to right, ${color} 0%, ${color2} 100%)`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-[#6a6a70] mt-2">
            <span className="text-xs font-medium">{perc}% of weekly goal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
