import darkSaasLandingPage from "@/public/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/public/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "CodeHive",
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
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r  from-gray-100 to-stone-300 text-transparent bg-clip-text text-center">
            Recent Works
          </p>
        </div>
        <h1 className="font-serif text-3xl mt-6 text-center">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4">
          Some of the awesome projects I&apos;ve worked on recently
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-neutral-950 rounded-3xl border-neutral-400 border-4 relative"
            >
              <div className="flex">
                <div className="bg-gradient-to-r from-gray-100 to-stone-300 inline-flex bg-clip-text text-transparent font-bold uppercase gap-2 tracking-widest text-sm">
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3>{project.title}</h3>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature.title}>{feature.title}</li>
                ))}
              </ul>
              <a href={project.link}>
                <button>Live preview</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
