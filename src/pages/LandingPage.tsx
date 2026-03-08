import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onClick={() => navigate("/main")}
        className="group relative flex flex-col items-center space-y-8"
      >
        {/* 중앙 로고 이미지 (logo_900.png) */}
        <img
          src="/img/logo_900.png"
          alt="Starry Night Logo"
          className="w-64 md:w-96 transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
        />

        {/* Text Logo */}
        <div className="text-center space-y-2">
          <h1 className="font-metal italic font-bold text-xl md:text-2xl tracking-[0.4em] text-slate-800 uppercase">
            Starry 2026
          </h1>
          <p className="text-[10px] tracking-[0.6em] uppercase text-slate-300 font-sans group-hover:text-accent-purple transition-colors duration-500">
            Click to Enter
          </p>
        </div>
      </motion.button>
    </div>
  );
}