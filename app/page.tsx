import Card from "./components/Card";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <div className="min-h-screen mb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="container mx-auto mb-4">
          <h2 className="font-bold text-2xl mb-4"></h2>
          <Slide title="puss"></Slide>
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
