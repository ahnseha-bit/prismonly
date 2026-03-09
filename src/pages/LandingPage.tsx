import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50 bg-white">
      <div className="relative flex flex-col items-center -translate-y-[10%]">
        <motion.button
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 720 }}
          transition={{
            opacity: { duration: 1 },
            rotateY: { duration: 3.5, ease: [0.3, 1, 0.4, 1] }
          }}
          onAnimationComplete={() => setShowText(true)}
          onClick={() => navigate("/main")}
          className="group relative"
        >
          <img
            src="/img/logo_900.png"
            alt="Enter to PRISM"
            className="w-60 md:w-99 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
          />
        </motion.button>

        <div className="h-12 mt-6 flex justify-center items-start overflow-hidden w-full">
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-accent-gold px-6 py-2 shadow-lg"
              >
                <p className="text-white text-xs md:text-sm font-bold tracking-tight whitespace-nowrap">
                  킹프리 온리전에 오신 것을 환영합니다~!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}