import React from "react";
import Button from "./Button";
import { FaCirclePlay } from "react-icons/fa6";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={`bg-slate-300 w-full h-full text-gray-900 p-8 rounded-3xl bg-cover bg-[url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg')] relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-3xl before:-z-[1] before:content-[''] before:bg-gradient-to-r before:from-[#0000005e] ${
        props.className || ""
      }`}
    >
      <div className="max-w-[200px]">
        <div className="font-bold text-3xl text-white">
          Puss in Boots: The Last Wish
        </div>
        <div className="mt-5">
          <Button className="-ml-4">
            <FaCirclePlay className="mr-2" />
            Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
