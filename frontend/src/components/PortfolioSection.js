import React from "react";
import { motion } from "framer-motion";

// Easy to swap: replace URLs with your own portfolio images
const PORTFOLIO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1704120103349-f9db80e2cd6e?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Ornamental floral design",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1729343881969-c576e2fb04b7?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Art nouveau botanical pattern",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1598934475004-4a2e8729e194?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Line drawing rose and hands",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1761249842337-a961c80d2919?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Botanical white rose illustration",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1749730796597-578c649f61e2?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Botanical plant illustration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1768425228876-ddf37cfc7dbe?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Intricate venation pattern",
    span: "col-span-1 row-span-1",
  },
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
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <div className="text-left mb-16 lg:mb-20">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-['Mulish'] font-light text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeIn}
            className="font-['Mulish'] font-extralight text-[#272b00] text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] uppercase"
          >
            Portfolio
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              data-testid={`portfolio-item-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeIn}
              className={`${img.span} relative overflow-hidden group cursor-pointer border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-700`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#272b00]/0 group-hover:bg-[#272b00]/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/sabadinnk"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="portfolio-instagram-link"
            className="inline-flex items-center gap-3 text-[#272b00] hover:text-[#D4AF37] transition-colors duration-500 group"
          >
            <span className="font-body text-xs tracking-[0.2em] uppercase">
              See more on Instagram
            </span>
            <span className="font-subheading text-base text-[#D4AF37]">
              @sabadinnk
            </span>
            <span className="w-8 h-px bg-[#D4AF37] group-hover:w-16 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
