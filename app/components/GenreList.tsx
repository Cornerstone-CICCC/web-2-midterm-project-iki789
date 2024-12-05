import React from "react";
import { FaFire } from "react-icons/fa6";

const GenreList = () => {
  return (
    <div className="flex ">
      <div className="overflow-x-auto flex space-x-2 py-5">
        <div className="flex items-center justify-center text-xl bg-white text-black rounded-3xl p-6 basis-1/4 flex-shrink-0">
          <FaFire className="mr-3" />
          Trending
        </div>
      </div>
    </div>
  );
};

export default GenreList;
