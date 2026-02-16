import React from "react";
import portfolioData from "../assets/portfolioData.json";
import { Microscope, GraduationCap, BrainCircuit, Quote } from "lucide-react";

const iconMap = {
  Microscope: Microscope,
  GraduationCap: GraduationCap,
  BrainCircuit: BrainCircuit,
};

const Vision = () => {
  const { vision } = portfolioData;

  return (
    <section
      id="vision"
      className="bg-white py-16 md:py-24 border-t-6 border-black overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Manifesto */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-black italic underline decoration-black decoration-4 md:text-6xl">
              MY VISION
            </h2>

            <div className="brutal-card bg-yellow-400 p-8 relative shadow-brutal-lg hover-brutal transition-all cursor-default">
              <Quote className="absolute -top-6 -left-6 h-12 w-12 text-black fill-black" />
              <p className="text-2xl font-black leading-tight tracking-tighter uppercase italic md:text-3xl">
                {vision.manifesto}
              </p>
            </div>

            <div className="brutal-card bg-white p-6 border-dashed shadow-brutal hover:bg-primary transition-colors">
              <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-primary">
                Deep Diving Into:
              </h3>
              <p className="font-bold text-xl leading-relaxed">
                {vision.currentDiving}
              </p>
            </div>
          </div>

          {/* Right: Core Pillars */}
          <div className="space-y-6">
            {vision.points.map((point, index) => {
              const Icon = iconMap[point.icon] || Microscope;
              const borderColors = [
                "border-primary",
                "border-secondary",
                "border-accent",
              ];
              const borderColor = borderColors[index % borderColors.length];

              return (
                <div
                  key={index}
                  className={`brutal-card p-6 flex gap-6 bg-white hover-brutal transition-all shadow-brutal ${borderColor}`}
                >
                  <div className="bg-black border-3 border-black p-3 h-fit shadow-[4px_4px_0_0_#fff]">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-black">
                      {point.title}
                    </h4>
                    <p className="font-bold text-black/70 leading-relaxed italic">
                      {point.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {point.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-black text-white px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#34eaff]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
