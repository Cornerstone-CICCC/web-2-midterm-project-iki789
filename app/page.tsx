import Card from "./components/Card";
import { FaStar } from "react-icons/fa";
import GenreList from "./components/GenreList";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 gap-16 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="container mx-auto mb-4">
          <h2 className="font-bold text-2xl mb-4"></h2>
          <Slide title="puss"></Slide>
        </section>

        {/* <section className="container mx-auto my-2">
          <GenreList />
        </section> */}

        <section className="container mx-auto">
          <h2 className="font-bold text-2xl mb-4">Top Rated Animation</h2>
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
