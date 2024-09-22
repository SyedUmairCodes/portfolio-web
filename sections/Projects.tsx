import darkSaasLandingPage from "@/public/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/public/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/public/assets/icons/check-circle.svg";
import ArrowUp from "@/public/assets/icons/arrow-up-right.svg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Code Hive",
    title: "Online Forum Platform",
    features: [
      { title: "Responsive and Great looking UI" },
      { title: "AI assistant for quick answers" },
      { title: "Beginner friendly community" },
    ],
    link: "",
    image: darkSaasLandingPage,
  },
  {
    company: "Cognito Inc.",
    year: "2024",
    title: "Online Collaboration SaaS Platform",
    features: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Block Forge",
    year: "2023",
    title: "Blockchain Startup",
    features: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container -mt-15">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest text-neutral-300 text-center">
            Recent Works
          </p>
        </div>
        <h2 className="font-sans font-semibold text-3xl md:text-5xl mt-6 text-center">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white mt-4 max-w-md mx-auto">
          I transform concepts into engaging real-world digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-neutral-800 rounded-3xl border-secondary border-4 relative px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  <div className=" text-neutral-300  font-bold uppercase gap-2 tracking-widest text-center">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-semibold font-sans text-2xl md:text-3xl mt-2 md:mt-5 text-center">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/30 mt-2 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.features.map((feature) => (
                      <li
                        className="flex gap-2 text-sm text-white md:text-base"
                        key={feature.title}
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Live preview</span>
                      <ArrowUp className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
