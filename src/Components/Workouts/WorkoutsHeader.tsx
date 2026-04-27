interface WorkoutsHeaderProps {
  username?: string;
}

function WorkoutsHeader({ username }: WorkoutsHeaderProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-xl font-medium text-[#8888A0]">Witaj z powrotem</h2>
        <h1 className="font-bold text-3xl">
          Podsumowanie biezacego tygodnia,{" "}
          <span className="bg-linear-to-r from-[#E8793B] to-[#F4A261] text-transparent bg-clip-text">
            {username}
          </span>
        </h1>
        <div className="flex items-center justify-center gap-2.5 mt-4">
          <div className="flex flex-col gap-1 py-4 px-2 text-center bg-[#2a2a3a]/30 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white hover:bg-[#2a2a3a]/70 hover:-rotate-3">
            <h3 className="text-xl font-bold">0</h3>
            <p className="text-[#8888A0]">Treningi w tygodniu</p>
          </div>
          <div className="flex flex-col gap-1 py-4 px-4 text-center bg-[#2a2a3a]/30 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white hover:bg-[#2a2a3a]/70 hover:rotate-3">
            <h3 className="text-xl font-bold">
              0<span className="font-medium">'</span>
            </h3>
            <p className="text-[#8888A0]">laczny czas</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default WorkoutsHeader;
