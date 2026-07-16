import { Lightbulb, ShieldCheck, MousePointerClick, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    icon: Lightbulb,
    title: "Innovation That Drives Growth ",
    desc: "We combine advanced robotics, intelligent automation, and user-centric design to help businesses operate smarter and serve customers better.",
    span: "md:col-span-8",
  },
  {
    icon: ShieldCheck,
    title: "Increase Operational Efficiency",
    desc: "Automate repetitive tasks and allow your staff to focus on delivering exceptional customer service.",
    span: "md:col-span-4",
  },
  {
    icon: MousePointerClick,
    title: "Reduce Operating Costs ",
    desc: "Intuitive for staff and guests alike — no manual required.",
    span: "md:col-span-4",
  },
  {
    icon: Rocket,
    title: "Dedicated Support",
    desc: "From consultation and installation to training and after-sales service, we're with you at every step.",
    span: "md:col-span-8",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF]">
          Why Udbhav Lab
        </span>
        <h2 className="font-display font-bold tracking-tight text-[#0A0A0A] mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
          To become India's leading provider of intelligent hospitality automation solutions
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`why-us-card-${i}`}
                className={`${item.span} rounded-2xl border border-zinc-200 bg-white p-8 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#0055FF]">
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A0A0A] mt-5">
                  {item.title}
                </h3>
                <p className="font-body text-zinc-600 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
