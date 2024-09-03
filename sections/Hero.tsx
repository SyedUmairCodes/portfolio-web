import ArrowDown from "@/public/assets/icons/arrow-down.svg";
import HeroImage from "@/public/assets/images/memoji-computer.png";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* <Image src={HeroImage} alt="Hero image" className="size-[100px]" /> */}
          <div className="bg-gray-950 border-gray-800 rounded-full px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className=" text-3xl md:text-5xl text-center font-sans font-bold mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming user requirements into
            production-ready, eye-catching, and user-friendly applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 rounded-full px-6">
            <span>👋</span>
            <span className="font-semibold">Let&apos; s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
