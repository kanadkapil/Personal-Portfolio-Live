import React from "react";
import portfolioData from "../assets/portfolioData.json";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const GoogleDrive = ({ size = 28 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Google Drive</title>
    <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
  </svg>
);

const Hero = () => {
  const { profile } = portfolioData;
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-16 border-b-6 border-black">
      {/* Marquee Ticker */}
      <div className="absolute top-0 w-full bg-black py-2 overflow-hidden border-b-3 border-black whitespace-nowrap z-20">
        <div className="flex animate-marquee gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-white font-black uppercase text-sm tracking-[0.2em] flex gap-8 items-center"
            >
              FULL-STACK ENGINEERING <span className="text-primary">✦</span>
              PROMPT ENGINEERING <span className="text-secondary">✦</span>
              {/* BIOINFORMATICS <span className="text-accent">✦</span> */}
              DATA ANALYTICS <span className="text-yellow-400">✦</span>
              DATA VISUALIZATION <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10 pt-12 mt-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <div className="bg-yellow-400 inline-block border-3 border-black px-4 py-1 font-black uppercase shadow-brutal hover-brutal transition-all">
              {profile.designation}
            </div>

            <h1 className="text-5xl font-black leading-none tracking-tighter md:text-8xl flex flex-col">
              <span className="text-black">HI, I'M</span>
              <span className="text-primary italic underline decoration-black decoration-6 hover:text-cyan-400 hover:animate-shake transition-colors cursor-default">
                {profile.name.split(" ")[0]}
              </span>
            </h1>

            <p className="text-xl font-bold leading-relaxed text-black/90 md:text-2xl max-w-xl bg-white/50 p-4 border-l-6 border-black">
              {profile.work}. <br></br> Specialized in
              <span className="bg-accent px-2 mx-1 border-2 border-black rotate-1 inline-block shadow-[2px_2px_0_0_#000]">
                React
              </span>
              ,
              <span className="bg-primary px-2 mx-1 border-2 border-black -rotate-1 inline-block shadow-[2px_2px_0_0_#000]">
                Prompt Engineering
              </span>
              , and
              <span className="bg-secondary px-2 mx-1 border-2 border-black rotate-1 inline-block shadow-[2px_2px_0_0_#000]">
                Data Analytics
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#projects"
                className="brutal-btn flex items-center gap-2 bg-black text-white hover:bg-primary hover:text-black text-xl py-4 px-8"
              >
                EXPLORE WORKS <ArrowRight size={24} />
              </a>

              <div className="flex items-center gap-3 px-2">
                {[
                  {
                    icon: Github,
                    href: profile.socials.github,
                    color: "hover:bg-primary",
                  },
                  {
                    icon: GoogleDrive,
                    href: profile.socials.googledrive,
                    color: "hover:bg-success",
                  },
                  {
                    icon: Linkedin,
                    href: profile.socials.linkedin,
                    color: "hover:bg-secondary",
                  },
                  {
                    icon: Mail,
                    href: profile.socials.gmail,
                    color: "hover:bg-accent",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className={`brutal-card p-4 bg-white ${social.color} hover-brutal transition-all shadow-brutal`}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto w-full max-w-md perspective-1000">
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full border-6 border-black bg-primary translate-x-4 translate-y-4"></div>

            <div
              className={`relative brutal-card w-full aspect-square transition-transform duration-700 preserve-3d cursor-pointer ${isFlipped ? "rotate-y-180" : ""}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front side */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src="/assets/PicA.png"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Back side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <img
                  src="/assets/PicB.jpg"
                  alt={`${profile.name} alternate`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Hard Shadow Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-accent border-3 border-black -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
