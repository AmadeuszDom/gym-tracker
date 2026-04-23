interface SidebarProps {
  isActive: boolean;
}

function Sidebar({ isActive }: SidebarProps) {
  const sidebarItems = [
    { icon: "🏠", label: "Dashboard", route: "/dashboard" },
    { icon: "💪", label: "Add Workout", route: "/" },
    { icon: "📊", label: "Progress", route: "/" },
    { icon: "📅", label: "History", route: "/" },
    { icon: "⚙️", label: "Settings", route: "/" },
  ];

  return (
    <section
      className={`fixed top-17 inset-y-0 left-0 z-20 w-64 transform flex flex-col justify-between bg-[#16161F] text-[#E4E4E7] border-r-2 border-[#E8793B]/20 py-4 px-1.5 transition-all duration-300 ease-in-out md:relative md:w-60 md:inset-auto md:border-r-2 md:border-b-2 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none md:translate-x-0 md:opacity-100 md:pointer-events-auto"}`}
    >
      <ul className="">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <a
              href={`${item.route}`}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-[#2a2a3a] transition text-[#E4E4E7] rounded-lg focus:text-[#E8793B] focus:bg-[#E8793B]/10"
            >
              {item.icon} {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        id="tip"
        className="block p-4 rounded-xl text-sm text-[#E8793B] bg-[#E8793B]/10 border-2 border-[#E8793B]/20"
      >
        <p>
          <span>💡</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloribus quos deserunt magni.
        </p>
      </div>
    </section>
  );
}

export default Sidebar;
