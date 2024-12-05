import Card from "./components/Card";
import { FaStar } from "react-icons/fa";
import GenreList from "./components/GenreList";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 gap-16 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="container mx-auto my-4">
          <h2 className="font-bold text-2xl mb-4">Trending in Animation</h2>

          <Slide title="puss"></Slide>
          {/* <div className="flex flex-wrap">
            <Slide title="puss"></Slide>
            <Card title="puss"></Card>
          </div> */}
        </section>

        <section className="container mx-auto my-4">
          <GenreList />
        </section>

        <section className="container mx-auto">
          <h2 className="font-bold text-2xl mb-4">Trending in Animation</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="rounded-2xl">
                <img
                  className="rounded-2xl"
                  src="https://media.themoviedb.org/t/p/w440_and_h660_face/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
                  alt=""
                />
              </div>
              <div className="font-semibold">The Wild Robot</div>
              <div className="flex text-sm divide-solid divide-x-2">
                <div className="flex items-center pr-3">
                  <FaStar className="text-yellow-500 mr-1" />
                  7.9
                </div>
                <div className="pl-3">2014</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
