"use client";

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

const Jiji = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentState, setCurrentState] = useState<{
    url: string;
    alt: string;
    length?: number;
  }>();
  const [wait, setWait] = useState<boolean>(false);

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

        if (currentState != stateMap[3]) {
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
    console.log(clickCount, currentState);
  }, [clickCount]);

  return (
    <div className="fixed bottom-0 right-0 z-[31]">
      <div>Menu</div>
      <div>
        <img
          role="button"
          className="h-[150px] object-fill"
          src={currentState?.url}
          alt={currentState?.alt}
          onClick={() => setClickCount(clickCount + 1)}
        />
      </div>
    </div>
  );
};

export default Jiji;
