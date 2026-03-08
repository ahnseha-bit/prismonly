import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";

const INFO_MENU = [
  { id: "01", label: "행사개요" },
  { id: "02", label: "참관객 안내" },
  { id: "03", label: "부스 참가자 안내" },
];

export default function InfoPage() {
  const { tabId } = useParams();
  const navigate = useNavigate();
  const activeTab = tabId || "01";

  useEffect(() => {
    if (!tabId) {
      navigate("/info/01", { replace: true });
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
        <div className="w-full max-w-3xl shadow-frame">
          <div className="outer-gold-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-gold-line">
                <div className="bg-white p-4 md:px-8 md:py-5 w-full flex flex-row items-center justify-between gap-4">
                  <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 shrink-0 tracking-[-0.03em]">
                    Info
                  </h2>
                  <div className="flex flex-1 justify-end overflow-x-auto no-scrollbar space-x-1 md:space-x-2">
                    {INFO_MENU.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigate(`/info/${item.id}`)}
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

        <div className="w-full max-w-3xl shadow-frame">
          <div className="outer-holo-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line">
                <div className="main-board text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="content-section"
                    >
                      {activeTab === "01" && (
                        <div className="space-y-10">
                          <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 flex items-center gap-2 tracking-[-0.03em]">
                            <span className="text-accent-gold">✧</span> 몇 번이라도 프리즘!
                          </h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 py-2">
                            <section className="space-y-1">
                              <p className="content-label">개최 일시</p>
                              <p className="body-lg">2026년 7월 4일 (토요일)</p>
                            </section>
                            <section className="space-y-1">
                              <p className="content-label">개최 장소</p>
                              <p className="body-lg">서울 <span className="body-sm ml-1">※ 입장권 구매자에게만 공개</span></p>
                            </section>
                            <section className="space-y-1">
                              <p className="content-label">참관 대상</p>
                              <p className="body-md font-medium">2026년 기준 14세 이상 여성 참관객</p>
                              <p className="body-sm italic">남성 참관객은 여성 참관객과 동행 시에만 가능</p>
                            </section>
                            <section className="space-y-1">
                              <p className="content-label">입장권 구성</p>
                              <p className="body-md font-medium">공식 팜플렛 + 전프레 (기념품)</p>
                            </section>
                          </div>

                          <div className="space-y-8">
                            <section className="space-y-3">
                              <h4 className="body-lg font-bold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> 온리전이란?
                              </h4>
                              <div className="pl-4 border-l-2 border-accent-gold/20 space-y-3">
                                <p className="body-md">
                                  한 가지 작품의 팬들이 모여 해당 작품의 만화, 소설, 굿즈 등을 나누며 즐기는 팬 행사입니다.
                                </p>
                                <p className="body-sm italic">
                                  ※ 본 온리전은 「킹 오브 프리즘」 비공식 팬 이벤트입니다.
                                </p>
                              </div>
                            </section>

                            <section className="space-y-3">
                              <h4 className="body-lg font-bold flex items-start gap-2 leading-snug">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0"></span> 타 시리즈 캐릭터 허용 범위
                              </h4>
                              <div className="pl-4 border-l-2 border-accent-gold/20 space-y-2">
                                <p className="body-md">
                                  프리티 리듬 레인보우 라이브 캐릭터에 한해 가능합니다.
                                </p>
                                <p className="body-sm">
                                  그 외 시리즈 캐릭터 단독 참가는 불가능하며, 조연 등장 형태만 허용됩니다.
                                  <span className="text-accent-gold font-bold ml-2">※ 성인본 불가</span>
                                </p>
                              </div>
                            </section>
                          </div>

                          <div className="pt-6 border-t border-slate-100 space-y-2">
                            <p className="body-md">최신 정보는 <a href="#" className="text-accent-gold font-bold hover:underline">X(구 Twitter) 공식 계정</a>에서 확인해 주세요.</p>
                            <p className="body-lg font-bold">prismonlyevent@gmail.com</p>
                          </div>
                        </div>
                      )}

                      {activeTab === "02" && (
                        <div className="space-y-10">
                          <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 flex items-center gap-2 tracking-[-0.03em]">
                            <span className="text-accent-gold">✧</span> Visitor Info
                          </h3>

                          <div className="space-y-6">
                            <section className="space-y-2">
                              <h4 className="body-md font-bold text-slate-700 flex items-center gap-2">
                                <span className="text-accent-gold text-lg">💡</span> 현금 결제 수단 준비 권장
                              </h4>
                              <p className="body-md pl-6">
                                정체 완화를 위해 <strong className="text-accent-gold font-bold">현금 결제 수단(천원권, 오천원권)</strong> 지참을 권장드립니다.
                              </p>
                            </section>

                            <ul className="space-y-4 body-md">
                              <li className="flex gap-2">
                                <span className="text-accent-gold shrink-0 mt-1">✧</span>
                                <span><strong className="text-slate-800">신분증 확인:</strong> 티켓 구매자명과 실물 신분증 이름이 다를 경우 입장이 불가합니다.</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent-gold shrink-0 mt-1">✧</span>
                                <span><strong className="text-slate-800">위치 기밀:</strong> 행사장 위치는 참가자에게만 공개되며 외부 발설을 금지합니다.</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent-gold shrink-0 mt-1">✧</span>
                                <span><strong className="text-slate-800">장내 금지:</strong> 배틀, 프리즘 러쉬 등 통행을 방해하는 행위는 금지됩니다.</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent-gold shrink-0 mt-1">✧</span>
                                <span>성인본 대리 구매 및 장내 개봉을 엄격히 금지합니다.</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent-gold shrink-0 mt-1">✧</span>
                                <span>고성방가 및 조기 대기를 금지합니다.</span>
                              </li>
                            </ul>

                            <section className="pt-6 border-t border-slate-100 space-y-4">
                              <h4 className="body-md font-bold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> 코스프레 규정
                              </h4>
                              <div className="pl-4 space-y-2">
                                <p className="body-md">노출, 부피가 큰 의상, 공식에 없는 코스튬은 불가합니다.</p>
                                <p className="body-sm text-rose-400 font-bold">※ 화장실 내 환복 및 장시간 메이크업을 엄격히 금지합니다.</p>
                              </div>
                            </section>
                          </div>
                        </div>
                      )}

                      {activeTab === "03" && (
                        <div className="space-y-10">
                          <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 tracking-[-0.03em]">
                            Booth Participant Info
                          </h3>
                          <div className="space-y-8">
                            <section className="space-y-4">
                              <p className="content-label">부스 기본 구성</p>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <p className="body-md font-bold">한 부스</p>
                                  <p className="body-sm">책상 1개, 의자 2개, 티켓 4매</p>
                                </div>
                                <div>
                                  <p className="body-md font-bold">반 부스</p>
                                  <p className="body-sm">책상 절반, 의자 1개, 티켓 2매</p>
                                </div>
                              </div>
                            </section>
                            <section className="space-y-3 pt-6 border-t border-slate-100">
                              <p className="content-label">운영 규정</p>
                              <ul className="body-md list-disc list-inside space-y-2">
                                <li>책상 위 45cm 초과 구조물 설치 금지</li>
                                <li>범위를 벗어나는 장식물 설치 및 벽면 부착 금지</li>
                                <li>성인본 판매 시 신분증 확인 의무 준수</li>
                                <li>부스 선입장 시간 내 판매 행위 금지</li>
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
      </motion.div>
    </div>
  );
}