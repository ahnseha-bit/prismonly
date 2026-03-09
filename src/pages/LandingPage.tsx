import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// 요정 마술 효과용 작은 반짝이 입자 컴포넌트 (개별)
const FairySparkle = ({ isStatic = false }) => (
  <motion.div
    initial={isStatic ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
    animate={
      isStatic
        ? {
          scale: [0, 1.2, 0],
          opacity: [0, 1, 0],
          rotate: [0, 90, 180],
        }
        : {
          scale: [1, 1.5, 1],
          opacity: [1, 0.8, 1],
        }
    }
    transition={{
      duration: isStatic ? 0.8 : 0.4,
      repeat: Infinity,
      repeatDelay: Math.random() * 0.5,
    }}
    className="absolute text-white text-[8px] pointer-events-none z-10"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
  >
    ✧
  </motion.div>
);

// 엄청나게 많은 반짝이가 휩쓸고 지나가는 애니메이션 컴포넌트
const StardustSweep = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 1 }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // 마법의 뾰로롱 속도
      onAnimationComplete={onComplete}
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden w-[120%] -left-[10%]"
    >
      {/* 엄청나게 많은 반짝이 입자 (약 80개) */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
          animate={{
            x: ["0vw", "110vw"],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180],
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            delay: Math.random() * 1.2, // 입자마다 등장 시간차를 주어 슈루루루 느낌 구현
          }}
          className="absolute text-white text-[10px] pointer-events-none"
          style={{
            top: `${Math.random() * 120 - 10}%`, // 박스 영역보다 넓게 퍼짐
            left: `${Math.random() * 10}%`,
          }}
        >
          ✧
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function LandingPage() {
  const navigate = useNavigate();
  const [animationStage, setAnimationStage] = useState<
    "spinning" | "stardustSweep" | "showBox" | "finish"
  >("spinning");

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50">
      <div className="relative flex flex-col items-center -translate-y-[10%]">
        <motion.button
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 720 }}
          transition={{
            opacity: { duration: 1 },
            rotateY: { duration: 3.5, ease: [0.3, 1, 0.4, 1] },
          }}
          onAnimationComplete={() => setAnimationStage("stardustSweep")}
          onClick={() => navigate("/main")}
          className="group relative"
        >
          <img
            src="/img/logo_900.png"
            alt="Enter to PRISM"
            className="w-60 md:w-99 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl relative z-20"
          />
        </motion.button>

        <div className="h-10 mt-8 flex justify-center items-start w-full relative">
          <AnimatePresence>
            {/* 단계 1: 엄청난 반짝이 스윕 */}
            {animationStage === "stardustSweep" && (
              <StardustSweep
                onComplete={() => setAnimationStage("showBox")}
              />
            )}

            {/* 단계 2: 마법처럼 박스 등장 (반짝이 스윕 완료 후) */}
            {(animationStage === "showBox" || animationStage === "finish") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  boxShadow: [
                    "0px 0px 0px #fff",
                    "0px 0px 15px #fff",
                    "0px 0px 0px #fff",
                  ],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
                onAnimationComplete={() => setAnimationStage("finish")}
                className="bg-[#bae6fd] px-5 py-1.5 shadow-lg relative rounded-sm"
              >
                {/* 박스 자체에 은은하게 계속 반짝이는 작은 입자들 (10개) */}
                {[...Array(10)].map((_, i) => (
                  <FairySparkle key={i} isStatic={true} />
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