import { motion } from "motion/react";

export default function EventPage() {
  return (
    <div className="fluid-container py-[15vh] relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center space-y-[8vh]"
      >
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-4">
          <h2 className="text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-purple">Event</h2>
        </div>

        {/* Content Area */}
        <div className="w-full shadow-frame">
          <div className="outer-holo-line">
            <div className="p-[2px] bg-white">
              <div className="inner-holo-line">
                <div className="main-board text-left min-h-[60vh]">
                  <div className="space-y-8 font-sans text-slate-600 leading-[2.1]">
                    <h3 className="text-xl font-bold text-slate-800">Event Guidance</h3>
                    <p>행사 당일 진행될 이벤트 안내 페이지입니다.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "책 구매 권수로 스티커 증정 이벤트",
                        "트레이딩 카드",
                        "빙고 / 가위바위보 / OX 퀴즈",
                        "응원 상영"
                      ].map((event, i) => (
                        <div key={i} className="p-6 border border-slate-100 rounded-lg hover:border-accent-purple/30 transition-colors group">
                          <p className="text-xs text-slate-300 mb-2 uppercase tracking-widest">Event {i + 1}</p>
                          <p className="font-bold text-slate-700 group-hover:text-accent-purple transition-colors">{event}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-slate-50 text-center">
                      <p className="text-sm text-slate-400 italic">※ 자세한 내용은 추후 공개됩니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
