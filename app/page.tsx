"use client";

import { Suspense, useEffect, useState } from "react";
import Card from "./components/Card";
import FsLoader from "./components/FsLoader";
import Loader from "./components/Loader";
import Slide from "./components/Slide";
import { fetchTrending, TrendingResponseItem } from "./services/mService";
import delayPromise from "./utils/delayPromise";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [trending, setTrending] = useState<TrendingResponseItem[]>([]);

  useEffect(() => {
    (async function () {
      const trending = (await delayPromise(
        fetchTrending
      )) as TrendingResponseItem[];
      setTrending(trending);
      console.log({ trending });
      setIsLoading(false);
    })();
  }, [isLoading]);

  return (
    <div className="min-h-screen mb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="container mx-auto mb-4">
          <h2 className="font-bold text-2xl mb-4"></h2>
          <Slide items={trending}></Slide>
        </section>

        <section className="container mx-auto">
          <h2 className="font-bold text-2xl mb-4 text-black dark:text-white">
            Top Rated Animation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
            <Card
              id={""}
              title={"The Wild Robot"}
              rating={"8.0"}
              year={"2014"}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
