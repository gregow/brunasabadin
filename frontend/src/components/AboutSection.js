import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

// Easy to swap: replace the video URL with your own video file
const ARTIST_VIDEO = "/video/artist-reel.mp4";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-[#F7F7F5]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Video */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#7A6C3E]/30" />
              <video
                src={ARTIST_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                data-testid="about-artist-video"
                className="relative w-full aspect-[3/4] object-cover"
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
              className="font-['Mulish'] font-light text-[#7A6C3E] text-xs tracking-[0.3em] uppercase mb-3"
            >
              {t("about_label")}
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
              className="font-['Mulish'] font-extralight text-[#272b00] text-2xl sm:text-3xl lg:text-4xl mb-8 tracking-[0.2em] uppercase"
            >
              {t("about_title")}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeInUp}
              className="font-body text-[#54582f] text-base leading-relaxed mb-6"
            >
              {t("about_p1")}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeInUp}
              className="font-body text-[#54582f] text-base leading-relaxed mb-6"
            >
              {t("about_p2_pre")}
              <a
                href="https://www.thegoldenpanther.pt/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="about-golden-panther-link"
                className="text-[#7A6C3E] font-medium hover:underline underline-offset-4 transition-colors duration-500"
              >
                {t("about_p2_link")}
              </a>
              {t("about_p2_post")}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={4}
              variants={fadeInUp}
              className="font-subheading text-[#272b00] text-lg"
            >
              {t("about_quote")}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={5}
              variants={fadeInUp}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[t("tag_fineline"), t("tag_ornamental"), t("tag_nature"), t("tag_spirituality")].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-[#7A6C3E]/40 text-[#272b00] text-xs tracking-[0.15em] uppercase px-4 py-2 font-body"
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
