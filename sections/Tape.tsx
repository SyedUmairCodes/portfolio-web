import StarIcon from "@/public/assets/icons/star.svg";
const words = [
  "Responsive",
  "Accessible",
  "Secure",
  "Search optimized",
  "Speedy",
  "User friendly",
  "Reliable",
  "Maintainable",
  "Optimized",
  "Performant",
  "Interactive",
  "Result driven",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-stripe -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="font-sans font-bold uppercase text-sm -mx-1">
                  {word}
                </span>
                <StarIcon className="size-6 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
