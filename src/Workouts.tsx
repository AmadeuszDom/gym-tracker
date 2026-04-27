import { useState } from "react";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import WorkoutsSection from "./Components/Workouts/WorkoutsSection";

function Workouts() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {" "}
      <Navbar onMenuToggle={() => setIsSideBarOpen(!isSideBarOpen)}></Navbar>
      <div className="flex flex-1 w-full">
        <Sidebar isActive={isSideBarOpen} />
        <WorkoutsSection />
      </div>
    </div>
  );
}

export default Workouts;
