import React from "react";
import { motion } from "framer-motion";

// Easy to swap: replace with your own portrait photo
const ARTIST_PORTRAIT = "https://images.unsplash.com/photo-1751891030605-e7dbf7692a39?crop=entropy&cs=srgb&fm=jpg&q=85&w=800";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-[#F0EBE0]"
    >
      {/* Subtle azulejo pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1762786924368-f18185f5382c?crop=entropy&cs=srgb&fm=jpg&q=85&w=400")`,
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37]/30" />
              <img
                src={ARTIST_PORTRAIT}
                alt="Bruna - Tattoo Artist"
                data-testid="about-artist-image"
                className="relative w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeInUp}
              className="font-subheading text-[#D4AF37] text-base tracking-widest uppercase mb-3"
            >
              The Artist
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
              className="font-['Cinzel_Decorative'] text-[#2F3E46] text-2xl sm:text-3xl lg:text-4xl mb-8"
            >
              About Bruna
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeInUp}
              className="font-body text-[#526770] text-base leading-relaxed mb-6"
            >
              Bruna is a tattoo artist based in Porto, Portugal, specializing in
              Fineline, Ornamental, and Azulejo Portugu&ecirc;s styles. Her art is
              deeply inspired by nature, spirituality, and mysticism &mdash; themes
              that are reflected in every detailed and symbolic stroke she creates.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeInUp}
              className="font-body text-[#526770] text-base leading-relaxed mb-6"
            >
              Each tattoo is created in a fully personalized way, seeking to express
              the essence and the unique stories of every client. Working at{" "}
              <span className="text-[#D4AF37] font-medium">The Golden Panther</span>{" "}
              studio, Bruna brings together precision, creativity, and a deep
              connection with the sacred geometry found in nature.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={4}
              variants={fadeInUp}
              className="font-subheading text-[#2F3E46] text-lg"
            >
              &ldquo;Every tattoo tells a story &mdash; yours, written on skin.&rdquo;
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={5}
              variants={fadeInUp}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["Fineline", "Ornamental", "Nature", "Spirituality", "Azulejo"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-[#D4AF37]/40 text-[#2F3E46] text-xs tracking-[0.15em] uppercase px-4 py-2 font-body"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
