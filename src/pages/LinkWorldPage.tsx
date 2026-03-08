import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LinkWorldPage() {
  const { tabId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabId !== "01") {
      navigate("/links/01", { replace: true });
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
          <h2 className="text-xl md:text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-purple">Link World</h2>
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
                    <div className="space-y-8 md:space-y-12 font-sans text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base">
                      <section className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800">External Links</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          <a href="#" className="flex items-center justify-between p-4 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
                            <span className="text-sm md:text-base">X (공식 계정)</span>
                            <span className="text-[10px] text-accent-purple uppercase tracking-widest">Visit</span>
                          </a>
                          <a href="#" className="flex items-center justify-between p-4 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
                            <span className="text-sm md:text-base">TMM</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Now Loading...</span>
                          </a>
                        </div>
                      </section>

                      <section className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800">Partners</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          <div className="space-y-1 md:space-y-2">
                            <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">협력 출력소</p>
                            <p className="font-bold text-sm md:text-base">아이엔비</p>
                          </div>
                          <div className="space-y-1 md:space-y-2">
                            <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">협력 인쇄소</p>
                            <p className="font-bold text-sm md:text-base">아이코믹스</p>
                          </div>
                        </div>
                      </section>

                      <section className="space-y-4 md:space-y-6 pt-8 md:pt-12 border-t border-slate-50">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800">Banners</h3>
                        <p className="text-[11px] md:text-sm">행사 홍보용 기념 배너를 제공하고 있습니다. 배너는 자유롭게 퍼가셔도 됩니다.</p>
                        <div className="w-full h-24 md:h-32 wireframe-box bg-slate-50/50">
                          <span className="text-[10px] md:text-xs italic text-slate-300">BANNER IMAGE AREA</span>
                        </div>
                      </section>
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
