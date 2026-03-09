import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const MagicParticle = ({ targetX, targetY }: { targetX: number, targetY: number }) => {
  const randomStartX = Math.random() * window.innerWidth - window.innerWidth / 2;
  const randomStartY = Math.random() * window.innerHeight - window.innerHeight / 2;

  return (
    <motion.div
      initial={{ x: randomStartX, y: randomStartY, opacity: 0, scale: 0 }}
      animate={{
        x: [randomStartX, targetX],
        y: [randomStartY, targetY],
        opacity: [0, 1, 0.8],
        scale: [0, 1.5, 0.5]
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.random() * 0.5
      }}
      className="absolute text-white text-[12px] pointer-events-none z-30"
    >
      ✧
    </motion.div>
  );
};

export default function LandingPage() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<"spinning" | "dispersing" | "showBox">("spinning");
  const [particles, setParticles] = useState<{ x: number, y: number }[]>([]);

  useEffect(() => {
    if (stage === "dispersing") {
      const newParticles = Array.from({ length: 100 }).map(() => ({
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 60,
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => setStage("showBox"), 1500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50">
      <div className="relative flex flex-col items-center -translate-y-[10%] w-full">
        <motion.button
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 720 }}
          transition={{
            opacity: { duration: 1 },
            rotateY: { duration: 3.5, ease: [0.3, 1, 0.4, 1] }
          }}
          onAnimationComplete={() => setStage("dispersing")}
          onClick={() => navigate("/main")}
          className="group relative z-20"
        >
          <img
            src="/img/logo_900.png"
            alt="Enter to PRISM"
            className="w-60 md:w-99 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
          />
        </motion.button>

        <div className="h-12 mt-8 flex justify-center items-center w-full relative">
          {stage === "dispersing" && particles.map((p, i) => (
            <MagicParticle key={i} targetX={p.x} targetY={p.y} />
          ))}

          <AnimatePresence>
            {stage === "showBox" && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                  boxShadow: ["0px 0px 40px #fff", "0px 0px 0px #fff"]
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-[#bae6fd] px-6 py-2.5 shadow-lg relative rounded-sm"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: Math.random() }}
                    className="absolute text-white text-[10px]"
                    style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                  >
                    ✧
                  </motion.div>
                ))}
                <p className="text-[#FF69B4] text-[13px] md:text-[15px] font-black tracking-normal whitespace-nowrap">
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