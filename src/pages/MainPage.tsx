import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

export default function MainPage() {
  return (
    <div className="fluid-container pt-[10vh] md:pt-[12vh] pb-[6vh] md:pb-[10vh] min-h-screen flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full space-y-8 md:space-y-[6vh]"
      >
        {/* D-Day Area */}
        <div className="text-center shrink-0 mt-4 md:mt-0 flex flex-col items-center">
          <span className="bg-transparent text-accent-gold px-3 py-1 text-[11px] md:text-sm rounded-sm tracking-wide uppercase font-serif font-light inline-block mb-4 md:mb-5 leading-tight border border-accent-gold">
            Countdown to Prism
          </span>
          <div className="leading-none font-extralight tracking-tighter text-slate-800 font-metal">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        {/* Schedule Info Box */}
        <div className="w-full max-w-lg shadow-frame flex flex-col">
          <div className="outer-holo-line flex flex-col">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line flex flex-col">
                <div className="main-board p-5 md:p-8">
                  <h1 className="title-accent text-lg md:text-xl mb-4 md:mb-8">Schedule</h1>

                  <div className="space-y-4 md:space-y-6 text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base font-sans mt-2">
                    <p className="font-bold text-base md:text-lg">스케쥴 안내</p>
                    <p>
                      행사 준비 및 진행 일정은 아래 스케줄표를 통해 확인하실 수 있습니다.
                    </p>
                    <p className="text-xs md:text-sm text-slate-400 italic">
                      입장권 판매, 부스 배치도 공개 등 주요 일정이 순차적으로 업데이트됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Table Box */}
        <div className="w-full max-w-lg shadow-frame flex flex-col mt-6 md:mt-8">
          <div className="outer-holo-line flex flex-col">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line flex flex-col">
                <div className="main-board p-5 md:p-8">
                  <div className="w-full aspect-video wireframe-box bg-slate-50/50 min-h-[180px]">
                    <span className="text-[10px] tracking-[0.5em] text-slate-300">SCHEDULE TABLE AREA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-[10px] tracking-[0.3em] text-slate-300 uppercase shrink-0 pt-4 md:pt-0">
          Now Loading...
        </div>
      </motion.div>
    </div >
  );
}