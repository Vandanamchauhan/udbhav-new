import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { CONTACT, ASSETS } from "../data/content";
import { motion } from "framer-motion";

const XIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Contact = () => {
  const details = [
    { icon: Phone, label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref, testid: "contact-phone" },
    { icon: Mail, label: "Email us", value: CONTACT.email, href: CONTACT.emailHref, testid: "contact-email" },
  ];

  const socials = [
    { icon: Instagram, href: CONTACT.socials.instagram, label: "Instagram", testid: "social-instagram" },
    { icon: Linkedin, href: CONTACT.socials.linkedin, label: "LinkedIn", testid: "social-linkedin" },
    { icon: XIcon, href: CONTACT.socials.x, label: "X", testid: "social-x" },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="pt-24 lg:pt-32 bg-[#0A0A0A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF]">
          Get in Touch
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black tracking-tighter leading-none mt-4 text-6xl md:text-8xl lg:text-[9rem]"
        >
          Let&apos;s Talk
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-14 pb-16">
          <div className="space-y-8">
            {details.map((d) => {
              const Icon = d.icon;
              return (
                <a
                  key={d.testid}
                  href={d.href}
                  data-testid={`${d.testid}-link`}
                  className="group flex items-start gap-4"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-400 font-body">{d.label}</span>
                    <span className="block text-lg md:text-xl font-display font-bold group-hover:text-[#0055FF] transition-colors">
                      {d.value}
                    </span>
                  </span>
                </a>
              );
            })}

            <div className="flex items-start gap-4" data-testid="contact-address">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#0055FF]">
                <MapPin size={22} />
              </span>
              <span>
                <span className="block text-sm text-zinc-400 font-body">Visit us</span>
                <span className="block text-base font-body text-zinc-200 max-w-md leading-relaxed">
                  {CONTACT.address}
                </span>
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="font-body text-zinc-400 mb-5">Follow our journey</p>
            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.testid}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-testid={s.testid}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-colors duration-300"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Udbhav Lab" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-display font-bold">Udbhav Lab</span>
          </div>
          <p className="font-body text-sm text-zinc-500">
            © {new Date().getFullYear()} Udbhav Lab · Ahmedabad, India
          </p>
        </div>
      </div>
    </section>
  );
};