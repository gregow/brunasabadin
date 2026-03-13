import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

// Easy to swap: replace URLs with your own portfolio images
const PORTFOLIO_IMAGES = [
  { src: "/images/portfolio_1.jpg", alt: "Ornamental floral design", span: "col-span-1 row-span-2" },
  { src: "/images/portfolio_2.jpg", alt: "Art nouveau botanical pattern", span: "col-span-1 row-span-1" },
  { src: "/images/portfolio_3.jpg", alt: "Line drawing rose and hands", span: "col-span-1 row-span-1" },
  { src: "/images/portfolio_4.jpg", alt: "Botanical white rose illustration", span: "col-span-1 row-span-2" },
  { src: "/images/portfolio_5.jpg", alt: "Botanical plant illustration", span: "col-span-1 row-span-1" },
  { src: "/images/portfolio_6.jpg", alt: "Intricate venation pattern", span: "col-span-1 row-span-1" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

export const PortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-left mb-16 lg:mb-20">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="font-['Mulish'] font-light text-[#7A6C3E] text-xs tracking-[0.3em] uppercase mb-3"
          >
            {t("portfolio_label")}
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={1} variants={fadeIn}
            className="font-['Mulish'] font-extralight text-[#272b00] text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] uppercase"
          >
            {t("portfolio_title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              data-testid={`portfolio-item-${i}`}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} variants={fadeIn}
              className={`${img.span} relative overflow-hidden group cursor-pointer border border-[#7A6C3E]/10 hover:border-[#7A6C3E]/40 transition-all duration-700`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-[#272b00]/0 group-hover:bg-[#272b00]/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeIn}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/sabadinnk" target="_blank" rel="noopener noreferrer"
            data-testid="portfolio-instagram-link"
            className="inline-flex items-center gap-3 text-[#272b00] hover:text-[#7A6C3E] transition-colors duration-500 group"
          >
            <span className="font-body text-xs tracking-[0.2em] uppercase">{t("portfolio_instagram_pre")}</span>
            <span className="font-subheading text-base text-[#7A6C3E]">@sabadinnk</span>
            <span className="w-8 h-px bg-[#7A6C3E] group-hover:w-16 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
