import Image from "next/image";
import TW from "@/public/assets/icons/Tailwind.png";
import Node from "@/public/assets/icons/Node.png";
import ReactIcon from "@/public/assets/icons/React.png";
import NextIcon from "@/public/assets/icons/Next.png";
import Mongo from "@/public/assets/icons/MongoDB.png";
import TS from "@/public/assets/icons/TypeScript.png";
import Postgres from "@/public/assets/icons/PostgresSQL.png";
import GCP from "@/public/assets/icons/GCP.png";
import Book from "@/public/assets/icons/book.jpg";
import Astro from "@/public/assets/icons/Astro.png";
export const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase font-semibold tracking-widest text-neutral-300 text-center">
          Glipmse into my world
        </p>
        <h2 className="font-sans font-semibold text-3xl md:text-5xl mt-6 text-center">
          About Me
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white mt-4 max-w-md mx-auto">
          Learn about my day to day adventures
        </p>

        <div className="grid gap-8 mb-12 mt-6">
          <div className="p-6 bg-neutral-800 rounded-3xl border-secondary border-4">
            <h3 className="text-xl uppercase font-semibold mb-4 text-center">
              My tech stack
            </h3>
            <div className="flex space-evenly mx-auto">
              <Image src={TW} alt="" className="size-[100px] mx-auto" />
              <Image src={ReactIcon} alt="" className="size-[100px] mx-auto" />
              <Image src={Mongo} alt="" className="size-[100px] mx-auto" />
              <Image src={TS} alt="" className="size-[100px] mx-auto" />
              <Image src={NextIcon} alt="" className="size-[100px] mx-auto" />
              <Image src={Node} alt="" className="size-[100px] mx-auto" />
              <Image src={Postgres} alt="" className="size-[100px] mx-auto" />
              <Image src={GCP} alt="" className="size-[100px] mx-auto" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-neutral-800 rounded-3xl border-secondary border-4">
            <h3 className="text-xl uppercase text-center font-semibold mb-4">
              Read my blog
            </h3>
            <div className="flex mx-auto space-evenly">
              <Image src={Astro} alt="" className="mx-auto" />
            </div>
          </div>
          <div className="p-6 bg-neutral-800 rounded-3xl border-secondary border-4 ">
            <h3 className="text-xl uppercase text-center font-semibold mb-4">
              Current Reads
            </h3>
            <Image src={Book} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
