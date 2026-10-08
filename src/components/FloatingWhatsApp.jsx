import { motion } from "framer-motion";
import { useState } from "react";
import { CONTACT } from "../data/content";

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = CONTACT.whatsapp || "https://wa.me/919316493839";

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      data-testid="floating-whatsapp-container"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-testid="floating-whatsapp-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.55)] transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50"
      >
        {/* Animated pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-current drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.65.74 5.13 2.03 7.25L2 30l7-1.99C11.04 29.28 13.46 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.02 19.82c-.34.95-1.7 1.83-2.77 2.06-.73.16-1.68.29-4.88-1.04-4.08-1.7-6.72-5.83-6.92-6.1-.2-.27-1.66-2.21-1.66-4.21 0-2 1.05-2.99 1.42-3.41.37-.42.81-.53 1.08-.53.27 0 .54 0 .78.02.25.01.59-.1.92.7.34.82 1.16 2.83 1.26 3.03.1.2.17.44.03.71-.14.27-.21.44-.41.68-.2.24-.43.53-.61.71-.21.21-.43.44-.19.85.25.42 1.1 1.81 2.36 2.93 1.62 1.44 2.99 1.89 3.41 2.1.42.21.67.18.92-.1.25-.28 1.08-1.26 1.37-1.69.29-.43.58-.36.98-.21.4.15 2.54 1.2 2.98 1.42.44.22.73.33.84.51.11.18.11 1.06-.23 2.01z" />
        </svg>

        {/* Hover pill badge */}
        <motion.span
          initial={{ opacity: 0, x: 10, scale: 0.95 }}
          animate={isHovered ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full mr-3 pointer-events-none whitespace-nowrap rounded-full bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 shadow-lg hidden md:block"
        >
          Chat on WhatsApp
        </motion.span>
      </motion.a>
    </div>
  );
};
