import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const INFO_MENU = [
  { id: "01", label: "행사개요" },
  { id: "02", label: "참관객 안내" },
  { id: "03", label: "부스 참가자 안내" },
];

const HoloBox = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">
    <div className="main-board text-left font-sans text-slate-600 leading-[1.8] md:leading-[2.1]">
      {children}
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
                  <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 shrink-0 tracking-[-0.03em]">
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
                    <div className="space-y-6 md:space-y-8">
                      <h3 className="body-lg font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-accent-gold">✧</span> 킹 오브 프리즘 온리전 「몇 번이라도 프리즘!」
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <section className="content-section">
                          <p className="body-sm font-bold text-accent-gold">개최 일시</p>
                          <p className="body-lg text-slate-800">2026년 7월 4일 (토요일)</p>
                        </section>
                        <section className="content-section">
                          <p className="body-sm font-bold text-accent-gold">개최 장소</p>
                          <p className="body-lg text-slate-800">서울 <br /><span className="body-sm font-normal">※ 행사장 위치는 입장권을 구매한 참관객에게만 공개됩니다.</span></p>
                        </section>
                        <section className="content-section">
                          <p className="body-sm font-bold text-accent-gold">참관 대상</p>
                          <p className="body-lg text-slate-800">2026년 기준 14세 (중학생) 이상 여성 참관객</p>
                          <p className="body-sm italic mt-1 text-slate-500">남성 참관객의 경우, 팬임을 증명할 수 있는 여성 참관객과 동행 시에만 참관이 가능합니다.</p>
                        </section>
                        <section className="content-section">
                          <p className="body-sm font-bold text-accent-gold">입장권 판매일</p>
                          <p className="body-lg text-slate-800">추후 공개</p>
                        </section>
                        <section className="content-section md:col-span-2 pt-2">
                          <p className="body-sm font-bold text-accent-gold">입장권 구성</p>
                          <p className="body-lg text-slate-800">행사 안내 및 이벤트 참가용 공식 팜플렛 + 전프레 <span className="body-sm font-normal">(행사 전원 증정 기념품)</span></p>
                        </section>
                      </div>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="content-section">
                      <section className="space-y-3">
                        <h4 className="body-lg font-bold text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> 온리전이란?
                        </h4>
                        <div className="pl-4 border-l-2 border-accent-gold/30 space-y-4">
                          <p className="body-md text-slate-700">
                            온리전은 한 가지 작품의 팬들이 모여 해당 작품의 만화, 소설, 일러스트, 굿즈 등을 나누며 즐기는 팬 행사입니다. 참가자는 팬의 마음으로 창작물을 제작, 판매하는 <strong className="font-semibold text-slate-800">'부스 참가자'</strong>, 그리고 그 창작물을 구매하고 응원하는 <strong className="font-semibold text-slate-800">'일반 참가자'</strong>로 나뉩니다.
                          </p>
                          <p className="body-sm italic">
                            ※ 본 온리전은 「킹 오브 프리즘」 비공식 팬 이벤트입니다.<br />
                            '동인'이나 'CP' 등의 개념을 잘 모르신다면 참여를 권장하지 않습니다.
                          </p>
                        </div>
                      </section>

                      <section className="space-y-3 pt-2">
                        <h4 className="body-lg font-bold text-slate-700 flex items-start gap-2 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0"></span> 킹 오브 프리즘이 아닌 다른 시리즈 캐릭터 또한 다뤄지나요?
                        </h4>
                        <div className="pl-4 border-l-2 border-accent-gold/30 space-y-2">
                          <p className="body-md text-slate-700">
                            가능합니다. 단, <strong className="font-semibold text-slate-800">프리티 리듬 레인보우 라이브</strong> 캐릭터에 한합니다.
                          </p>
                          <p className="body-sm">
                            그 외의 시리즈 캐릭터 단독으로는 부스 참가가 불가능하며, 킹 오브 프리즘과 레인보우 라이브 캐릭터가 메인인 작품에 조연으로 등장하는 형태만 허용됩니다.
                            <span className="text-accent-gold font-bold ml-2">※ 성인본 불가</span>
                          </p>
                        </div>
                      </section>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="content-section">
                      <p className="body-sm">
                        행사 관련 최신 정보는 <a href="#" className="text-accent-gold font-bold hover:underline">X(구 Twitter) 공식 계정</a>을 통해 가장 빠르게 확인하실 수 있습니다.
                      </p>
                      <p className="body-sm">
                        모든 문의는 아래 메일로 부탁드립니다.<br />
                        <a href="mailto:prismonlyevent@gmail.com" className="body-lg text-accent-gold font-bold hover:underline mt-1 inline-block tracking-wider">prismonlyevent@gmail.com</a>
                      </p>
                    </div>
                  </HoloBox>
                </>
              )}

              {activeTab === "02" && (
                <>
                  <HoloBox>
                    <div className="space-y-6 md:space-y-8">
                      <h3 className="body-lg font-happy font-bold text-slate-800 flex items-center gap-2 tracking-[-0.03em]">
                        <span className="text-accent-gold">✧</span> Visitor Info
                      </h3>
                      <div className="content-section">
                        <ul className="space-y-3 body-md text-slate-700">
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>
                              <strong className="font-bold text-slate-800">행사 당일 신분증을 확인합니다.</strong> 티켓 구매자명과 신분증의 이름이 다를 경우 입장이 불가능합니다. 꼭 인정되는 신분증을 확인하여 지참해주시기 바랍니다.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>행사장 위치는 오직 티켓을 구입한 참가자에게만 공개됩니다. <strong className="text-slate-800">외부에 행사장 위치를 발설하지 말아주세요.</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>통행을 방해할 수 있는 <strong className="text-slate-800">배틀, 프리즘 러쉬 및 프리즘 쇼</strong>는 금지입니다.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>행사장 내 코스프레는 하단에 쓰여진 규칙을 따라주세요.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>미성년자의 <strong className="text-slate-800">성인본 대리 구매</strong>를 엄격히 금지합니다.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>행사장 내에서 <strong className="text-slate-800">성인본을 개봉할 수 없습니다.</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>행사장 내에서 고성방가 및 불쾌감을 조성하는 행위를 금지합니다.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-gold shrink-0 mt-0.5">✧</span>
                            <span>행사 시작 전 <strong className="text-slate-800">조기 대기 및 줄서기</strong>를 금지합니다.</span>
                          </li>
                        </ul>
                        <p className="body-sm italic pl-6 mt-4">
                          ※ 안내사항은 추후 업데이트 될 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="content-section">
                      <h4 className="body-lg font-bold text-slate-800 flex items-center gap-2 pb-2 border-b border-transparent">
                        <span className="text-accent-gold text-base">💡</span> 현금 결제 수단 준비 권장
                      </h4>
                      <p className="body-md text-slate-700">
                        행사장 내 통행 정체현상(줄, 대기) 완화를 위해 참관객과 부스 참관객 모두
                        <strong className="text-accent-gold font-bold"> 현금 결제 수단(천원권, 오천원권)</strong>을 준비해 주시기를 권장드립니다.
                      </p>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="content-section">
                      <h4 className="body-lg font-bold text-slate-800 flex items-center gap-2 pb-2 border-b border-transparent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> 코스프레 규정
                      </h4>
                      <p className="body-md text-slate-700">
                        일반 참관객 및 부스 참관객의 코스프레 의상 착용이 가능합니다. <br className="hidden md:block" />
                        다만, <strong className="text-rose-400 font-medium">노출이 있는 선정적인 의상</strong>이나, <strong className="text-rose-400 font-medium">통행에 방해가 될 수 있는 부피가 큰 의상</strong>, <strong className="text-rose-400 font-medium">공식에 없는 코스튬</strong>은 불가능합니다.
                      </p>
                      <div className="body-sm mt-2">
                        <span className="text-rose-400 font-bold mr-1">※ 주의:</span> 화장실에서 의상을 착용하거나 장시간 메이크업을 하는 행위를 엄격히 금지합니다.
                      </div>
                    </div>
                  </HoloBox>
                </>
              )}

              {activeTab === "03" && (
                <HoloBox>
                  <div className="space-y-6 md:space-y-8">
                    <h3 className="body-lg font-happy font-bold text-slate-800 tracking-[-0.03em]">Booth Participant Info</h3>
                    <div className="content-section">
                      <section className="space-y-3">
                        <h4 className="body-md font-bold text-slate-700">부스 기본 구성</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          <div className="p-2">
                            <p className="body-md font-bold text-slate-800">한 부스</p>
                            <p className="body-sm mt-1">책상 1개, 의자 2개, 입장권 4매(무료2, 유료2)</p>
                          </div>
                          <div className="p-2">
                            <p className="body-md font-bold text-slate-800">반 부스</p>
                            <p className="body-sm mt-1">책상 절반, 의자 1개, 입장권 2매(무료1, 유료1)</p>
                          </div>
                        </div>
                      </section>
                      <section className="space-y-2">
                        <p className="body-lg font-bold text-slate-700">부스 운영 규정</p>
                        <ul className="list-disc list-inside space-y-1 body-md text-slate-600">
                          <li>부스 선입장 시간에는 판매 및 구매가 불가능합니다</li>
                          <li>책상 위 45cm를 넘는 큰 구조물 설치 금지</li>
                          <li>책상 범위를 벗어나는 별도의 판넬 / 장식 설치 금지</li>
                          <li>선정적인 홍보물 게시 금지</li>
                          <li>성인본 판매 시 신분증 확인 의무는 전적으로 부스 참가자에게 있습니다</li>
                        </ul>
                      </section>
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