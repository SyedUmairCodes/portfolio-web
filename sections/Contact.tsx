import Arrow from "@/public/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="container">
        <div className="bg-secondary text-main py-8 px-10 rounded-3xl text-center">
          <h2 className="text-2xl font-semibold">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-sm mt-2">
            Are you ready to bring your next project to life? Let&apos;s connect
            and I&apos;ll help you bring your idea to reality.
          </p>
          <button className="bg-main text-white inline-flex items-center px-6 h-12 rounded-full mt-4">
            <span>Contact Me</span>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};
