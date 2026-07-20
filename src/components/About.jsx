import { INDUSTRIES } from "../data/content";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 lg:py-32 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF]"
        >
          Who We Are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold tracking-tight text-[#0A0A0A] mt-4 text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight"
        >
          We Transform Your Business with Smart 
          <span className="text-zinc-400"> Robotics & Automation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base md:text-lg text-zinc-600 leading-relaxed mt-8 max-w-3xl"
        >
          Udbhav Lab is dedicated to providing self ordering kiosk, Delivery & Advertisement robot solutions. Our mission is to help businesses embrace digital transformation through innovative, reliable and user-friendly products — built for the real, fast-paced world of service.
        </motion.p>

        <div className="mt-12 flex flex-wrap gap-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              data-testid={`industry-tag-${i}`}
              className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 font-body font-semibold text-sm text-zinc-700"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
