import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const INFO_MENU = [
  { id: "01", label: "행사개요" },
  { id: "02", label: "참관객 안내" },
  { id: "03", label: "부스 참가자 안내" },
];

export default function InfoPage() {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const activeTab = tabId || "01";

  // Check if tabId is valid, if not redirect to 01
  useEffect(() => {
    if (!INFO_MENU.find((item) => item.id === tabId)) {
      navigate("/info/01", { replace: true });
    }
  }, [tabId, navigate]);

  return (
    <div className="fluid-container pt-[10vh] md:pt-[12vh] pb-[6vh] min-h-screen flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full"
      >
        {/* Header Box (Title & Tabs) */}
        <div className="w-full max-w-3xl shadow-frame flex flex-col mt-4 md:mt-8 shrink-0">
          <div className="outer-holo-line flex flex-col">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line flex flex-col">
                <div className="main-board flex flex-col p-4 md:p-6">
                  
                  <div className="w-full flex flex-col md:flex-row md:items-center justify-between shrink-0">
                    <h2 className="text-xl md:text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-gold mb-4 md:mb-0">
                      Info
                    </h2>

                    <div className="flex overflow-x-auto no-scrollbar space-x-1 md:space-x-2 w-full md:w-auto pb-2 md:pb-0">
                      {INFO_MENU.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => navigate(`/info/${item.id}`)}
                          className={`flex-shrink-0 px-3 md:px-5 py-1.5 md:py-2 rounded-[4px] text-[10px] md:text-[11px] tracking-wider md:tracking-widest transition-colors font-sans ${activeTab === item.id
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
        </div>

        {/* Content Box */}
        <div className="w-full max-w-3xl shadow-frame flex flex-col mt-6 md:mt-8">
          <div className="outer-holo-line flex flex-col">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line flex flex-col">
                <div className="main-board p-5 md:p-8">
                  
                  <div className="w-full text-left">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="font-sans text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base"
                      >
                        {activeTab === "01" && (
                          <div className="space-y-6 md:space-y-8">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">ㄱ. 킹 오브 프리즘 온리전 「몇 번이라도 프리즘!」</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                              <section className="space-y-2">
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400">개최 일시</p>
                                <p>2026년 7월 4일 (토요일)</p>
                              </section>
                              <section className="space-y-2">
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400">개최 장소</p>
                                <p>서울 <br /><span className="text-xs text-slate-400">※ 행사장 위치는 입장권을 구매한 참관객에게만 공개됩니다.</span></p>
                              </section>
                              <section className="space-y-2">
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400">참관 대상</p>
                                <p>2026년 기준 14세 (중학생) 이상 여성 참관객</p>
                                <p className="text-[10px] md:text-xs text-slate-400 italic mt-1">남성 참관객의 경우, 신원 보증이 가능한 여성 참관객과 동행 시에만 참관이 가능합니다.</p>
                              </section>
                              <section className="space-y-2">
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400">입장권 판매일</p>
                                <p>추후 공개</p>
                              </section>
                            </div>

                            <div className="pt-2 space-y-4">
                              <p className="text-[11px] md:text-sm text-slate-400 italic">
                                본 행사는 「킹 오브 프리즘」 공식과 무관한 팬 주최 동인 온리 이벤트입니다.<br />
                                동인 문화 및 CP 개념에 익숙하지 않은 분들의 참관은 권장하지 않습니다.
                              </p>
                              <p className="text-[11px] md:text-sm">
                                문의: <a href="mailto:prismonlyevent@gmail.com" className="text-accent-gold underline">prismonlyevent@gmail.com</a>
                              </p>
                            </div>
                          </div>
                        )}

                        {activeTab === "02" && (
                          <div className="space-y-6 md:space-y-8">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">ㄴ. 참관객 안내사항</h3>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                              <li>행사장 내 노출 행위 및 옷 벗기 금지</li>
                              <li>배틀, 프리즘 러쉬 및 프리즘쇼 금지</li>
                              <li>장내 코스프레는 기준에 따라 제한됩니다</li>
                              <li>행사장 위치 외부 공개 금지</li>
                              <li>성인본 대리 구매 금지</li>
                              <li>행사장 내 고성방가 금지</li>
                              <li>행사 시작 전 조기 대기 및 줄서기 금지</li>
                            </ul>

                            <div className="bg-slate-50 p-5 md:p-6 rounded-lg space-y-3">
                              <h4 className="font-bold text-slate-700">코스프레 규정</h4>
                              <p className="text-[13px] md:text-sm">
                                일반 참관객 및 부스 참관객의 코스프레 의상 착용이 가능합니다. <br />
                                다만, 노출이 있는 선정적인 의상이나, 통행에 방해가 될 수 있는 부피가 큰 의상, 공식에 없는 코스튬은 불가능합니다.
                              </p>
                              <p className="text-[11px] md:text-xs text-slate-400 italic">
                                ※ 화장실에서 의상을 착용하거나 장시간 메이크업을 하는 행위를 금지합니다.
                              </p>
                            </div>
                          </div>
                        )}

                        {activeTab === "03" && (
                          <div className="space-y-6 md:space-y-8">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">ㄷ. 부스 참가자 안내 사항</h3>
                            <div className="space-y-6">
                              <section className="space-y-3">
                                <h4 className="font-bold text-slate-700">부스 기본 구성</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                  <div className="bg-slate-50 p-4 rounded">
                                    <p className="font-bold text-sm md:text-base">한 부스</p>
                                    <p className="text-xs md:text-sm text-slate-500 mt-1">책상 1개, 의자 2개, 입장권 4매(무료2, 유료2)</p>
                                  </div>
                                  <div className="bg-slate-50 p-4 rounded">
                                    <p className="font-bold text-sm md:text-base">반 부스</p>
                                    <p className="text-xs md:text-sm text-slate-500 mt-1">책상 절반, 의자 1개, 입장권 2매(무료1, 유료1)</p>
                                  </div>
                                </div>
                              </section>

                              <section className="space-y-2 text-[13px] md:text-sm">
                                <p className="font-bold text-slate-700">부스 운영 규정</p>
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                  <li>부스 선입장 시간에는 판매 및 구매가 불가능합니다</li>
                                  <li>책상 위 45cm를 넘는 큰 구조물 설치 금지</li>
                                  <li>책상 범위를 벗어나는 별도의 판넬 / 장식 설치 금지</li>
                                  <li>선정적인 홍보물 게시 금지</li>
                                </ul>
                              </section>
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
        </div>
      </motion.div>
    </div>
  );
}