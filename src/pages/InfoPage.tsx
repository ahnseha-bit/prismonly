import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";

const INFO_MENU = [
  { id: "01", label: "행사개요" },
  { id: "02", label: "참관객 안내" },
  { id: "03", label: "부스 참가자 안내" },
];

const HoloBox = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full shadow-frame">
    <div className="outer-holo-line">
      <div className="p-[2px] bg-white flex flex-col w-full">
        <div className="inner-holo-line">
          <div className="main-board text-left font-sans text-slate-600 leading-[1.8] md:leading-[2.1] text-sm md:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
                <div className="bg-white p-4 md:px-8 md:py-5 w-full flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 shrink-0 tracking-tight">
                    Info
                  </h2>
                  <div className="flex overflow-x-auto no-scrollbar space-x-1 md:space-x-2 ml-4">
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
                <>
                  <HoloBox>
                    <div className="space-y-6 md:space-y-8 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center justify-center md:justify-start gap-2">
                        <span className="text-accent-gold">✧</span> 킹 오브 프리즘 온리전 「몇 번이라도 프리즘!」
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-slate-50 p-6 md:p-8 rounded-lg">
                        <section className="space-y-2 text-center md:text-left">
                          <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">개최 일시</p>
                          <p className="font-medium">2026년 7월 4일 (토요일)</p>
                        </section>
                        <section className="space-y-2 text-center md:text-left">
                          <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">개최 장소</p>
                          <p className="font-medium">서울 <br /><span className="text-xs text-slate-400 font-normal">※ 행사장 위치는 입장권을 구매한 참관객에게만 공개됩니다.</span></p>
                        </section>
                        <section className="space-y-2 text-center md:text-left">
                          <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">참관 대상</p>
                          <p className="font-medium">2026년 기준 14세 (중학생) 이상 여성 참관객</p>
                          <p className="text-[11px] md:text-xs text-slate-500 italic mt-1 leading-relaxed">남성 참관객의 경우, 팬임을 증명할 수 있는 여성 참관객과 동행 시에만 참관이 가능합니다.</p>
                        </section>
                        <section className="space-y-2 text-center md:text-left">
                          <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">입장권 판매일</p>
                          <p className="font-medium">추후 공개</p>
                        </section>
                        <section className="space-y-2 md:col-span-2 border-t border-slate-200/60 pt-5 mt-2 text-center md:text-left">
                          <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">입장권 구성</p>
                          <p className="font-medium">행사 안내 및 이벤트 참가용 공식 팜플렛 + 전프레 <span className="text-xs text-slate-400 font-normal">(행사 전원 증정 기념품)</span></p>
                        </section>
                      </div>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="space-y-6 md:space-y-8">
                      <section className="space-y-3">
                        <h4 className="font-bold text-slate-700 text-base md:text-lg flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> 온리전이란?
                        </h4>
                        <div className="pl-4 border-l-2 border-accent-gold/30 space-y-4">
                          <p className="text-sm md:text-base">온리전은 한 가지 작품의 팬들이 모여 해당 작품의 만화, 소설, 일러스트, 굿즈 등을 나누며 즐기는 팬 행사입니다. 참가자는 팬의 마음으로 창작물을 제작, 판매하는 '부스 참가자', 그리고 그 창작물을 구매하고 응원하는 '일반 참가자'로 나뉩니다.</p>
                          <p className="text-[11px] md:text-sm text-slate-500 bg-slate-50 p-3 md:p-4 rounded italic inline-block">※ 본 온리전은 「킹 오브 프리즘」 비공식 팬 이벤트입니다.<br />'동인'이나 'CP' 등의 개념을 잘 모르신다면 참여를 권장하지 않습니다.</p>
                        </div>
                      </section>
                      <section className="space-y-3 pt-2">
                        <h4 className="font-bold text-slate-700 text-base md:text-lg flex items-start gap-2 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0"></span> 킹 오브 프리즘이 아닌 다른 시리즈 캐릭터 또한 다뤄지나요?
                        </h4>
                        <div className="pl-4 border-l-2 border-accent-gold/30 space-y-2">
                          <p className="text-sm md:text-base">가능합니다. 단, 프리티 리듬 레인보우 라이브 캐릭터에 한합니다.</p>
                          <p className="text-sm md:text-base text-slate-500">그 외의 시리즈 캐릭터 단독으로는 부스 참가가 불가능하며, 킹 오브 프리즘과 레인보우 라이브 캐릭터가 메인인 작품에 조연으로 등장하는 형태만 허용됩니다. <span className="text-accent-gold font-bold ml-2 text-xs">※ 성인본 불가</span></p>
                        </div>
                      </section>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="bg-gradient-to-r from-slate-50 to-transparent p-4 md:p-6 rounded-lg space-y-3 text-sm md:text-base text-center md:text-left">
                      <p className="text-slate-600">행사 관련 최신 정보는 <a href="#" className="text-accent-gold font-bold hover:underline">X(구 Twitter) 공식 계정</a>을 통해 가장 빠르게 확인하실 수 있습니다.</p>
                      <p className="text-slate-600">모든 문의는 아래 메일로 부탁드립니다.<br /><a href="mailto:prismonlyevent@gmail.com" className="text-accent-gold font-bold hover:underline text-base md:text-lg mt-1 inline-block tracking-wider">prismonlyevent@gmail.com</a></p>
                    </div>
                  </HoloBox>
                </>
              )}

              {activeTab === "02" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <HoloBox>
                    <div className="space-y-6">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-accent-gold">✧</span> Visitor Info
                      </h3>
                      <ul className="space-y-4 text-sm md:text-base text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-gold shrink-0 mt-1">✧</span>
                          <span><strong className="font-bold text-slate-800">실물 신분증 확인 필수:</strong> 티켓 구매자명과 신분증 이름이 다를 경우 입장이 불가능합니다. (캡처본, 사진 불가)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-gold shrink-0 mt-1">✧</span>
                          <span><strong className="text-slate-800">행사장 위치 기밀 유지:</strong> 위치 정보는 참가자에게만 공개되며, SNS 등 외부에 발설 시 불이익이 있을 수 있습니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-gold shrink-0 mt-1">✧</span>
                          <span>장내 <strong className="text-slate-800">배틀, 프리즘 러쉬, 프리즘 쇼</strong> 등 통행에 방해되는 모든 행위는 엄격히 금지됩니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-gold shrink-0 mt-1">✧</span>
                          <span><strong className="text-slate-800">성인본 대리 구매 금지:</strong> 미성년자를 위한 성인본 구매 대행 적발 시 즉시 퇴장 조치됩니다.</span>
                        </li>
                      </ul>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
                        <span className="text-accent-gold">✧</span> Prohibited Actions
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] md:text-sm text-slate-600 bg-slate-50 p-4 rounded-md">
                        <p>• 행사장 내 노출 및 탈의 행위</p>
                        <p>• 고성방가 및 타 참관객 위협 행위</p>
                        <p>• 행사 전날 혹은 당일 새벽 조기 대기</p>
                        <p>• 성인본의 장내 개봉 및 열람</p>
                        <p>• 행사장 내 모든 종류의 음식물 취식</p>
                        <p>• 허가되지 않은 상업적 촬영</p>
                      </div>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="space-y-4 text-sm md:text-base text-slate-700">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-accent-gold">💡</span> Cash & Payment
                      </h4>
                      <p>원활한 현장 결제를 위해 <strong className="text-accent-gold font-bold">현금(천원권, 오천원권) 지참</strong>을 강력히 권장합니다. 현장 네트워크 불안정으로 계좌이체가 원활하지 않을 수 있습니다.</p>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> Cosplay Rules
                      </h4>
                      <ul className="space-y-2 text-sm md:text-base text-slate-700 leading-relaxed">
                        <li>• 과도한 노출, 혐오감을 주는 의상, 부피가 큰 소품 금지</li>
                        <li>• 공식 설정에 기반하지 않은 무분별한 어레인지 의상 불가</li>
                        <li>• <strong className="text-slate-800 text-sm">화장실 내 환복 및 장시간 메이크업 절대 금지 (적발 시 즉시 퇴장)</strong></li>
                      </ul>
                    </div>
                  </HoloBox>
                </motion.div>
              )}

              {active_tab === "03" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <HoloBox>
                    <div className="space-y-6">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800">Booth Participant Info</h3>
                      <section className="space-y-4">
                        <h4 className="font-bold text-accent-gold border-b border-accent-gold/20 pb-1">부스 기본 사양</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 border border-slate-100 rounded">
                            <p className="font-bold">한 부스 (Full)</p>
                            <p className="text-sm text-slate-500">가로 180cm 책상 1개, 의자 2개, 입장권 4매</p>
                          </div>
                          <div className="p-4 border border-slate-100 rounded">
                            <p className="font-bold">반 부스 (Half)</p>
                            <p className="text-sm text-slate-500">가로 90cm 책상 공간, 의자 1개, 입장권 2매</p>
                          </div>
                        </div>
                      </section>
                      <section className="space-y-3">
                        <h4 className="font-bold text-accent-gold border-b border-accent-gold/20 pb-1">운영 및 디스플레이 규정</h4>
                        <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc list-inside marker:text-accent-gold">
                          <li>부스 선입장 시간에는 본인 부스 이외의 판매/구매 활동이 금지됩니다.</li>
                          <li>디스플레이 구조물 높이는 책상 면으로부터 <strong className="text-slate-900">최대 45cm</strong>를 초과할 수 없습니다.</li>
                          <li>배정된 부스 범위를 벗어난 벽면 부착 및 바닥 적재는 불가능합니다.</li>
                          <li>성인본 판매 시 신분증 확인 의무는 전적으로 부스 참가자에게 있습니다.</li>
                        </ul>
                      </section>
                    </div>
                  </HoloBox>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}