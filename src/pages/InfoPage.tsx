import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const INFO_MENU = [
  { id: "overview", label: "행사개요" },
  { id: "visitor", label: "참관객 안내" },
  { id: "booth", label: "부스 참가자 안내" },
];

export default function InfoPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="fluid-container h-[100dvh] pt-[12vh] pb-[6vh] flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center flex-1 min-h-0 w-full space-y-[4vh]"
      >
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-4 shrink-0">
          <h2 className="text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-purple">Info</h2>
          
          <div className="flex overflow-x-auto no-scrollbar space-x-1 md:space-x-2 pb-2 md:pb-0 mt-6 md:mt-0 w-full md:w-auto">
            {INFO_MENU.map((item) => (
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
                      {activeTab === "overview" && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-bold text-slate-800">ㄱ. 킹 오브 프리즘 온리전 「몇 번이라도 프리즘!」</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="space-y-2">
                              <p className="text-xs uppercase tracking-widest text-slate-400">개최 일시</p>
                              <p>2026년 7월 4일 (토요일)</p>
                            </section>
                            <section className="space-y-2">
                              <p className="text-xs uppercase tracking-widest text-slate-400">개최 장소</p>
                              <p>서울 <br/><span className="text-xs text-slate-400">※ 행사장 위치는 입장권을 구매한 참관객에게만 공개됩니다.</span></p>
                            </section>
                            <section className="space-y-2">
                              <p className="text-xs uppercase tracking-widest text-slate-400">참관 대상</p>
                              <p>2026년 기준 14세 (중학생) 이상 여성 참관객</p>
                              <p className="text-xs text-slate-400 italic">남성 참관객의 경우, 신원 보증이 가능한 여성 참관객과 동행 시에만 참관이 가능합니다.</p>
                            </section>
                            <section className="space-y-2">
                              <p className="text-xs uppercase tracking-widest text-slate-400">입장권 판매일</p>
                              <p>추후 공개</p>
                            </section>
                          </div>
                          
                          <div className="pt-8 border-t border-slate-50 space-y-4">
                            <p className="text-sm text-slate-400 italic">
                              본 행사는 「킹 오브 프리즘」 공식과 무관한 팬 주최 동인 온리 이벤트입니다.<br/>
                              동인 문화 및 CP 개념에 익숙하지 않은 분들의 참관은 권장하지 않습니다.
                            </p>
                            <p className="text-sm">
                              문의: <a href="mailto:prismonlyevent@gmail.com" className="text-accent-purple underline">prismonlyevent@gmail.com</a>
                            </p>
                          </div>
                        </div>
                      )}

                      {activeTab === "visitor" && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-bold text-slate-800">ㄴ. 참관객 안내사항</h3>
                          <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>행사장 내 노출 행위 및 옷 벗기 금지</li>
                            <li>배틀, 프리즘 러쉬 및 프리즘쇼 금지</li>
                            <li>장내 코스프레는 기준에 따라 제한됩니다</li>
                            <li>행사장 위치 외부 공개 금지</li>
                            <li>성인본 대리 구매 금지</li>
                            <li>행사장 내 고성방가 금지</li>
                            <li>행사 시작 전 조기 대기 및 줄서기 금지</li>
                          </ul>
                          
                          <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                            <h4 className="font-bold text-slate-700">코스프레 규정</h4>
                            <p className="text-sm">
                              일반 참관객 및 부스 참관객의 코스프레 의상 착용이 가능합니다. <br/>
                              다만, 노출이 있는 선정적인 의상이나, 통행에 방해가 될 수 있는 부피가 큰 의상, 공식에 없는 코스튬은 불가능합니다.
                            </p>
                            <p className="text-xs text-slate-400 italic">
                              ※ 화장실에서 의상을 착용하거나 장시간 메이크업을 하는 행위를 금지합니다.
                            </p>
                          </div>
                        </div>
                      )}

                      {activeTab === "booth" && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-bold text-slate-800">ㄷ. 부스 참가자 안내 사항</h3>
                          <div className="space-y-6">
                            <section className="space-y-4">
                              <h4 className="font-bold text-slate-700">부스 기본 구성</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-slate-100 p-4 rounded">
                                  <p className="font-bold">한 부스</p>
                                  <p className="text-sm text-slate-500">책상 1개, 의자 2개, 입장권 4매(무료2, 유료2)</p>
                                </div>
                                <div className="border border-slate-100 p-4 rounded">
                                  <p className="font-bold">반 부스</p>
                                  <p className="text-sm text-slate-500">책상 절반, 의자 1개, 입장권 2매(무료1, 유료1)</p>
                                </div>
                              </div>
                            </section>
                            
                            <section className="space-y-2 text-sm">
                              <p className="font-bold text-slate-700">부스 운영 규정</p>
                              <ul className="list-disc list-inside space-y-1">
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
      </motion.div>
    </div>
  );
}
