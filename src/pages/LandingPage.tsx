import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <button
          onClick={() => navigate("/main")}
          className="group relative flex flex-col items-center space-y-12"
        >
          <img
            src="/img/logo_900.png"
            alt="Prismonly Logo"
            className="w-full max-w-[400px] transition-transform duration-500 group-hover:scale-110 object-contain"
          />

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[10px] tracking-[0.8em] uppercase font-light text-black/30 group-hover:text-black/60 transition-colors duration-500"
            >
              Click to Enter
            </motion.p>
          </div>
        </button>
      </motion.div>
    </div>
  );
}
