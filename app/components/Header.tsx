import React from "react";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";
import Link from "next/link";
import Jiji from "./Jiji";

const Header = () => {
  return (
    <header>
      <AccessibilityNav />
      <div className="container mx-auto">
        <div className="flex justify-between items-center rounded-3xl border-slate-300 py-6 px-4 bg-slate-400 text-black bg-opacity-25 dark:text-white dark:bg-sky-500 dark:bg-opacity-25">
          <div>
            <Search />
          </div>
          <Link href="/" className="font-bold">
            Koki's Anime
          </Link>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <Jiji />
    </header>
  );
};

const AccessibilityNav = () => {
  return (
    <div className="absolute top-0 left-0">
      <nav>
        <Link
          href="/"
          className="p-4 w-32 text-center bg-orange-400 rounded-bl-xl rounded-br-xl ring-4 text-black absolute top-[-100vh] left-[-100vw] focus:top-0 focus:left-0"
          tabIndex={0}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="p-4 w-32 text-center bg-orange-400 rounded-bl-xl rounded-br-xl ring-4 text-black absolute top-[-100vh] left-[-100vw] focus:top-0 focus:left-0"
        >
          About Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
