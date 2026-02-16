import React from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  Instagram,
  MapPin,
  Music,
} from "lucide-react";
import portfolioData from "../assets/portfolioData.json";

const Contact = () => {
  const { profile } = portfolioData;
  const [status, setStatus] = React.useState("idle"); // idle, sending, success
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-24 border-t-6 border-black overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-black italic underline decoration-black decoration-4 md:text-6xl">
              GET IN TOUCH
            </h2>
            <p className="text-xl font-bold leading-relaxed md:text-2xl bg-white/40 p-6 border-l-6 border-black shadow-brutal">
              {profile.work} <br />
              Let's build something bold together.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: profile.socials.github,
                  color: "bg-primary",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: profile.socials.linkedin,
                  color: "bg-secondary",
                },
                {
                  icon: Mail,
                  label: "Email",
                  href: profile.socials.gmail,
                  color: "bg-accent",
                },
                {
                  icon: Instagram,
                  label: "Insta",
                  href: profile.socials.instagram,
                  color: "bg-yellow-400",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className={`brutal-card flex items-center gap-3 bg-white p-4 transition-all hover-brutal shadow-brutal border-2 border-black font-black uppercase text-sm ${social.color.replace("bg-", "hover:bg-")}`}
                >
                  <social.icon size={20} /> {social.label}
                </a>
              ))}
            </div>

            <div className="mt-4 border-6 border-black bg-yellow-400 p-6 shadow-brutal-lg hover-brutal transition-all w-fit">
              <h3 className="text-2xl font-black uppercase mb-2">
                Current Location
              </h3>
              <p className="font-bold text-xl flex items-center gap-2">
                <MapPin size={24} /> {profile.location}
              </p>
            </div>

            {/* Spotify Integration */}
            <div className="mt-8 brutal-card overflow-hidden bg-black p-2 max-w-md shadow-brutal-lg hover-brutal transition-all">
              <div className="bg-primary px-3 py-1 font-black text-xs uppercase mb-1 border-b-2 border-black flex items-center gap-2">
                <Music size={14} /> NOW PLAYING / FEATURED
              </div>
              <iframe
                src={profile.socials.spotify}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Featured Track"
                className="border-3 border-black"
              ></iframe>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="brutal-card bg-white p-8 flex flex-col gap-6 shadow-brutal-lg border-primary border-4 hover:border-black transition-colors"
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-black uppercase italic">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  placeholder="YOUR NAME"
                  className="brutal-card border-3 border-black p-4 font-bold focus:bg-primary/10 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-black uppercase italic">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  placeholder="YOUR@EMAIL.COM"
                  className="brutal-card border-3 border-black p-4 font-bold focus:bg-secondary/10 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-black uppercase italic">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  rows="4"
                  placeholder="WHAT'S ON YOUR MIND?"
                  className="brutal-card border-3 border-black p-4 font-bold focus:bg-accent/10 outline-none resize-none"
                ></textarea>
              </div>
            </div>

            {status === "success" ? (
              <div className="bg-green-400 border-4 border-black p-6 text-center font-black uppercase shadow-brutal animate-pulse text-xl">
                MESSAGE SENT! 🚀 <br />
                <span className="text-sm">I'll get back to you soon.</span>
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="brutal-btn w-full mt-4 flex items-center justify-center gap-3 py-6 text-2xl bg-black text-white hover:bg-primary hover:text-black shadow-brutal hover:shadow-none translate-y-0 hover:translate-y-1 transition-all"
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                <Send
                  size={32}
                  className={status === "sending" ? "animate-ping" : ""}
                />
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
