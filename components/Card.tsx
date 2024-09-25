import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-main rounded-3xl border-secondary border-4 relative px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
