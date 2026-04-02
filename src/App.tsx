import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <Navbar onMenuToggle={() => setIsSideBarOpen((state) => !state)} />
      <div className="flex flex-1 w-full">
        <Sidebar isActive={isSideBarOpen} />
        <MainSection></MainSection>
      </div>
    </div>
  );
}

export default App;
