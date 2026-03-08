import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

export default function MainPage() {
  return (
    {/* 상단 패딩 축소 및 화면 높이(100dvh) 고정 */ }
    < div className = "fluid-container h-[100dvh] pt-[12vh] pb-[6vh] flex flex-col relative z-10" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center flex-1 min-h-0 space-y-[4vh] w-full"
      >
        {/* D-Day Area (공간 고정: shrink-0) */}
        <div className="text-center shrink-0">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-4 text-slate-400">Countdown to Prism</p>
          <div className="leading-none font-extralight tracking-tighter text-slate-800 font-metal italic">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        {/* Schedule Section (남은 공간 모두 차지: flex-1) */}
        <div className="w-full max-w-2xl shadow-frame">
          <div className="outer-holo-line">
            {/* 중간 bg-white 레이어에도 flex 속성 필수 적용 */}
            <div className="p-[2px] bg-white flex flex-col flex-1 min-h-0 w-full">
              <div className="inner-holo-line">
                <div className="main-board">
                  {/* 내부 스크롤 콘텐츠 시작 */}
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

                  {/* 스크롤 테스트를 위한 임시 여백 (나중에 지우셔도 됩니다) */}
                  <div className="h-[20vh]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text (공간 고정: shrink-0) */}
        <div className="text-[10px] tracking-[0.3em] text-slate-300 uppercase shrink-0">
          ⓒ KING of PRISM 온리전 ✧ 「몇번이라도 프리즘!」
        </div>
      </motion.div>
    </div >
  );
}