import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../data/content";
import { motion } from "framer-motion";

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Products = () => {
  return (
    <section
      id="products"
      data-testid="products-section"
      className="py-24 lg:py-32 bg-white border-y border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF]">
              Our Products
            </span>
            <h2 className="font-display font-bold tracking-tight text-[#0A0A0A] mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight">
              A robot for every touchpoint
            </h2>
          </div>
          <p className="font-body text-zinc-600 max-w-md">
            Purpose-built hardware for hospitality and industrial automation — from material transportation and cleaning to service and advertising.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              data-testid={`product-card-${p.id}`}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300"
            >
              <div className="relative h-60 flex items-center justify-center rounded-xl bg-white border border-zinc-100 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-auto max-w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A0A0A] mt-6">
                {p.name}
              </h3>
              <p className="font-body text-sm font-semibold text-[#0055FF] mt-1">
                {p.tagline}
              </p>
              <p className="font-body text-sm text-zinc-600 leading-relaxed mt-3 flex-grow">
                {p.description}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-2 pt-3 border-t border-zinc-200/80">
                {p.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-baseline text-xs border-b border-zinc-100 pb-1.5 gap-2">
                    <span className="font-semibold text-zinc-500 shrink-0">{spec.label}:</span>
                    <span className="text-zinc-800 text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => go("contact")}
                data-testid={`product-enquire-${p.id}`}
                className="inline-flex items-center justify-center gap-1.5 font-body font-bold text-sm text-[#0A0A0A] mt-6 py-2.5 px-4 rounded-xl border border-zinc-300 bg-white hover:bg-[#0055FF] hover:border-[#0055FF] hover:text-white transition-all duration-300 shadow-sm"
              >
                Enquire
                <ArrowUpRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};