import React from "react";
import portfolioData from "../assets/portfolioData.json";
import { Target, Sparkles, GraduationCap, Microscope } from "lucide-react";

const iconMap = {
  Target: Target,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Microscope: Microscope,
};

const About = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="bg-white py-16 md:py-24 border-t-6 border-black relative"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-4xl font-black italic underline decoration-black decoration-4 md:text-6xl">
              ABOUT ME
            </h2>
            <p className="text-xl font-bold leading-relaxed md:text-2xl bg-white/40 p-6 border-l-6 border-black shadow-brutal">
              {about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.sections.map((section, index) => {
              const Icon = iconMap[section.icon] || Target;
              const bgColors = [
                "bg-primary",
                "bg-secondary",
                "bg-accent",
                "bg-yellow-400",
              ];
              const bgColor = bgColors[index % bgColors.length];

              return (
                <div
                  key={index}
                  className="brutal-card p-6 flex flex-col gap-4 group bg-white hover-brutal transition-all shadow-brutal-lg"
                >
                  <div
                    className={`${bgColor} inline-block w-fit border-3 border-black p-3 shadow-brutal transition-transform group-hover:scale-110`}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter">
                    {section.title}
                  </h3>
                  <p className="font-bold text-black/70">{section.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
