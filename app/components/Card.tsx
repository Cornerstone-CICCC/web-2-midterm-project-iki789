import React from "react";
import { FaStar } from "react-icons/fa6";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  rating: string;
  year: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg">
      <div className="rounded-2xl relative">
        <img
          className="rounded-2xl"
          src="https://media.themoviedb.org/t/p/w440_and_h660_face/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
          alt=""
        />
        <div className="absolute bottom-0 left-0 p-2">
          <div className="font-semibold mb-1">{props.title}</div>
          <div className="flex text-sm divide-solid divide-x-2 divide-white divide-opacity-25">
            <div className="flex items-center pr-3">
              <FaStar className="text-yellow-500 mr-1" />
              {props.rating}
            </div>
            <div className="pl-3">{props.year}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
