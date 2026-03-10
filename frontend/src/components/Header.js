import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Studio", href: "#studio" },
  { label: "Inquire", href: "#inquiry" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(212,175,55,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="#hero"
          data-testid="logo-link"
          className="font-['Mulish'] font-extralight text-[#272b00] text-xs md:text-sm tracking-[0.3em] uppercase hover:text-[#D4AF37] transition-colors duration-500"
        >
          Bruna Sabadin
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className="font-['Mulish'] text-xs tracking-[0.2em] uppercase text-[#54582f] hover:text-[#D4AF37] transition-colors duration-500 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          <a
            href="https://www.instagram.com/sabadinnk"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-instagram-link"
            className="text-[#54582f] hover:text-[#D4AF37] transition-colors duration-500"
          >
            <Instagram size={16} />
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-[#272b00] hover:text-[#D4AF37] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            data-testid="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-['Mulish'] text-sm tracking-[0.2em] uppercase text-[#54582f] hover:text-[#D4AF37] transition-colors duration-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/sabadinnk"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-nav-instagram-link"
                className="text-[#54582f] hover:text-[#D4AF37] transition-colors duration-500"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
