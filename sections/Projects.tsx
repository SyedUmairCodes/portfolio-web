import darkSaasLandingPage from "@/public/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/public/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/public/assets/icons/check-circle.svg";
import ArrowUp from "@/public/assets/icons/arrow-up-right.svg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Code Hive",
    year: "2024",
    title: "Online Forum Platform for Developers",
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
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
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
    <section className="pb-14">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest text-neutral-300 text-center">
            Recent Works
          </p>
        </div>
        <h1 className="font-serif text-3xl font-semibold mt-6 text-center">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4">
          The awesome projects I&apos;ve made.
        </p>
        <div className="flex flex-col mt-10 gap-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-neutral-950 rounded-3xl border-neutral-400 border-4 relative px-8 pt-8"
            >
              <div className=" text-neutral-300  font-bold uppercase gap-2 tracking-widest text-center">
                <span>{project.company}</span>
              </div>
              <h3 className="font-semibold font-serif text-2xl mt-2 text-center">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/50 mt-2" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.features.map((feature) => (
                  <li
                    className="flex gap-2 text-sm text-white"
                    key={feature.title}
                  >
                    <CheckIcon className="size-5" />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-900 h-12 w-full rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Live preview</span>
                  <ArrowUp className="size-4" />
                </button>
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
