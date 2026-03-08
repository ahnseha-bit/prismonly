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

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-10 h-20 flex items-center justify-between">
          <Link to="/main" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 wireframe-box">Logo</div>
            <span className="font-serif font-light text-xs tracking-[0.3em] text-black/60 uppercase">Starry 2026</span>
          </Link>

          {/* Desktop Menu - Small and Clean */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] uppercase font-light tracking-[0.3em] transition-all duration-400 hover:text-black ${
                  location.pathname.startsWith(item.path) ? "text-black font-medium" : "text-black/30"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-black/40 hover:text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Frame 3: Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#f3f0ff]/95 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-10 text-black/40 hover:text-black p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-center space-y-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif font-light tracking-[0.2em] uppercase transition-colors ${
                      location.pathname === item.path ? "text-black" : "text-black/30 hover:text-black/60"
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
