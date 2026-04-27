interface WorkoutsHeaderProps {
  username?: string;
}

function WorkoutsHeader({ username }: WorkoutsHeaderProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2">
        <h1 className="font-bold">
          Podsumowanie biezacego tydania ,{" "}
          <span className="bg-linear-to-r from-[#E8793B] to-[#F4A261] text-transparent bg-clip-text">
            {username}
          </span>
        </h1>
      </header>
    </div>
  );
}

export default WorkoutsHeader;
