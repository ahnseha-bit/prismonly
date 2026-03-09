import React from "react";
import { motion } from "motion/react";

const HoloBox = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full shadow-frame">
    <div className="outer-holo-line">
      <div className="p-[2px] bg-white flex flex-col w-full">
        <div className="inner-holo-line">
          <div className="main-board text-left">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    animate={{
      textShadow: [
        "0 0 4px #ff0000",
        "2px 0 10px #ff0000",
        "-2px 0 10px #ff0000",
        "0 0 4px #ff0000"
      ],
      x: [0, -1, 1, -1, 0]
    }}
    transition={{
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror"
    }}
    className="text-rose-600 font-mono font-black tracking-widest italic"
  >
    {children}
  </motion.div>
);

export default function EventPage() {
  return (
    <div className="fluid-container min-h-screen pt-[10vh] md:pt-[12vh] pb-[10vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full space-y-6 md:space-y-8 mt-4 md:mt-8"
      >
        <div className="w-full max-w-3xl shadow-frame">
          <div className="outer-gold-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-gold-line">
                <div className="bg-white p-4 md:px-8 md:py-5 w-full">
                  <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 tracking-[-0.03em]">
                    Event
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <HoloBox>
            <div className="content-section space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <p className="body-md text-slate-500 font-medium">
                  행사 당일 진행될 이벤트 안내 페이지입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-slate-900/5 p-6 rounded-sm border border-slate-100 flex flex-col space-y-3 relative overflow-hidden">
                    <span className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase">
                      Event 0{num}
                    </span>
                    <div className="text-2xl md:text-3xl">
                      <ErrorText>UNKNOWN</ErrorText>
                    </div>
                    {/* 디지털 노이즈 라인 효과 */}
                    <motion.div
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.1, repeat: Infinity, delay: num * 0.5 }}
                      className="absolute inset-0 bg-rose-500/5 pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </HoloBox>
        </div>
      </motion.div>
    </div>
  );
}