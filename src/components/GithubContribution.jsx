import React, { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import portfolioData from "../assets/portfolioData.json";
import { Github, Search, RefreshCw, Sparkles } from "lucide-react";

const GithubContribution = () => {
  const defaultUsername = portfolioData.profile.socials.github.split("/").pop() || "kanadkapil";
  const [username, setUsername] = useState(defaultUsername);
  const [selectedYear, setSelectedYear] = useState("last");
  const [searchInput, setSearchInput] = useState("");
  const [key, setKey] = useState(0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setUsername(searchInput.trim());
      setSelectedYear("last"); // Reset year when searching for a new user
    }
  };

  const handleReset = () => {
    setUsername(defaultUsername);
    setSelectedYear("last");
    setSearchInput("");
    setKey((prev) => prev + 1);
  };

  // Dynamically generate the last 5 years
  const currentYear = new Date().getFullYear();
  const yearsList = ["last", ...Array.from({ length: 5 }, (_, i) => currentYear - i)];

  // Custom Neo-Brutalist green activity scale
  const calendarTheme = {
    light: ["#e5e7eb", "#86efac", "#4ade80", "#22c55e", "#15803d"],
    dark: ["#27272a", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="brutal-card bg-white p-6 md:p-8 shadow-brutal-lg hover-brutal transition-all relative overflow-hidden mb-10">
      {/* Background Dot Grid Effect */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 2px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-4">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 border-3 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              <Github size={24} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tighter">
                Github Contributions
              </h4>
              <p className="text-sm font-bold text-black/60">
                Activity heatmap for{" "}
                <span className="underline decoration-primary decoration-3 font-black">
                  @{username}
                </span>
              </p>
            </div>
          </div>

          {/* Dynamic Search/Filter Input */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Check another user..."
                className="brutal-input py-1.5 text-xs pr-8 w-48 shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-brutal transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 text-black hover:text-primary transition-colors"
                aria-label="Search User"
              >
                <Search size={14} />
              </button>
            </div>
            {(username !== defaultUsername || selectedYear !== "last") && (
              <button
                type="button"
                onClick={handleReset}
                className="border-3 border-black bg-accent p-1.5 shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none"
                title="Reset to default user & current year"
              >
                <RefreshCw size={14} className="font-black text-black" />
              </button>
            )}
          </form>
        </div>

        {/* Year Navigation Buttons */}
        <div className="flex flex-wrap gap-2 items-center border-b-2 border-black pb-4 border-dashed">
          <span className="text-xs font-black uppercase text-black/60 mr-2">Select Year:</span>
          <div className="flex flex-wrap gap-2">
            {yearsList.map((year) => {
              const isSelected = selectedYear === year;
              const displayText = year === "last" ? "Last 12 Months" : year;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  className={`border-2 border-black px-3 py-1 text-xs font-black uppercase transition-all ${
                    isSelected
                      ? "bg-primary text-black translate-y-[2px] translate-x-[2px] shadow-none"
                      : "bg-white text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  }`}
                >
                  {displayText}
                </button>
              );
            })}
          </div>
        </div>

        {/* Calendar Wrapper (Dark Theme for High Contrast Visibility) */}
        <div className="overflow-x-auto py-4 flex justify-center bg-neutral-900 border-3 border-black p-4 md:p-6 shadow-brutal">
          <div className="min-w-[700px] flex justify-center items-center">
            <GitHubCalendar
              key={`${username}-${selectedYear}-${key}`}
              username={username}
              year={selectedYear === "last" ? "last" : parseInt(selectedYear)}
              blockSize={12}
              blockMargin={4}
              blockRadius={0} // Sharp borders matching Brutalist themes
              fontSize={11}
              theme={calendarTheme}
              colorScheme="dark"
              throwOnError
              errorMessage={`Could not load contributions for @${username}`}
            />
          </div>
        </div>

        {/* Custom Legend / Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-black/70">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-black border-2 border-black px-2 py-0.5 shadow-[1px_1px_0_0_rgba(0,0,0,1)] text-[10px] font-black uppercase flex items-center gap-1">
              <Sparkles size={10} /> PRO TIP
            </span>
            <span>Hover over the blocks to view contribution counts and dates.</span>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 uppercase tracking-wider text-black hover:text-primary font-black underline decoration-2 hover:translate-x-1 transition-transform"
          >
            View GitHub Profile &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubContribution;
