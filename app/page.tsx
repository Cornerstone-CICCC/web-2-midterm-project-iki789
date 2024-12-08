"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Slide from "./components/Slide";
import {
  fetchTopMovies,
  fetchTopSeries,
  fetchTrending,
  TrendingResponseItem,
} from "./services/mService";
import delayPromise from "./utils/delayPromise";
import FsLoader from "./components/FsLoader";
import forceLoadHiddenImages from "./utils/ImageLoader";
import Loader from "./components/Loader";
import Jiji from "./components/Jiji";

export default function Home() {
  const [mainLoading, setMainLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [trending, setTrending] = useState<TrendingResponseItem[]>([]);
  const [topMovies, setTopMovies] = useState<TrendingResponseItem[]>([]);
  const [topSeries, setTopSeries] = useState<TrendingResponseItem[]>([]);

  useEffect(() => {
    delayPromise(forceLoadHiddenImages, 0).then(() => {
      setMainLoading(false);
    });
  }, []);

  useEffect(() => {
    (async function () {
      const trending = (await delayPromise(
        fetchTrending
      )) as TrendingResponseItem[];
      const topMovies = (await delayPromise(
        fetchTopMovies
      )) as TrendingResponseItem[];
      const topSeries = (await delayPromise(
        fetchTopSeries
      )) as TrendingResponseItem[];
      setTrending(trending);
      setTopMovies(topMovies);
      setTopSeries(topSeries);
      setIsLoading(false);
    })();
  }, [isLoading]);

  return (
    <div className="min-h-screen mb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main>
        {mainLoading ? <FsLoader /> : null}
        {isLoading ? (
          <div className="mt-40">
            <Loader />
          </div>
        ) : (
          <>
            <section className="container mx-auto mb-4">
              <h2 className="font-bold text-2xl mb-4"></h2>
              <Slide items={trending}></Slide>
            </section>

            <section className="container mx-auto mt-8">
              <h2 className="font-bold text-2xl mb-4 text-black dark:text-white">
                Top Rated Movies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {topMovies.map((movie) => (
                  <Card
                    key={movie.id}
                    mId={movie.id}
                    title={movie.title || ""}
                    rating={movie.vote_average}
                    year={movie.first_air_date}
                    poster={movie.poster_path}
                    mediaType={"movie"}
                  />
                ))}
              </div>
            </section>

            <section className="container mx-auto mt-8">
              <h2 className="font-bold text-2xl mb-4 text-black dark:text-white">
                Top Rated Series
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {topSeries.map((series) => (
                  <Card
                    key={series.id}
                    mId={series.id}
                    title={series.name || ""}
                    rating={series.vote_average}
                    year={series.first_air_date}
                    poster={series.poster_path}
                    mediaType={"tv"}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
