import React from "react";
import portfolioData from "./assets/portfolioData.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="min-h-screen border-x-6 border-black mx-auto max-w-[1920px] bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t-6 border-black bg-black pt-16 pb-8 text-white relative overflow-hidden">
        {/* Footer Marquee */}
        <div className="absolute top-0 w-full bg-primary py-2 overflow-hidden border-b-3 border-black whitespace-nowrap z-20">
          <div className="flex animate-marquee gap-8 items-center">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-black font-black uppercase text-sm tracking-[0.2em] flex gap-8 items-center"
              >
                BUILDING THE FUTURE <span className="text-white">✦</span>
                DESIGNING THE BOLD <span className="text-white">✦</span>
                CODING THE VISION <span className="text-white">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <div className="bg-white border-3 border-black p-2 shadow-brutal w-fit">
                <span className="text-2xl font-black uppercase italic text-black">
                  KK
                </span>
              </div>
              <p className="font-bold text-gray-400 max-w-xs text-center md:text-left">
                A Neo-Brutalist portfolio built with React & Speed.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 md:items-end">
              <div className="flex gap-4">
                <a
                  href={portfolioData.profile.socials.github}
                  className="hover:text-primary transition-colors font-black uppercase tracking-widest text-sm"
                >
                  GitHub
                </a>
                <a
                  href={portfolioData.profile.socials.linkedin}
                  className="hover:text-secondary transition-colors font-black uppercase tracking-widest text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolioData.profile.socials.gmail}
                  className="hover:text-accent transition-colors font-black uppercase tracking-widest text-sm"
                >
                  Contact
                </a>
              </div>
              <p className="text-sm font-black uppercase tracking-tighter text-white">
                © {new Date().getFullYear()} — KANAD KAPIL. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
