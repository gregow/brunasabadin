import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer data-testid="footer" className="relative py-20 md:py-28 bg-[#272b00] text-[#FAF9F6] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#7A6C3E]/40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="font-['NewYork'] font-normal text-3xl md:text-4xl lg:text-5xl mb-6 text-[#FAF9F6] tracking-[0.15em]"
        >
          {t("hero_name")}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Mulish'] font-light text-[#FAF9F6]/60 text-sm tracking-wider mb-10"
        >
          {t("footer_at")}{" "}
          <a href="https://www.thegoldenpanther.pt/" target="_blank" rel="noopener noreferrer" data-testid="footer-golden-panther-link"
            className="text-[#7A6C3E] hover:underline underline-offset-4">
            {t("footer_studio_name")}
          </a>
          {" "}&middot; Porto
        </motion.p>

        <motion.a
          href="https://www.instagram.com/sabadinnk" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-link"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-3 border border-[#7A6C3E]/40 px-8 py-4 hover:border-[#7A6C3E] hover:bg-[#7A6C3E]/10 transition-all duration-500 group"
        >
          <Instagram size={16} className="text-[#7A6C3E]" />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-[#FAF9F6]/80 group-hover:text-[#FAF9F6]">@sabadinnk</span>
        </motion.a>

        <div className="w-12 h-px bg-[#7A6C3E]/30 mx-auto my-12" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="space-y-3">
          <p className="font-body text-[#FAF9F6]/40 text-xs tracking-wider uppercase">
            <a href="https://www.thegoldenpanther.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A6C3E] transition-colors duration-500">
              {t("footer_studio_name")}
            </a>{" "}{t("footer_studio_suffix")}
          </p>
          <p className="font-body text-[#FAF9F6]/30 text-xs">
            Rua da Firmeza, 457, 2&ordm; andar &middot; Porto, Portugal
          </p>
          <p className="font-body text-[#FAF9F6]/20 text-xs mt-6">
            &copy; {new Date().getFullYear()} Bruna Sabadin &mdash;{" "}
            <a href="https://www.thegoldenpanther.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A6C3E] transition-colors duration-500">
              {t("footer_studio_name")}
            </a>. {t("footer_rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
