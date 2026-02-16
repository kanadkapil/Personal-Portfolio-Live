import React from "react";
import portfolioData from "../assets/portfolioData.json";
import {
  ExternalLink,
  Code2,
  Microscope,
  Binary,
  StickyNote,
  UserCircle,
  Layers,
  BarChart3,
  Brain,
} from "lucide-react";

const iconMap = {
  Microscope,
  Binary,
  StickyNote,
  UserCircle,
  Layers,
  BarChart3,
  Brain,
  Code2,
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="bg-white py-16 md:py-24 border-t-6 border-black relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <h2 className="mb-12 text-4xl font-black italic underline decoration-black decoration-4 md:text-6xl">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const ProjectIcon = iconMap[project.icon] || Code2;
            const bgColors = [
              "bg-primary",
              "bg-secondary",
              "bg-accent",
              "bg-yellow-400",
              "bg-cyan-400",
              "bg-pink-400",
            ];
            const bgColor = bgColors[index % bgColors.length];

            return (
              <div
                key={index}
                className="brutal-card flex flex-col group h-full hover-brutal transition-all shadow-brutal-lg bg-white"
              >
                {/* Visual Section: Icon-based for Neo-Brutalist flair */}
                <div
                  className={`relative aspect-video flex items-center justify-center border-b-3 border-black ${bgColor} overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#000 2px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                  <ProjectIcon
                    size={80}
                    className="relative z-10 transition-transform group-hover:scale-120 group-hover:rotate-12 duration-500"
                    strokeWidth={2.5}
                  />

                  <div className="absolute top-4 right-4 bg-white border-3 border-black px-2 py-0.5 font-black text-xs uppercase shadow-brutal">
                    {project.tags[0]}
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 flex-grow ">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="font-bold text-black/70 leading-relaxed text-sm">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white px-2 py-0.5 text-[10px] font-black uppercase border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-yellow-400 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t-3 border-black p-4 flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="brutal-btn py-1 text-xs flex items-center gap-2 w-full justify-center bg-black text-white hover:bg-primary hover:text-black"
                  >
                    LIVE DEMO <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href={portfolioData.fullWorksLink}
            target="_blank"
            className="inline-block text-2xl font-black uppercase italic underline decoration-black decoration-4 hover:text-primary transition-colors"
          >
            SEE ALL WORKS +
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
