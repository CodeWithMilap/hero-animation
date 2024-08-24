// components/Card.tsx
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  topicsCount: number;
}

const Card: FC<CardProps> = ({ imgSrc, title, topicsCount }) => {
  return (
    <div className="relative group overflow-hidden">
      {/* Card container */}
      <div className="block relative h-20 hover:h-60 lg:hover:h-full lg:h-full lg:w-28 overflow-hidden lg:rounded-2xl rounded-3xl cursor-pointer transition-all duration-500 ease-in-out lg:hover:w-[400px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/65"></div>
        <Image
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={title}
          height={330}
          width={420}
        />
      </div>

      {/* Text container */}
      <div className="absolute lg:w-[400px] lg:bottom-8 bottom-1 left-0 right-0 px-4 grid grid-cols-2 items-center group-hover:translate-x-0 group-hover:rotate-0 justify-center transition-all transform group-hover:translate-y-0 translate-y-full lg:translate-x-[-46%] lg:translate-y-[-120%] lg:rotate-[-90deg] origin-top">
        <h3 className="lg:text-4xl text-base text-white">{title}</h3>
        <div className="text-white ml-auto text-center lg:opacity-0 lg:group-hover:opacity-100 group-hover:duration-700">
          <h3 className="lg:text-5xl text-sm">{topicsCount}</h3>
          <div className="text-xs">TOPICS</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
