import { Card } from "@/components/Card";
import Image from "next/image";
import Book from "@/public/assets/icons/book.jpg";
import StarIcon from "@/public/assets/icons/star.svg";
import Emoji from "@/public/assets/images/Me.png";
export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-22">
      <div className="container">
        <p className="uppercase font-semibold tracking-widest text-secondary text-center">
          About Me
        </p>
        <h2 className="font-sans font-semibold text-3xl md:text-5xl mt-6 text-center">
          A look behind the scenes
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white mt-4 max-w-md mx-auto">
          See my day-to-day life, my hobbies, and what I do when I&apos;m not
          working.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-secondary" />
                  <h3 className="text-3xl">Books</h3>
                </div>
                <p className=" text-sm mt-2 text-center">
                  The books I&apos;m currently reading.
                </p>
              </div>
              <div className="w-40 mx-auto mt-6">
                <Image src={Book} alt="Cover of book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-secondary" />
                  <h3 className="text-3xl sm:text-2xl">Current Projects</h3>
                </div>
                <p className=" text-sm mt-2">
                  Currently pursuing my bachelor&apos;s degree in Computer
                  Science and working on my final year project.
                </p>
              </div>
              <div className="w-40 mx-auto mt-6">
                <Image src={Emoji} alt="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
