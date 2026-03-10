import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Plane } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export const StudioSection = () => {
  return (
    <section
      id="studio"
      data-testid="studio-section"
      className="relative py-24 md:py-32 bg-[#F7F7F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* The Golden Panther */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="font-subheading text-[#D4AF37] text-base tracking-widest uppercase mb-3"
            >
              Find Me
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
              className="font-['Mulish'] font-extralight text-[#272b00] text-xl sm:text-2xl mb-8 tracking-[0.2em] uppercase"
            >
              <a
                href="https://www.thegoldenpanther.pt/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="studio-golden-panther-link"
                className="hover:text-[#D4AF37] transition-colors duration-500"
              >
                The Golden Panther
              </a>
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <MapPin size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[#272b00] text-sm font-medium uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="font-body text-[#54582f] text-base leading-relaxed">
                    Rua da Firmeza, 457, 2&ordm; andar
                    <br />
                    Porto, Portugal
                  </p>
                  <a
                    href="https://maps.app.goo.gl/nRcSGBQ1681AQPSX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="studio-map-link"
                    className="inline-block mt-2 font-body text-xs text-[#D4AF37] tracking-wider uppercase hover:text-[#272b00] transition-colors duration-500"
                  >
                    View on map &rarr;
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <Clock size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[#272b00] text-sm font-medium uppercase tracking-wider mb-1">
                    Hours
                  </p>
                  <p className="font-body text-[#54582f] text-base">
                    By appointment only
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <Mail size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[#272b00] text-sm font-medium uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:sabadinnk@gmail.com"
                    data-testid="studio-email-link"
                    className="font-body text-[#54582f] text-base hover:text-[#D4AF37] transition-colors duration-500"
                  >
                    sabadinnk@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Guest Spots */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="font-subheading text-[#D4AF37] text-base tracking-widest uppercase mb-3"
            >
              On the Road
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
              className="font-['Mulish'] font-extralight text-[#272b00] text-xl sm:text-2xl mb-8 tracking-[0.2em] uppercase"
            >
              Guest Spots
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <Plane size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[#86895d] text-sm italic">
                    Upcoming guest spots will be announced here and on{" "}
                    <a
                      href="https://www.instagram.com/sabadinnk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:underline underline-offset-4"
                    >
                      Instagram
                    </a>.
                  </p>
                </div>
              </div>

              {/* Placeholder for future guest spots — easy to add */}
              {/*
              <div className="border-l-2 border-[#D4AF37]/30 pl-6 space-y-1">
                <p className="font-body text-[#272b00] text-sm font-medium uppercase tracking-wider">
                  Studio Name
                </p>
                <p className="font-body text-[#54582f] text-base">City, Country</p>
                <p className="font-body text-[#86895d] text-sm">Jan 15 — Jan 28, 2026</p>
              </div>
              */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
