import React from "react";

const Offline = () => {
  return (
    <div>
      <div className="text-center text-gray-600">
        <h2 className="text-2xl font-bold">
          Koki can not fetch anime for you.
        </h2>
        <p>Make sure you are online and try again.</p>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <img
          src="/koki_lost.png"
          alt="Koki delivering"
          className="w-[350px] lg:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Offline;
