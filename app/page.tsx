// pages/index.tsx
import { FC } from "react";
import Card from "../components/Card";

// Define the structure of your JSON data
interface CardData {
  id: number;
  title: string;
  topicsCount: number;
  imgSrc: string;
}

// Import the JSON data
import data from "../public/data/data.json";

// Ensure TypeScript knows the JSON data is an array of CardData
const typedData: CardData[] = data;

const Home: FC = () => {
  return (
    <main className="lg:grid flex flex-col gap-10 lg:grid-cols-12 min-h-screen lg:items-center lg:p-24 p-12 dark:bg-black">
      <div className="lg:col-span-6 lg:h-full flex flex-col lg:items-start items-center lg:justify-center gap-5 lg:gap-12">
        <h1 className="text-4xl md:text-[7vw] leading-tight font-bold">
          Hero Animation
        </h1>
        <h2 className="text-base lg:text-2xl leading-tight uppercase font-semibold">
          Interactive components
        </h2>
        <h2 className="text-base leading-tight font-semibold">
          <a
            href="https://milapdave.com/"
            target="_blank"
            className="hover:underline"
            rel="noopener noreferrer"
          >
            @milapdave
          </a>
        </h2>
      </div>
      <div className="lg:col-span-6 flex-col grow md:flex-row flex lg:justify-end gap-10 lg:h-full">
        {typedData.map((item) => (
          <Card
            key={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            topicsCount={item.topicsCount}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
