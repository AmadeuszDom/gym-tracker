interface Props {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
  color2: string;
}

function SummaryCard({ icon, title, value, color, color2 }: Props) {
  return (
    <div className="summaryCard bg-[#2a2a3a] rounded-xl p-3 my-5 flex items-center gap-4">
      <div id="category" className="flex items-center justify-between gap-10">
        <div
          id="icon"
          className="rounded-md p-2"
          style={{ color: color, backgroundColor: `${color}1A` }}
        >
          {icon}
        </div>

        <span className="text-[#4ADE80] bg-[#4ADE80]/10 p-2 rounded-2xl text-xs font-medium">
          +X%
        </span>
      </div>
    </div>
  );
}

export default SummaryCard;
