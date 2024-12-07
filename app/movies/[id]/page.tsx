import Button from "@/app/components/Button";
import WatchTrailerButton from "@/app/components/WatchTrailerButton";
import { FaCirclePlay } from "react-icons/fa6";

export default async function Movies({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });

  return (
    <div className="min-h-[74vh] text-black dark:text-white mb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="container mx-auto mb-4">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div className="">
              <MediaCover />
              <WatchTrailerButton />
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-black mt-4">
                Puss in Boots: The Last Wish (2022)
              </h1>
              <div className="">
                <h2 className="text-xl font-bold mt-6 mb-3">Overview</h2>
                <p>
                  Puss in Boots discovers that his passion for adventure has
                  taken its toll: He has burned through eight of his nine lives,
                  leaving him with only one life left. Puss sets out on an epic
                  journey to find the mythical Last Wish and restore his nine
                  lives.
                </p>
                <p className="mt-4 text-gray-500 text-sm">Length &bull; 1.2h</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const MediaCover = () => {
  return (
    <div>
      <img
        src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
        alt=""
        className="w-full rounded-2xl"
      />
    </div>
  );
};
