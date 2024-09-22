import ArrowDown from "@/public/assets/icons/arrow-down.svg";
import HeaderImage from "@/public/assets/images/me.png";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="py-36 md:py-40 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={HeaderImage}
            className="size-[100px]"
            alt="header image"
          />
          <div className="bg-slate-800 border-neutral-400 border-2 rounded-full px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className=" text-3xl md:text-5xl text-center font-sans font-bold mt-8 tracking-wide">
            Syed Umair Ali
          </h1>
          <p className="mt-4 text-center text-white md:text-lg font-sans">
            I specialize in transforming user requirements into
            production-ready, eye-catching, and user-friendly applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border-2 border-white/15 px-6 h-12 rounded-full">
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
