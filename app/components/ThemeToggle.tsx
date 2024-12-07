"use client";

import React, { useEffect, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";

const systemIsDarkTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(systemIsDarkTheme);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setIsDark(colorScheme === "dark");
      });
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      type="button"
      className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white"
      onClick={handleToggle}
    >
      {isDark ? <FaMoon /> : <FaRegSun />}
    </button>
  );
};

export default ThemeToggle;
