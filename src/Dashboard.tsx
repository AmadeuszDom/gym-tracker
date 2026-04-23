import { useState } from "react";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import DashboardSection from "./Components/Dashboard/DashboardSection";

function Dashboard() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onMenuToggle={() => setIsSideBarOpen((state) => !state)} />
      <div className="flex flex-1 w-full">
        <Sidebar isActive={isSideBarOpen} />
        <DashboardSection></DashboardSection>
      </div>
    </div>
  );
}

export default Dashboard;
