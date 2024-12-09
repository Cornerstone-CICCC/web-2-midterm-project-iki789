"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const stateMap = {
  0: {
    url: "/sleeping.gif",
    alt: "sleeping",
  },
  1: {
    url: "/shock.gif",
    alt: "shocked",
    length: 7000,
  },

  2: {
    url: "/sit-sleep.gif",
    alt: "sitting",
  },
  3: {
    url: "/sitting.gif",
    alt: "sitting",
    length: 5100,
  },
  4: {
    url: "/active.gif",
    alt: "sitting",
  },
};

const sleepUrls = [
  { text: "･･「マグロ」", url: "" },
  { text: "･🍖「さしみ」･･", url: "" },
  { text: "「カルカン」🐟･", url: "" },
];

const urls = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "/about" },
];

const Jiji = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentState, setCurrentState] = useState<{
    url: string;
    alt: string;
    length?: number;
  }>();
  const [wait, setWait] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    (function () {
      if (!wait) {
        if (clickCount < 10) {
          setWait(true);
          setCurrentState(stateMap[0]);
          setWait(false);
        }

        if (currentState != stateMap[2]) {
          if (clickCount >= 10 && clickCount <= 20) {
            setWait(true);
            setCurrentState(stateMap[1]);
            setTimeout(() => {
              setCurrentState(stateMap[2]);
              setWait(false);
            }, stateMap[1].length);
            return;
          }
        }

        if (currentState != stateMap[3] || currentState != stateMap[4]) {
          if (clickCount >= 21) {
            setCurrentState(stateMap[3]);
            setTimeout(() => {
              setCurrentState(stateMap[4]);
            }, stateMap[3].length);
            return;
          }
        }
      }
    })();
  }, [clickCount]);

  const Menu = (
    <div className="relative rounded-xl z-[1] w-[180px] h-[140px] pb-7 top-[36px] left-[-50px] bg-[url('/bubble.png')] bg-contain">
      <div
        className="p-4 text-black z-[1] w-full"
        style={{
          writingMode:
            currentState !== stateMap[3] && currentState !== stateMap[4]
              ? "vertical-rl"
              : "unset",
        }}
      >
        {currentState === stateMap[2] &&
          sleepUrls.map((item) => (
            <div key={`${item.text} sleepyUrl`} className="font-bold">
              <a href="#">{item.text}</a>
            </div>
          ))}

        {currentState === stateMap[3] || currentState === stateMap[4] ? (
          <div className="text-center">
            <div className="font-bold mb-1 underline">Menu</div>
            {urls.map((item) => (
              <Link
                key={`${item.text} urls`}
                href={item.url}
                className="block mb-1"
              >
                {item.text}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );

  const handleClick = () => {
    setClickCount(clickCount + 1);
    // console.log(currentState === stateMap[4], currentState, stateMap[3]);
    if (
      currentState === stateMap[2] ||
      currentState === stateMap[3] ||
      currentState === stateMap[4]
    ) {
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-[31]">
      {showMenu ? Menu : <></>}
      <div className="flex justify-end">
        <img
          role="button"
          className="h-[150px] object-fill"
          src={currentState?.url}
          alt={currentState?.alt}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Jiji;
