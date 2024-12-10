import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  mId: number;
  title: string;
  rating: number;
  year: string;
  poster: string;
  mediaType: "movie" | "tv";
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg">
      <div className="rounded-2xl h-full relative">
        <Link href={`/details/${props.mediaType}/${props.mId}`}>
          <img
            className="rounded-2xl object-cover h-full"
            src={`https://image.tmdb.org/t/p/original${props.poster}`}
            alt=""
          />
        </Link>
        <div className="absolute w-full bottom-0 left-0 p-2 rounded-bl-2xl rounded-br-2xl bg-gradient-to-r from-[#000]">
          <div className="font-semibold mb-1 text-white">{props.title}</div>
          <div className="flex text-sm divide-solid divide-x-2 divide-white divide-opacity-25">
            <div className="flex items-center pr-3 text-white">
              <FaStar className="text-yellow-500 mr-1" />
              {props.rating ? props.rating.toFixed(1) : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
