import React from "react";
import { FaRegSun, FaSearch } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center rounded-3xl border-slate-300 py-6 px-4 bg-slate-400 text-black bg-opacity-25 dark:text-white dark:bg-sky-500 dark:bg-opacity-25">
          <div>
            <button className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white">
              <FaSearch />
            </button>
          </div>
          <div className="font-bold">AniMovie</div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
