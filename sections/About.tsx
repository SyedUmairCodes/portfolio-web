import { Card } from "@/components/Card";
import Image from "next/image";
import Book from "@/public/assets/icons/book.jpg";
import ReactIcon from "@/public/assets/icons/React.png";
import Mongo from "@/public/assets/icons/MongoDB.png";
import Node from "@/public/assets/icons/Node.png";
import TypeScript from "@/public/assets/icons/TypeScript.png";
import Tailwind from "@/public/assets/icons/Tailwind.png";
import Postgres from "@/public/assets/icons/Postgres.png";
import StarIcon from "@/public/assets/icons/star.svg";
import { TechIcon } from "@/components/TechIcon";

const tools = [
  { icon: ReactIcon, title: "React" },
  { icon: Mongo, title: "MongoDB" },
  { icon: Node, title: "Node" },
  { icon: Tailwind, title: "Tailwind" },
  { icon: TypeScript, title: "TypeScript" },
  { icon: Postgres, title: "PostgresSQL" },
];

export const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <p className="uppercase font-semibold tracking-widest text-neutral-300 text-center">
          About Me
        </p>
        <h2 className="font-sans font-semibold text-3xl md:text-5xl mt-6 text-center">
          A look behind the scenes
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white mt-4 max-w-md mx-auto">
          See my day-to-day life, my hobbies, and what I do when I&apos;m not
          working.
        </p>
        <div className="mt-8 gap-8">
          <Card className="h-[320px]">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-secondary" />
                <h3 className="text-3xl">Current Reads</h3>
              </div>
              <p className=" text-sm mt-2 text-center">
                The books I&apos;m currently reading.
              </p>
            </div>
            <div className="w-40 mx-auto mt-6">
              <Image src={Book} alt="Cover of book" />
            </div>
          </Card>
          <Card className="pb-4">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-secondary" />
                <h3 className="text-3xl">My Tech Stack</h3>
              </div>
              <p className=" text-sm mt-2 text-ceter">
                The tools I use to make exceptional digital experiences
              </p>
            </div>
            <div className="flex flex-wrap mx-auto gap-4 mt-4">
              {tools.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-secondary"
                >
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3>Intrests and Hobbies</h3>
            <p>Explore what other things I&apos;m passionate about.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
