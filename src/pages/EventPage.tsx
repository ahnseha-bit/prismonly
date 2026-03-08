import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EventPage() {
  const { tabId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabId !== "01") {
      navigate("/event/01", { replace: true });
    }
  }, [tabId, navigate]);
  return (
    <div className="fluid-container h-[100dvh] pt-[12vh] pb-[6vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center flex-1 min-h-0 w-full space-y-[4vh]"
      >
        {/* Header */}
        <div className="w-full px-4 md:px-0 max-w-2xl flex flex-col items-center space-y-4 shrink-0">
          <h2 className="text-xl md:text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-purple">Event</h2>
        </div>

        {/* 전체 길이를 줄여서 애매한 스크롤 방지 (h-[65vh] md:h-[70vh]) */}
        <div className="w-full max-w-3xl shadow-frame h-[65vh] md:h-[70vh] flex flex-col mt-4 md:mt-8">
          <div className="outer-holo-line flex flex-col h-full">
            <div className="p-[2px] bg-white flex flex-col w-full h-full">
              <div className="inner-holo-line flex flex-col h-full">
                
                {/* 내부 스크롤 적용 */}
                <div className="main-board h-full flex flex-col p-5 md:p-8">
                  
                  {/* 🌟 콘텐츠 영역 (여기에만 내부 스크롤이 생김) */}
                  <div className="w-full text-left flex-1 overflow-y-auto pr-2">
                    <div className="space-y-6 md:space-y-8 font-sans text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800">Event Guidance</h3>
                      <p>행사 당일 진행될 이벤트 안내 페이지입니다.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {[
                          "책 구매 권수로 스티커 증정 이벤트",
                          "트레이딩 카드",
                          "빙고 / 가위바위보 / OX 퀴즈",
                          "응원 상영"
                        ].map((event, i) => (
                          <div key={i} className="p-5 md:p-6 border border-slate-100 rounded-lg hover:border-accent-purple/30 transition-colors group">
                            <p className="text-[10px] md:text-xs text-slate-300 mb-2 uppercase tracking-widest">Event {i + 1}</p>
                            <p className="font-bold text-sm md:text-base text-slate-700 group-hover:text-accent-purple transition-colors">{event}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 md:pt-8 border-t border-slate-50 text-center">
                        <p className="text-[11px] md:text-sm text-slate-400 italic">※ 자세한 내용은 추후 공개됩니다.</p>
                      </div>
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
