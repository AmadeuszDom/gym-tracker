import { useState } from "react";
import pPicture from "../assets/skarpety.png";
import Icon from "../../public/Icons";

type NavbarProps = {
  onMenuToggle: () => void;
};

function Navbar({ onMenuToggle }: NavbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <nav className="navigation flex items-center justify-between p-3 gap-2 bg-[#16161F] text-[#E4E4E7] border-b-2 border-[#E8793B]/20">
      <div className="logoContainer flex items-center gap-3">
        <button
          id="menuButton"
          className="font-bold md:hidden cursor-pointer p-1.5 rounded-xl hover:bg-[#2a2a3a] transition text-[#E8793B]"
          onClick={onMenuToggle}
        >
          {Icon.navOpenSideBar}
        </button>
        <div
          id="navLogo"
          className="bg-linear-to-r from-[#E8793B] to-[#F4A261] p-1 rounded-md"
        >
          {Icon.logo}
        </div>
      </div>
      <div id="navLinks" className="hidden md:flex items-center gap-4 ml-6">
        <a
          href="/dashboard"
          className="nav-link px-3 py-1.5 rounded-md text-sm font-medium hover:text-white hover:bg-[#2a2a3a] transition text-[#8888A0] focus:text-[#E8793B] focus:bg-[#E8793B]/10"
        >
          DASHBOARD
        </a>
        <a
          href="#"
          className="nav-link px-3 py-1.5 rounded-md text-sm font-medium hover:text-white hover:bg-[#2a2a3a] transition text-[#8888A0] focus:text-[#E8793B] focus:bg-[#E8793B]/10"
        >
          PROGRESS
        </a>
        <a
          href="#"
          className="nav-link px-3 py-1.5 rounded-md text-sm font-medium hover:text-white hover:bg-[#2a2a3a] transition text-[#8888A0] focus:text-[#E8793B] focus:bg-[#E8793B]/10"
        >
          WORKOUTS
        </a>
      </div>
      <div
        className="userProfileContainer flex items-center gap-2 cursor-pointer hover:bg-[#2a2a3a] transition text-[#8888A0] rounded-xl px-1.5"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <img
          src={pPicture}
          alt=""
          className="profilePicture rounded-full shadow-xl/80 w-10"
        />
        {Icon.navOpenProfileDropDown}
      </div>

      <div
        className={
          isProfileOpen
            ? `profileDropDown absolute right-0 mt-12 transition ease-out duration-200 opacity-100 scale-100 pointer-events-auto`
            : `profileDropDown absolute right-0 mt-12 transition ease-out duration-200 opacity-0 scale-95 pointer-events-none`
        }
      >
        <div className="bg-[#16161F] border-2 border-[#E8793B]/20 rounded-xl p-4 absolute right-0 mt-2">
          <div id="profile">
            <a
              href="#"
              className="flex items-center justify-between px-6 py-1.5 text-sm font-medium hover:bg-[#2a2a3a] transition text-[#E4E4E7] rounded-lg"
            >
              {Icon.profileDropDownProfile}
              Profile
            </a>
          </div>
          <div id="settings">
            <a
              href="#"
              className="flex items-center justify- px-6 py-1.5 text-sm font-medium hover:bg-[#2a2a3a] transition text-[#E4E4E7] rounded-lg"
            >
              {Icon.profileDropDownSettings}
              Settings
            </a>
          </div>
          <div id="logout" className="">
            <a
              href="#"
              className="flex items-center justify-between px-6 py-2 text-sm font-medium hover:bg-[#2a2a3a] transition text-[#E4E4E7] rounded-lg"
            >
              {Icon.profileDropDownLogout}
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
