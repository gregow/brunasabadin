import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "fr", label: "FR" },
];

export const Header = () => {
  const { t, lang, switchLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const NAV_LINKS = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_portfolio"), href: "#portfolio" },
    { label: t("nav_studio"), href: "#studio" },
    { label: t("nav_inquire"), href: "#inquiry" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClick = () => setLangOpen(false);
    if (langOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [langOpen]);

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(122,108,62,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="#hero"
          data-testid="logo-link"
          className="font-['Mulish'] font-extralight text-[#272b00] text-xs md:text-sm tracking-[0.3em] uppercase hover:text-[#7A6C3E] transition-colors duration-500"
        >
          Bruna Sabadin
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.href.slice(1)}`}
              className="font-['Mulish'] text-xs tracking-[0.2em] uppercase text-[#54582f] hover:text-[#7A6C3E] transition-colors duration-500 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7A6C3E] group-hover:w-full transition-all duration-500" />
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              data-testid="lang-switcher"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[#54582f] hover:text-[#7A6C3E] transition-colors duration-500"
            >
              <Globe size={14} />
              <span className="font-['Mulish'] text-xs tracking-[0.15em] uppercase">
                {lang.toUpperCase()}
              </span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 bg-white border border-[#7A6C3E]/20 shadow-sm py-1 min-w-[48px]"
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      data-testid={`lang-${l.code}`}
                      onClick={() => {
                        switchLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left font-['Mulish'] text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                        lang === l.code
                          ? "text-[#7A6C3E]"
                          : "text-[#54582f] hover:text-[#7A6C3E]"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://www.instagram.com/sabadinnk"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-instagram-link"
            className="text-[#54582f] hover:text-[#7A6C3E] transition-colors duration-500"
          >
            <Instagram size={16} />
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-[#272b00] hover:text-[#7A6C3E] transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#7A6C3E]/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`mobile-nav-${link.href.slice(1)}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-['Mulish'] text-sm tracking-[0.2em] uppercase text-[#54582f] hover:text-[#7A6C3E] transition-colors duration-500"
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile lang switcher */}
              <div className="flex items-center gap-4" data-testid="mobile-lang-switcher">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    data-testid={`mobile-lang-${l.code}`}
                    onClick={() => switchLang(l.code)}
                    className={`font-['Mulish'] text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                      lang === l.code
                        ? "text-[#7A6C3E] border-b border-[#7A6C3E]"
                        : "text-[#54582f] hover:text-[#7A6C3E]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a
                href="https://www.instagram.com/sabadinnk"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-nav-instagram-link"
                className="text-[#54582f] hover:text-[#7A6C3E] transition-colors duration-500"
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
