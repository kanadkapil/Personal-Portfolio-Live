import React from "react";
import portfolioData from "../assets/portfolioData.json";
import {
  Languages,
  Database,
  Layout,
  BarChart3,
  Wrench,
  Code2,
} from "lucide-react";
import GithubContribution from "./GithubContribution";

const iconMap = {
  Language: Languages,
  Database: Database,
  Layout: Layout,
  BarChart3: BarChart3,
  Wrench: Wrench,
  Code2: Code2,
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="bg-white py-16 md:py-24 border-t-6 border-black relative"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <h2 className="mb-12 text-4xl font-black italic underline decoration-black decoration-4 md:text-6xl text-right">
          SKILLS & STACK
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            const cardColors = ["bg-white", "bg-cyan-50", "bg-yellow-50"];
            const cardColor = cardColors[index % cardColors.length];

            return (
              <div
                key={index}
                className={`brutal-card flex flex-col ${cardColor} overflow-hidden hover-brutal transition-all shadow-brutal-lg`}
              >
                <div className="border-b-3 border-black bg-primary p-4 flex items-center gap-3">
                  <Icon size={24} className="font-black" />
                  <h3 className="text-xl font-black uppercase tracking-tighter">
                    {category.name}
                  </h3>
                </div>
                <div className="p-6 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="border-3 border-black bg-white px-3 py-1 text-sm font-black uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-secondary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Stats Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-3xl font-black uppercase tracking-tighter italic underline decoration-black decoration-4">
            GITHUB IN NUMBERS
          </h3>

          {/* GitHub Contribution Heat Map */}
          <GithubContribution />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="brutal-card bg-yellow-400 p-4 flex items-center justify-center shadow-brutal-lg hover-brutal transition-all">
              <img
                src={portfolioData.profile.githubStats.main}
                alt="GitHub Stats"
                className="w-full h-auto border-3 border-black bg-white"
              />
            </div>
            <div className="brutal-card bg-cyan-400 p-4 flex items-center justify-center shadow-brutal-lg hover-brutal transition-all">
              <img
                src={portfolioData.profile.githubStats.streak}
                alt="GitHub Streak"
                className="w-full h-auto border-3 border-black bg-white"
              />
            </div>
            <div className="brutal-card bg-accent p-4 flex items-center justify-center shadow-brutal-lg hover-brutal transition-all">
              <img
                src={portfolioData.profile.githubStats.topLangs}
                alt="Top Languages"
                className="w-full h-auto border-3 border-black bg-white"
              />
            </div>
            <div className="brutal-card bg-emerald-400 p-6 flex flex-col items-center justify-center shadow-brutal-lg hover-brutal transition-all text-center">
              <div className="border-3 border-black bg-white p-2 w-[300px] h-[300px] flex-shrink-0 shadow-brutal relative overflow-hidden">
                <img
                  src="/assets/KanadKapilGithubQr.png"
                  alt="GitHub QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-black flex flex-col items-center">
                <span className="inline-block bg-white text-black font-black uppercase text-xs px-2 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000] mb-2 -rotate-1">
                  @kanadkapil
                </span>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">
                  SCAN OR CLICK
                </h4>
                <p className="text-sm font-bold text-black/85 mt-1 max-w-[280px]">
                  Scan the QR code or click the button below to visit my full GitHub profile and explore my projects!
                </p>
                <a
                  href={portfolioData.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-black text-white hover:bg-white hover:text-black font-black uppercase text-xs tracking-wider px-6 py-2.5 border-3 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                >
                  GO TO GITHUB &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
