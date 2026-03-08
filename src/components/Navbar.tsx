import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Main", path: "/main" },
  { name: "Info", path: "/info" },
  { name: "Booth", path: "/booth" },
  { name: "Event", path: "/event" },
  { name: "Link World", path: "/links" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (location.pathname === "/") return null;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-sm border-b border-slate-100">
        <div className="w-full max-w-[1440px] mx-auto px-[6%] h-[8vh] flex items-center justify-between">

          <Link to="/" className="flex items-center group">
            <img
              src="/img/logo_menu.png"
              alt="Menu Logo"
              className="h-[4vh] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] font-happy tracking-[0.3em] transition-all duration-400 hover:text-accent-gold ${location.pathname.startsWith(item.path) ? "text-accent-gold font-bold" : "text-slate-400"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-[4vh] right-[6%] text-slate-400 hover:text-accent-gold p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-center space-y-[4vh]">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-happy italic font-light tracking-[0.2em] transition-colors ${location.pathname === item.path ? "text-accent-gold font-bold" : "text-slate-300 hover:text-slate-500"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}