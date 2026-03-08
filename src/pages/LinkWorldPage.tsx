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
    <div className="fluid-container min-h-screen pt-[10vh] md:pt-[12vh] pb-[6vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center flex-1 min-h-0 w-full space-y-[4vh]"
      >
        {/* Header Box */}
        <div className="w-full max-w-3xl shadow-frame flex flex-col mt-4 md:mt-8 shrink-0">
          <div className="outer-gold-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-gold-line">
                <div className="bg-white p-4 md:px-8 md:py-5 w-full flex items-center justify-center md:justify-start">
                  <h2 className="text-xl md:text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-gold inline-block m-0">Link World</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full max-w-3xl shadow-frame flex flex-col mt-6 md:mt-8">
          <div className="outer-holo-line flex flex-col">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line flex flex-col">
                <div className="main-board p-5 md:p-8">
                  
                  <div className="w-full text-left">
                    <div className="space-y-8 md:space-y-12 font-sans text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base">
                      <section className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800">External Links</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          <a href="#" className="flex items-center justify-between p-4 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
                            <span className="text-sm md:text-base">X (공식 계정)</span>
                            <span className="text-[10px] text-accent-gold uppercase tracking-widest">Visit</span>
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
