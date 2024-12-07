"use client";

import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import Button from "./Button";

const WatchTrailerButton = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const YtModal = (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed w-full h-full top-0 left-0 rounded-2xl flex justify-center items-center z-[10] bg-white bg-opacity-80"
    >
      <div className="w-[800px] max-w-full h-[400px] px-3 rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          style={{
            borderRadius: "1rem",
          }}
          src="https://www.youtube.com/embed/tHb7WlgyaUc?si=Ulb9Zezmrd-dtnWi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );

  return (
    <div>
      {modalIsOpen ? YtModal : null}
      <Button
        onClick={() => setIsOpen(true)}
        className="text-xl w-full mt-2 flex justify-center border-2 rounded-2xl border-black text-black"
      >
        <FaCirclePlay className="mr-2" />
        <span className="">Watch Trailer</span>
      </Button>
    </div>
  );
};

export default WatchTrailerButton;
