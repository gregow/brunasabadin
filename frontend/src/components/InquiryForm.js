import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";
import { Send } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattoo_description: "",
    placement: "",
    size: "",
    reference_style: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.tattoo_description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, formData);
      toast.success("Inquiry sent! Bruna will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        tattoo_description: "",
        placement: "",
        size: "",
        reference_style: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#3D4F2F]/20 focus:border-[#D4AF37] outline-none rounded-none px-0 py-4 transition-colors duration-500 placeholder:text-[#3D4F2F]/30 font-body text-[#3D4F2F] text-base";

  return (
    <section
      id="inquiry"
      data-testid="inquiry-section"
      className="py-24 md:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - intro text */}
          <div className="lg:col-span-4">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="font-subheading text-[#D4AF37] text-base tracking-widest uppercase mb-3"
            >
              Get in Touch
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
              className="font-['Mulish'] font-extralight text-[#3D4F2F] text-2xl sm:text-3xl lg:text-4xl mb-8 tracking-[0.2em] uppercase"
            >
              Tattoo Inquiry
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeInUp}
              className="font-body text-[#5B6B4F] text-base leading-relaxed mb-6"
            >
              Every piece begins with a conversation. Share your ideas, and
              together we&rsquo;ll create something unique that tells your story.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeInUp}
              className="font-subheading text-[#3D4F2F]/60 text-sm"
            >
              Fields marked with * are required
            </motion.p>
          </div>

          {/* Right - form */}
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            variants={fadeInUp}
          >
            <form
              onSubmit={handleSubmit}
              data-testid="inquiry-form"
              className="bg-white/50 backdrop-blur-sm border border-[#D4AF37]/20 p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-[#5B6B4F]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    data-testid="inquiry-name-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-[#5B6B4F]">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    data-testid="inquiry-email-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-[#5B6B4F]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    data-testid="inquiry-phone-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+351..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-[#5B6B4F]">
                    Body Placement
                  </label>
                  <input
                    type="text"
                    name="placement"
                    data-testid="inquiry-placement-input"
                    value={formData.placement}
                    onChange={handleChange}
                    placeholder="e.g. forearm, back, ankle..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-[#5B6B4F]">
                    Approximate Size
                  </label>
                  <input
                    type="text"
                    name="size"
                    data-testid="inquiry-size-input"
                    value={formData.size}
                    onChange={handleChange}
                    placeholder="e.g. 10cm, half sleeve..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-[#5B6B4F]">
                    Preferred Style
                  </label>
                  <input
                    type="text"
                    name="reference_style"
                    data-testid="inquiry-style-input"
                    value={formData.reference_style}
                    onChange={handleChange}
                    placeholder="Fineline, Ornamental, Azulejo..."
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="font-body text-xs tracking-[0.15em] uppercase text-[#526770]">
                  Describe Your Tattoo Idea *
                </label>
                <textarea
                  name="tattoo_description"
                  data-testid="inquiry-description-input"
                  value={formData.tattoo_description}
                  onChange={handleChange}
                  placeholder="Tell me about your vision, the symbols, themes or elements you'd like to include..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  data-testid="inquiry-submit-button"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 bg-transparent border border-[#D4AF37] text-[#3D4F2F] hover:bg-[#D4AF37] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 uppercase tracking-[0.25em] text-xs px-10 py-4 group"
                >
                  {submitting ? "Sending..." : "Send Inquiry"}
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-500"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
