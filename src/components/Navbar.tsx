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
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-[3vh] h-[3vh] outer-holo-line">
              <div className="w-full h-full bg-white flex items-center justify-center text-[10px] font-bold text-accent-purple">P</div>
            </div>
            <span className="font-metal italic font-bold text-xs tracking-[0.2em] text-slate-800 uppercase">Starry 2026</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-[4vw]">
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] uppercase font-metal tracking-[0.3em] transition-all duration-400 hover:text-accent-purple ${
                  location.pathname.startsWith(item.path) ? "text-accent-purple font-bold" : "text-slate-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-400 hover:text-accent-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-[4vh] right-[6%] text-slate-400 hover:text-accent-purple p-2"
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
                    className={`text-2xl font-metal italic font-light tracking-[0.2em] uppercase transition-colors ${
                      location.pathname === item.path ? "text-accent-purple font-bold" : "text-slate-300 hover:text-slate-500"
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
