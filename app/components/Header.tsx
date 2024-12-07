import React from "react";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center rounded-3xl border-slate-300 py-6 px-4 bg-slate-400 text-black bg-opacity-25 dark:text-white dark:bg-sky-500 dark:bg-opacity-25">
          <div>
            <Search />
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
