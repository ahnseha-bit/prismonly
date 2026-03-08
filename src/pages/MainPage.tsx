import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

export default function MainPage() {
  return (
    <div className="fluid-container h-[100dvh] pt-[12vh] pb-[6vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center flex-1 min-h-0 space-y-[4vh] w-full"
      >
        {/* D-Day Area */}
        <div className="w-full px-4 md:px-0 max-w-2xl text-center shrink-0">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-4 text-slate-400">Countdown to Prism</p>
          <div className="leading-none font-extralight tracking-tighter text-slate-800 font-metal">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        {/* Schedule Section */}
        <div className="w-full px-4 md:px-0 max-w-2xl shadow-frame">
          <div className="outer-holo-line">
            <div className="p-[2px] bg-white flex flex-col flex-1 min-h-0 w-full">
              <div className="inner-holo-line">
                <div className="main-board">
                  <h1 className="title-accent text-xl mb-8">Schedule</h1>

                  <div className="space-y-6 text-slate-600 leading-[2.1] font-sans">
                    <p className="font-bold text-lg">스케쥴 안내</p>
                    <p>
                      행사 준비 및 진행 일정은 아래 스케줄표를 통해 확인하실 수 있습니다.
                    </p>
                    <p className="text-sm text-slate-400 italic">
                      입장권 판매, 부스 배치도 공개 등 주요 일정이 순차적으로 업데이트됩니다.
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <div className="w-full aspect-video wireframe-box bg-slate-50/50 min-h-[300px]">
                      <span className="text-[10px] tracking-[0.5em] text-slate-300">SCHEDULE TABLE AREA</span>
                    </div>
                  </div>

                  <div className="h-[20vh]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="w-full px-4 md:px-0 max-w-2xl text-[10px] tracking-[0.3em] text-slate-300 uppercase shrink-0 text-center">
          Now Loading...
        </div>
      </motion.div>
    </div>
  );
}