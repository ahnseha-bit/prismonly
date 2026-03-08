import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

export default function MainPage() {
  return (
    {/* 모든 화면에서 h-[100dvh] 제거! 화면 전체는 자연스럽게 밑으로 늘어남 */ }
    < div className = "fluid-container pt-[10vh] md:pt-[12vh] pb-[6vh] md:pb-[10vh] flex flex-col relative z-10 overflow-x-hidden" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full space-y-8 md:space-y-[6vh]"
      >
        {/* D-Day Area */}
        <div className="text-center shrink-0 mt-4 md:mt-0">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-2 md:mb-4 text-slate-400">Countdown to Prism</p>
          <div className="leading-none font-extralight tracking-tighter text-slate-800 font-metal italic">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        {/* Schedule Section 
            🌟 핵심: 프레임 자체에 고정된 세로 높이 지정 (모바일 h-[60vh], PC md:h-[65vh]) 
               그리고 더 깔끔해 보이도록 max-w-lg로 너비 살짝 축소
        */}
        <div className="w-full max-w-lg shadow-frame h-[60vh] md:h-[65vh] flex flex-col">
          <div className="outer-holo-line flex flex-col h-full">
            <div className="p-[2px] bg-white flex flex-col w-full h-full">
              <div className="inner-holo-line flex flex-col h-full">
                <div className="main-board h-full">
                  <h1 className="title-accent text-lg md:text-xl mb-4 md:mb-8">Schedule</h1>

                  <div className="space-y-4 md:space-y-6 text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base font-sans">
                    <p className="font-bold text-base md:text-lg">스케쥴 안내</p>
                    <p>
                      행사 준비 및 진행 일정은 아래 스케줄표를 통해 확인하실 수 있습니다.
                    </p>
                    <p className="text-xs md:text-sm text-slate-400 italic mb-10">
                      입장권 판매, 부스 배치도 공개 등 주요 일정이 순차적으로 업데이트됩니다.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 mb-8">
                    <div className="w-full aspect-video wireframe-box bg-slate-50/50 min-h-[180px]">
                      <span className="text-[10px] tracking-[0.5em] text-slate-300">SCHEDULE TABLE AREA</span>
                    </div>
                  </div>

                  {/* 스크롤 여유 공간 삭제 (h-full 설정으로 불필요) */}
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