import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const FairySparkle = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{
      scale: [0, 1.2, 0],
      opacity: [0, 1, 0],
      rotate: [0, 90, 180]
    }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: Math.random() * 0.5
    }}
    className="absolute text-white text-[10px] pointer-events-none"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
  >
    ✧
  </motion.div>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50">
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

        <div className="h-10 mt-8 flex justify-center items-start w-full relative">
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  boxShadow: ["0px 0px 0px #fff", "0px 0px 20px #fff", "0px 0px 0px #fff"]
                }}
                transition={{
                  duration: 1,
                  ease: "backOut",
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                className="bg-[#bae6fd] px-5 py-1.5 shadow-lg relative"
              >
                {[...Array(8)].map((_, i) => (
                  <FairySparkle key={i} />
                ))}

                <p className="text-slate-600 text-[10px] md:text-[11px] font-bold tracking-[0.25em] whitespace-nowrap ml-[0.25em] relative z-10">
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