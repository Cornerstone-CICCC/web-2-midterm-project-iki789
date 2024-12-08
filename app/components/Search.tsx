"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import { searchMovies, TrendingResponseItem } from "../services/mService";
import delayPromise from "../utils/delayPromise";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface SearchProps {}

const Search = (props: SearchProps) => {
  const [showOverlayer, setShowOverlayer] = useState<boolean>(false);

  return (
    <div>
      <SearchButton onClick={() => setShowOverlayer(true)} />
      {showOverlayer ? (
        <SearchOverlay onClose={() => setShowOverlayer(false)} />
      ) : null}
    </div>
  );
};

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay = ({ onClose }: SearchOverlayProps) => {
  const [results, setResults] = useState<TrendingResponseItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (searchValue) {
      (async function () {
        const results = (await delayPromise(() =>
          searchMovies(searchValue)
        )) as TrendingResponseItem[];
        setResults(results);
        setLoading(false);
      })();
    } else {
      setLoading(false);
      setResults([]);
    }
  }, [searchValue]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearchValue(e.target.value);
  };

  const handleCardClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed left-0 top-0 w-full h-full bg-slate-800 z-[30]"
      tabIndex={0}
    >
      <div className="flex justify-end mt-4 mr-2">
        <button
          onClick={onClose}
          className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white"
        >
          <IoMdClose className="text-xl" />
        </button>
      </div>
      <div className="container mx-auto">
        <div className="pt-10">
          <input
            className="w-full border-b-2 text-2xl capitalize font-semibold pb-2 outline-none border-black dark:border-white bg-transparent"
            type="text"
            name="search"
            placeholder="Search by Title or Genre"
            onChange={handleChange}
            value={searchValue}
            autoComplete="off"
          />
        </div>
        <div className="mt-6">
          {searchValue.length ? (
            <>
              {loading && searchValue ? (
                <div className="h-[75vh]">
                  <Loader />
                </div>
              ) : (
                <>
                  {!loading && searchValue ? (
                    <h2 className="text-orange-600 font-semibold text-3xl">
                      Results
                    </h2>
                  ) : null}

                  <div className="grid grid-cols-2 gap-2 items-start mt-4 h-[72vh] overflow-scroll md:grid-cols-4">
                    {!loading && results.length ? (
                      results.map((item) => (
                        <div onClick={handleCardClick}>
                          <Card
                            key={item.id + "search"}
                            mId={item.id}
                            title={item.title || item.name || ""}
                            rating={item.vote_average}
                            year={item.first_air_date}
                            poster={item.poster_path}
                            mediaType={item.media_type === "" ? "movie" : "tv"}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="text-3xl text-gray-600 mt-10 col-span-2">
                        No results found.
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

interface SearchButtonProps {
  onClick?: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-2 transition-all bg-transparent hover:bg-sky-800 hover:text-white"
    >
      <FaSearch />
    </button>
  );
};

export default Search;
