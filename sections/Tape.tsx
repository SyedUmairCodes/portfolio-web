import StarIcon from "@/public/assets/icons/star.svg"
const words = [
  "Responsive",
  "Accessible",
  "Secure",
  "Search optimized",
  "User friendly",
  "Reliable",
  "Maintainable"
]

export const TapeSection = () => {
  return <div>
    <div className="flex gap-4">
    {words.map(word => (
      <div key={word}>
        <span>{word}</span>
        <StarIcon/>
      </div>
    ))}
    </div>
  </div>;
};
