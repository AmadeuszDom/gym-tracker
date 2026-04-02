import { useState } from "react";
import pPicture from "../assets/skarpety.png";

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
          <svg
            className="w-5 h-4 text-[#E8793B]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </button>
        <div
          id="navLogo"
          className="bg-linear-to-r from-[#E8793B] to-[#F4A261] p-1 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              fill="none"
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
            />
          </svg>
        </div>
      </div>
      <div id="navLinks" className="hidden md:flex items-center gap-4 ml-6">
        <a
          href="#"
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
          className="profilePicture rounded-full w-10"
        />
        <svg
          className="w-2.5 h-2 text-[#8888A0]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Profile
            </a>
          </div>
          <div id="settings">
            <a
              href="#"
              className="flex items-center justify- px-6 py-1.5 text-sm font-medium hover:bg-[#2a2a3a] transition text-[#E4E4E7] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Settings
            </a>
          </div>
          <div id="logout" className="">
            <a
              href="#"
              className="flex items-center justify-between px-6 py-2 text-sm font-medium hover:bg-[#2a2a3a] transition text-[#E4E4E7] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
