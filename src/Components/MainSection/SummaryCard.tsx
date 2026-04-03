interface Props {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
  color2: string;
}

function SummaryCard({ icon, title, value, color, color2 }: Props) {
  return (
    <div className="summaryCard bg-[#2a2a3a] rounded-2xl p-4 my-5 flex flex-col items-start gap-4 md:w-2/3 lg:w-2/5">
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
        <span className="text-[#4ADE80] bg-[#4ADE80]/10 p-2 rounded-2xl text-xs font-medium">
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
              className="bg-brand text-xs font-medium text-white text-center leading-none rounded-full h-3 flex items-center justify-center"
              style={{
                width: "45%",
                background: `linear-gradient(to right, ${color} 0%, ${color2} 100%)`,
              }}
            >
              45%
            </div>
          </div>
          <div className="flex justify-between text-[#6a6a70] mt-2">
            <span className="text-xs font-medium">x% of weekly goal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
