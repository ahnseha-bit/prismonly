import { useState } from "react";
import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

const UPDATE_LIST = [
  { date: "260309", content: "「몇 번이라도 프리즘!」 웹사이트 공개" },
  { date: "260309", content: "부스 리스트 업데이트" },
  { date: "260310", content: "부스 리스트 수정 업데이트" },

];

export default function MainPage() {
  const [isExpanded, setIsExpanded] = useState(false);


  const displayList = [...UPDATE_LIST].reverse();

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
          <div className="text-[120pt] md:text-[150pt] leading-none font-extralight tracking-tighter text-slate-800 font-metal">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        <div className="w-full max-w-lg shadow-frame flex flex-col">
          <div className="outer-holo-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line">
                <div className="bg-white p-5 md:p-8 w-full flex flex-col">
                  <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-3">
                    <h2 className="text-sm md:text-base font-happy font-bold text-accent-gold m-0 tracking-[-0.03em]">
                      Update
                    </h2>
                  </div>

                  <div className="flex flex-col space-y-3">
                    {displayList.slice(0, isExpanded ? displayList.length : 3).map((item, index) => (
                      <div key={index} className="flex flex-row items-center gap-3 w-full">
                        <span className="text-accent-gold font-bold shrink-0 text-[12px] md:text-[13px] tracking-widest font-sans">
                          {item.date}
                        </span>
                        <span className="text-slate-600 truncate text-[13px] md:text-[14px]">
                          {item.content}
                        </span>
                      </div>
                    ))}
                  </div>

                  {displayList.length > 3 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-6 pt-3 text-[11px] md:text-[13px] font-bold text-slate-400 hover:text-accent-gold transition-colors border-t border-slate-50 flex items-center justify-center gap-1 w-full"
                    >
                      {isExpanded ? "▲" : "▼"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}