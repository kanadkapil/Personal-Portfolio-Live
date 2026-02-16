import React from "react";
import portfolioData from "../assets/portfolioData.json";
import { Calendar, Award, GraduationCap } from "lucide-react";

const Experience = () => {
  const { education, certificates } = portfolioData;

  return (
    <section
      id="experience"
      className="bg-white py-16 md:py-24 border-t-6 border-black relative"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <h2 className="mb-12 text-4xl font-black italic underline decoration-black decoration-4 md:text-6xl text-center">
          EXPERIENCE & GROWTH
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Education Section */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-black uppercase tracking-tighter italic">
              <GraduationCap size={32} className="text-secondary" /> ACADEMIC
              JOURNEY
            </h3>
            <div className="space-y-6 border-l-6 border-black pl-8 ml-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="brutal-card relative bg-white p-6 shadow-brutal-lg hover-brutal transition-all"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 h-8 w-8 bg-primary border-4 border-black rotate-45 shadow-[4px_4px_0_0_#000]"></div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="bg-secondary px-3 py-1 text-sm font-black uppercase border-3 border-black shadow-[2px_2px_0_0_#000]">
                      {edu.year}
                    </span>
                    <span className="font-black text-xs uppercase tracking-widest bg-black text-white px-2">
                      {edu.institute}
                    </span>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="font-bold text-black/70 italic text-sm">
                    {edu.subject}
                  </p>
                  <p className="mt-4 inline-block bg-accent px-2 py-0.5 text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0_0_#000]">
                    GPA: {edu.gpa}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-black uppercase tracking-tighter italic">
              <Award size={32} className="text-primary" /> CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certificates.map((cert, index) => {
                const bgColors = ["bg-cyan-50", "bg-yellow-50", "bg-pink-50"];
                const bgColor = bgColors[index % bgColors.length];
                return (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    className={`brutal-card flex flex-col justify-between ${bgColor} p-4 transition-all hover-brutal shadow-brutal group border-primary`}
                  >
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight leading-snug group-hover:underline decoration-black decoration-2">
                        {cert.title}
                      </h4>
                      <p className="mt-1 text-[11px] font-bold text-black/60 uppercase">
                        {cert.platform}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase bg-black text-white px-1">
                        {cert.duration}
                      </span>
                      <Calendar
                        size={14}
                        className="group-hover:rotate-12 transition-transform"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
