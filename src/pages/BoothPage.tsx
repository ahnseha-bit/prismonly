import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const BOOTH_MENU = [
  { id: "01", label: "부스 리스트" },
  { id: "02", label: "부스 상세정보" },
  { id: "03", label: "부스 배치도" },
];

const HoloBox = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full shadow-frame">
    <div className="outer-holo-line">
      <div className="p-[2px] bg-white flex flex-col w-full">
        <div className="inner-holo-line">
          <div className="main-board text-left">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function BoothPage() {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const activeTab = tabId || "01";

  useEffect(() => {
    if (!BOOTH_MENU.find((item) => item.id === tabId)) {
      navigate("/booth/01", { replace: true });
    }
  }, [tabId, navigate]);

  return (
    <div className="fluid-container min-h-screen pt-[10vh] md:pt-[12vh] pb-[10vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full space-y-6 md:space-y-8 mt-4 md:mt-8"
      >
        {/* 상단 골드 타이틀 바 */}
        <div className="w-full max-w-3xl shadow-frame">
          <div className="outer-gold-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-gold-line">
                <div className="bg-white p-4 md:px-8 md:py-5 w-full flex flex-row items-center justify-between gap-4">
                  <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 shrink-0 tracking-[-0.03em]">
                    Booth
                  </h2>
                  <div className="flex flex-1 justify-end overflow-x-auto no-scrollbar space-x-1 md:space-x-2">
                    {BOOTH_MENU.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigate(`/booth/${item.id}`)}
                        className={`flex-shrink-0 px-2 py-0.5 md:px-3 md:py-1 rounded-[2px] text-[10px] md:text-[11px] tracking-tight transition-colors font-sans font-bold ${activeTab === item.id
                            ? "bg-accent-gold text-white"
                            : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 본문 콘텐츠 영역 */}
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col space-y-6 md:space-y-8 w-full"
            >
              {activeTab === "01" && (
                <HoloBox>
                  <div className="content-section">
                    <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 tracking-[-0.03em]">
                      Booth List
                    </h3>
                    <div className="py-2">
                      <p className="content-label mb-4">현재 공개 정보</p>
                      <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-2 mb-4 text-xs font-bold text-slate-400">
                        <span>부스명</span>
                        <span>참가자 닉네임</span>
                      </div>
                      <div className="flex items-center justify-center h-32 body-sm italic">
                        Now Loading...
                      </div>
                    </div>
                  </div>
                </HoloBox>
              )}

              {activeTab === "02" && (
                <HoloBox>
                  <div className="content-section">
                    <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 tracking-[-0.03em]">
                      Booth Details <span className="text-sm font-sans font-normal text-slate-400 tracking-normal ml-2">(추후 공개)</span>
                    </h3>
                    <div className="space-y-4 pt-2">
                      <p className="body-md">부스 상세 페이지에는 다음 정보가 공개됩니다.</p>
                      <ul className="body-md list-disc list-inside space-y-2 pl-2">
                        <li>서클컷 (4cm × 3cm)</li>
                        <li>부스명</li>
                        <li>캐릭터와 cp 해시태그 (검색 가능)</li>
                        <li>참가자 닉네임</li>
                        <li>부스 소개</li>
                      </ul>
                    </div>
                  </div>
                </HoloBox>
              )}

              {activeTab === "03" && (
                <HoloBox>
                  <div className="content-section">
                    <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 tracking-[-0.03em]">
                      Booth Layout
                    </h3>
                    <div className="w-full aspect-video wireframe-box bg-slate-50/50 mt-4">
                      <span className="body-sm italic">행사장 부스 배치도는 행사 일정에 맞추어 추후 공개됩니다.</span>
                    </div>
                  </div>
                </HoloBox>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}