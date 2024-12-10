import React, { useEffect } from "react";
import KokiFloating from "./KokiFloating";

const FsLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-svh w-svw absolute z-20 bg-white dark:bg-gray-900 top-0 flex justify-center items-center">
      <KokiFloating />
    </div>
  );
};

export default FsLoader;
