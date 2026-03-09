import { useState } from "react";
import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

// 업데이트 더미 데이터 (최신순으로 위에서부터 작성)
const UPDATE_LIST = [
  { id: 1, date: "2026.03.09", content: "부스 참가 정보 및 등급표가 업데이트 되었습니다." },
  { id: 2, date: "2026.03.08", content: "행사 일정 및 참관객 안내 페이지가 오픈되었습니다." },
  { id: 3, date: "2026.03.07", content: "티저 사이트가 공개되었습니다." },
  { id: 4, date: "2026.03.01", content: "온리전 개최가 확정되었습니다." },
];

export default function MainPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fluid-container pt-[10vh] md:pt-[12vh] pb-[6vh] md:pb-[10vh] min-h-screen flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full space-y-8 md:space-y-[6vh]"
      >
        <div className="text-center shrink-0 mt-4 md:mt-0 flex flex-col items-center">
          <span className="bg-transparent text-accent-gold px-2.5 py-0.5 text-[10px] md:text-xs rounded-sm tracking-tight font-serif font-light inline-block mb-4 md:mb-5 leading-tight border border-accent-gold">
            Countdown to Prism
          </span>
          <div className="leading-none font-extralight tracking-tighter text-slate-800 font-metal">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        <div className="w-full max-w-lg shadow-frame flex flex-col">
          <div className="outer-gold-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-gold-line">
                <div className="bg-white p-5 md:p-8 w-full flex flex-col">
                  <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-3">
                    <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 tracking-[-0.03em]">
                      Update
                    </h2>
                  </div>

                  {/* 리스트 영역 (고정된 줄 높이로 점핑 현상 방지) */}
                  <div className="flex flex-col space-y-3">
                    {UPDATE_LIST.slice(0, isExpanded ? UPDATE_LIST.length : 3).map((item) => (
                      <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 body-md">
                        <span className="text-accent-gold font-bold shrink-0 text-[13px] md:text-[14px]">{item.date}</span>
                        <span className="text-slate-600 truncate">{item.content}</span>
                      </div>
                    ))}
                  </div>

                  {/* 더보기 버튼 */}
                  {UPDATE_LIST.length > 3 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-6 pt-3 text-[11px] md:text-[13px] font-bold text-slate-400 hover:text-accent-gold transition-colors border-t border-slate-50 flex items-center justify-center gap-1 w-full"
                    >
                      {isExpanded ? "접기 ▲" : "더보기 ▼"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[10px] tracking-[0.3em] text-slate-300 uppercase shrink-0 pt-4 md:pt-0">
          Now Loading...
        </div>
      </motion.div>
    </div>
  );
}