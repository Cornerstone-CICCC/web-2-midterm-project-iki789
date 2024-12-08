"use client";

import React from "react";
import Button from "./Button";
import { FaCirclePlay } from "react-icons/fa6";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import WatchTrailerButton from "./WatchTrailerButton";
import { TrendingResponseItem } from "../services/mService";

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TrendingResponseItem[];
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
      {props.items.map((item) => (
        <SplideSlide key={item.id}>
          <div
            className={`bg-slate-300 w-full h-full flex items-end min-h-[60vh] text-gray-900 p-8 rounded-3xl bg-cover bg-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-3xl before:-z-[1] before:content-[''] before:bg-gradient-to-tr before:from-[#000] ${
              props.className || ""
            }`}
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
            }}
          >
            <div className="max-w-[250px] md:max-w-[400px] mb-10">
              <div className="font-bold text-4xl text-white mb-10 md:text-[5rem] md:leading-[4.5rem]">
                {item.name}
              </div>
              <div className="mt-5">
                <WatchTrailerButton ytId={""} />
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slide;
