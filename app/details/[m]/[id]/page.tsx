"use client";

import { use, useEffect, useState } from "react";
// import WatchTrailerButton from "@/app/components/WatchTrailerButton";
import Loader from "@/app/components/Loader";
import { fetchDetails, MediaDetails } from "@/app/services/mService";
import delayPromise from "@/app/utils/delayPromise";

export default function Movies({
  params,
}: {
  params: Promise<{ id: number; m: "movie" | "tv" }>;
}) {
  const { id, m } = use(params);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [details, setDetails] = useState<MediaDetails>();

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const details = (await delayPromise(() =>
        fetchDetails(m, id)
      )) as MediaDetails;
      console.log({ details });

      // if (!details.success) {
      //   router.replace("/404");
      //   return;
      // }

      setDetails(details);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-[74vh] text-black dark:text-white mb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      {isLoading ? (
        <div className="mt-40">
          <Loader />
        </div>
      ) : (
        <></>
      )}
      {!isLoading && details ? (
        <main>
          <section className="container mx-auto mb-4">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="">
                <MediaCover path={details.poster_path} />
                {/* <WatchTrailerButton /> */}
              </div>
              <div className="col-span-2">
                <h1 className="text-2xl font-black mt-4">
                  {details.title ? details.title : details.name} (
                  {new Date(
                    details.release_date
                      ? details.release_date
                      : details.first_air_date
                  ).getFullYear()}
                  )
                </h1>
                <div className="">
                  <h2 className="text-xl font-bold mt-6 mb-3">Overview</h2>
                  <p>{details.overview}</p>
                  {m === "movie" ? (
                    <p className="mt-4 text-gray-500 text-sm">
                      Length &bull;{" "}
                      {details.runtime > 59
                        ? Math.round(details.runtime / 60)
                        : details.runtime}
                      h
                    </p>
                  ) : (
                    <p className="mt-4 text-gray-500 text-sm">
                      Episodes &bull; {details.number_of_episodes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <></>
      )}
    </div>
  );
}

const MediaCover = (props: { path: string }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${props.path}`}
        alt=""
        className="w-full rounded-2xl"
      />
    </div>
  );
};
