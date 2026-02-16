import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-6 border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary border-3 border-black p-1 shadow-brutal">
            <span className="text-xl font-black uppercase italic">KK</span>
          </div>
          <span className="hidden text-2xl font-black uppercase tracking-tighter sm:block">
            Kanad Kapil
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-black uppercase tracking-tight transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/KanadKapil_CV_31Jan2026B.pdf"
            target="_blank"
            className="brutal-btn py-1 text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="brutal-card p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t-6 border-black bg-white p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/assets/KanadKapil_CV_31Jan2026B.pdf"
              target="_blank"
              className="brutal-btn text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
