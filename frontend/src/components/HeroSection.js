import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Easy to swap: just replace this URL with your own hero image
const HERO_IMAGE = "https://images.unsplash.com/photo-1713117224393-085af73a1aa2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6]">

      {/* Subtle ornamental background image */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)"
        }} />


      {/* Gold decorative line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#D4AF37]/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-subheading text-[#526770] text-base md:text-lg mb-6 tracking-wide">

          Fineline &middot; Ornamental &middot; Azulejo Portugu&ecirc;s
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="!font-['Cormorant_Garamond'] !font-thin !text-4xl sm:!text-5xl lg:!text-6xl text-[#2F3E46]">

          Bruna
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="w-24 h-px bg-[#D4AF37] mx-auto my-8" />


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-subheading text-[#526770] text-lg md:text-xl max-w-xl mx-auto leading-relaxed">

          Art deeply inspired by nature, spirituality &amp; mysticism
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-body text-[#526770]/70 text-sm mt-4 tracking-widest uppercase">

          Porto, Portugal
        </motion.p>

        <motion.a
          href="#inquiry"
          data-testid="hero-cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="inline-block mt-12 bg-transparent border border-[#D4AF37] text-[#2F3E46] hover:bg-[#D4AF37] hover:text-white transition-all duration-500 uppercase tracking-[0.25em] text-xs px-10 py-4">

          Book a consultation
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <a href="#about" data-testid="scroll-down-indicator" className="text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-500">
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>);

};