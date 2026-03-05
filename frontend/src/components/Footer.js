import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative py-20 md:py-28 bg-[#2F3E46] text-[#FAF9F6] overflow-hidden">

      {/* Gold line top */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#D4AF37]/40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="!font-['Cinzel_Decorative'] !font-thin !text-3xl md:!text-4xl lg:!text-5xl mb-6 text-[#FAF9F6]">

          Bruna
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-subheading text-[#FAF9F6]/60 text-lg mb-10">

          Tattoo Artist at The Golden Panther &middot; Porto
        </motion.p>

        {/* Instagram link */}
        <motion.a
          href="https://www.instagram.com/sabadinnk"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer-instagram-link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-3 border border-[#D4AF37]/40 px-8 py-4 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-500 group">

          <Instagram size={16} className="text-[#D4AF37]" />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-[#FAF9F6]/80 group-hover:text-[#FAF9F6]">
            @sabadinnk
          </span>
        </motion.a>

        {/* Divider */}
        <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto my-12" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-3">

          <p className="font-body text-[#FAF9F6]/40 text-xs tracking-wider uppercase">
            The Golden Panther Tattoo Studio
          </p>
          <p className="font-body text-[#FAF9F6]/30 text-xs">
            Rua da Firmeza, 457, 2&ordm; andar &middot; Porto, Portugal
          </p>
          <p className="font-body text-[#FAF9F6]/20 text-xs mt-6">
            &copy; {new Date().getFullYear()} Bruna &mdash; The Golden Panther. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>);

};