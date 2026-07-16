import { ArrowRight, Sparkles } from "lucide-react";
import { ASSETS, PRODUCTS } from "../data/content";
import { motion } from "framer-motion";

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28"
    >
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />
      <div
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle,#0055FF,transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] bg-orange-50 border border-orange-100 rounded-full px-4 py-2"
          >
            <Sparkles size={14} /> Hospitality Tech & Automation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black tracking-tighter leading-[0.95] text-[#0A0A0A] mt-6 text-5xl md:text-6xl lg:text-7xl"
          >
            Robots that serve.
            <br />
            Screens that sell.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base md:text-lg text-zinc-600 leading-relaxed mt-6 max-w-xl"
          >
            Udbhav Lab is an innovation-driven technology company from Ahmedabad,
            helping restaurants, hotels, hospitals and retail embrace digital
            transformation through reliable, user-friendly automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-9"
          >
            <button
              onClick={() => go("products")}
              data-testid="hero-explore-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0055FF] text-white font-body font-bold px-7 py-4 hover:bg-orange-600 transition-colors duration-300"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => go("contact")}
              data-testid="hero-contact-btn"
              className="inline-flex items-center rounded-full border border-zinc-300 text-[#0A0A0A] font-body font-bold px-7 py-4 hover:border-[#0A0A0A] transition-colors duration-300"
            >
              Talk to Us
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src={ASSETS.heroBg}
              alt="Modern hospitality interior"
              className="h-[440px] w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
          </div>
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            src={PRODUCTS[0].image}
            alt="Advertising robot"
            className="absolute -bottom-8 -left-8 h-64 w-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
