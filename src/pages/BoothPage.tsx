import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const BOOTH_MENU = [
  { id: "list", label: "부스 리스트" },
  { id: "detail", label: "부스 상세정보" },
  { id: "map", label: "부스 배치도" },
];

export default function BoothPage() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="fluid-container h-[100dvh] pt-[12vh] pb-[6vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center flex-1 min-h-0 w-full space-y-[4vh]"
      >
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-4 shrink-0">
          <h2 className="text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-purple">Booth</h2>
          
          <div className="flex overflow-x-auto no-scrollbar space-x-1 md:space-x-2 pb-2 md:pb-0 mt-6 md:mt-0 w-full md:w-auto">
            {BOOTH_MENU.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-shrink-0 px-1.5 md:px-6 py-1 md:py-2 rounded-[4px] text-[9px] md:text-[11px] tracking-wider md:tracking-widest transition-all duration-400 font-sans ${
                  activeTab === item.id
                    ? "bg-accent-purple text-white"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full shadow-frame">
          <div className="outer-holo-line flex flex-col flex-1 min-h-0 w-full">
            <div className="p-[2px] bg-white flex flex-col flex-1 min-h-0 w-full">
              <div className="inner-holo-line">
                <div className="main-board text-left min-h-[60vh]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="font-sans text-slate-600 leading-[2.1]"
                    >
                      {activeTab === "list" && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-bold text-slate-800">ㄱ. 부스 리스트</h3>
                          <div className="bg-slate-50 p-4 md:p-8 rounded-lg border border-slate-100">
                            <p className="text-sm text-slate-400 mb-6 uppercase tracking-widest">현재 공개 정보</p>
                            <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-2 mb-4 text-xs font-bold text-slate-400">
                              <span>부스명</span>
                              <span>참가자 닉네임</span>
                            </div>
                            <div className="flex items-center justify-center h-32 text-slate-300 italic text-sm">
                              Now Loading...
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "detail" && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-bold text-slate-800">ㄴ. 부스 상세 정보 (추후 공개)</h3>
                          <div className="space-y-4">
                            <p>부스 상세 페이지에는 다음 정보가 공개됩니다.</p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-slate-500">
                              <li>서클컷 (4cm × 3cm)</li>
                              <li>부스명</li>
                              <li>캐릭터와 cp 해시태그 (검색 가능)</li>
                              <li>참가자 닉네임</li>
                              <li>부스 소개</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {activeTab === "map" && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-bold text-slate-800">ㄷ. 부스 배치도</h3>
                          <div className="w-full aspect-video wireframe-box bg-slate-50/50">
                            <span className="text-sm italic text-slate-300">행사장 부스 배치도는 행사 일정에 맞추어 추후 공개됩니다.</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
