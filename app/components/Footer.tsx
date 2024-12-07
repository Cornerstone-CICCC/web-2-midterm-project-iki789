import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto mb-8">
        <div className="flex justify-between items-center rounded-3xl border-slate-300 py-4 px-6 bg-slate-400 text-black bg-opacity-25 dark:text-white dark:bg-sky-500 dark:bg-opacity-25">
          <div className="text-sm">2024 AniMovies Inc.</div>
          <div className="flex gap-2">
            <a
              href="#"
              className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
