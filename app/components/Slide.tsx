"use client";

import React from "react";
import Button from "./Button";
import { FaCirclePlay } from "react-icons/fa6";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import WatchTrailerButton from "./WatchTrailerButton";

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

const Slide = (props: SlideProps) => {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        arrows: false,
        // autoplay: true,
      }}
      aria-label=""
    >
      <SplideSlide>
        <div
          className={`bg-slate-300 w-full h-full flex items-end min-h-[60vh] text-gray-900 p-8 rounded-3xl bg-cover bg-center bg-[url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg')] relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-3xl before:-z-[1] before:content-[''] before:bg-gradient-to-br before:from-[#000] ${
            props.className || ""
          }`}
        >
          <div className="max-w-[250px] md:max-w-[400px] mb-10">
            <div className="font-bold text-4xl text-white mb-10 md:text-[5rem] md:leading-[4.5rem]">
              Puss in Boots: The Last Wish
            </div>
            <div className="mt-5">
              <WatchTrailerButton />
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Slide;
