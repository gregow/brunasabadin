import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";

// Easy to swap: replace with your own studio photo
const STUDIO_IMAGE = "https://images.unsplash.com/photo-1762786924414-5bf363f57d86?crop=entropy&cs=srgb&fm=jpg&q=85&w=900";

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
      className="relative py-24 md:py-32 bg-[#F0EBE0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Text content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
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
              className="font-['Mulish'] font-extralight text-[#3D4F2F] text-2xl sm:text-3xl lg:text-4xl mb-10 tracking-[0.2em] uppercase"
            >
              The Studio
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
                  <p className="font-body text-[#3D4F2F] text-sm font-medium uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="font-body text-[#5B6B4F] text-base leading-relaxed">
                    Rua da Firmeza, 457, 2&ordm; andar
                    <br />
                    Porto, Portugal
                  </p>
                  <a
                    href="https://maps.app.goo.gl/nRcSGBQ1681AQPSX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="studio-map-link"
                    className="inline-block mt-2 font-body text-xs text-[#D4AF37] tracking-wider uppercase hover:text-[#2F3E46] transition-colors duration-500"
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
                  <p className="font-body text-[#3D4F2F] text-sm font-medium uppercase tracking-wider mb-1">
                    Hours
                  </p>
                  <p className="font-body text-[#5B6B4F] text-base">
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
                  <p className="font-body text-[#3D4F2F] text-sm font-medium uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:sabadinnk@gmail.com"
                    data-testid="studio-email-link"
                    className="font-body text-[#5B6B4F] text-base hover:text-[#D4AF37] transition-colors duration-500"
                  >
                    sabadinnk@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Studio image */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/30" />
              <img
                src={STUDIO_IMAGE}
                alt="The Golden Panther Studio - Porto"
                data-testid="studio-image"
                className="relative w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
