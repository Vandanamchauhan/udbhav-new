import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ASSETS } from "../data/content";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-zinc-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          data-testid="nav-logo"
          className="flex items-center gap-3"
        >
          <img src={ASSETS.logo} alt="Udbhav Lab" className="h-11 w-11 rounded-lg object-cover" />
          <span className="font-display font-extrabold text-lg tracking-tight text-[#0A0A0A]">
            Udbhav Lab
          </span>
        </button>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="font-body font-medium text-sm text-zinc-600 hover:text-[#0055FF] transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          data-testid="nav-cta"
          className="hidden md:inline-flex items-center rounded-full bg-[#0A0A0A] text-white font-body font-bold text-sm px-6 py-3 hover:bg-[#0055FF] transition-colors duration-300"
        >
          Get in Touch
        </button>

        <button
          className="md:hidden text-[#0A0A0A]"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-200 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-mobile-link-${l.id}`}
              className="text-left font-body font-medium text-zinc-700 hover:text-[#0055FF] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            data-testid="nav-mobile-cta"
            className="rounded-full bg-[#0A0A0A] text-white font-bold text-sm px-6 py-3 mt-2"
          >
            Get in Touch
          </button>
        </div>
      )}
    </motion.header>
  );
};