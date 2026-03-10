import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Gold decorative line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#7A6C3E]/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-['Mulish'] font-light text-[#86895d] text-xs md:text-sm mb-6 tracking-[0.3em] uppercase"
        >
          Fineline &middot; Ornamental
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-['NewYork'] font-normal text-[#272b00] text-4xl sm:text-5xl lg:text-6xl tracking-[0.15em]"
        >
          Sabadinnk
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="w-24 h-px bg-[#7A6C3E] mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-subheading text-[#54582f] text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Art deeply inspired by nature, spirituality &amp; mysticism
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-body text-[#86895d] text-sm mt-4 tracking-widest uppercase"
        >
          Porto, Portugal
        </motion.p>

        <motion.a
          href="#inquiry"
          data-testid="hero-cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="inline-block mt-12 bg-transparent border border-[#7A6C3E] text-[#272b00] hover:bg-[#7A6C3E] hover:text-white transition-all duration-500 uppercase tracking-[0.25em] text-xs px-10 py-4"
        >
          Book a consultation
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" data-testid="scroll-down-indicator" className="text-[#7A6C3E]/50 hover:text-[#7A6C3E] transition-colors duration-500">
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
