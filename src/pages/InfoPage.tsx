import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const INFO_MENU = [
  { id: "01", label: "행사개요" },
  { id: "02", label: "참관객 안내" },
  { id: "03", label: "부스 참가자 안내" },
];

// 🌟 반복되는 홀로그램 박스를 쉽게 재사용하기 위한 헬퍼 컴포넌트!
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
        {/* --- 1. 상단 타이틀 & 메뉴 박스 (Gold 테두리) --- */}
        <div className="w-full max-w-3xl shadow-frame">
          <div className="outer-gold-line">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-gold-line">
                <div className="bg-white p-4 md:px-8 md:py-5 w-full flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl tracking-[0.3em] uppercase font-metal italic text-accent-gold m-0 shrink-0">
                    Info
                  </h2>
                  <div className="flex overflow-x-auto no-scrollbar space-x-1 md:space-x-2 ml-4">
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

        {/* --- 2. 하위 콘텐츠 영역 (이 안에 여러 개의 HoloBox가 들어갈 수 있습니다) --- */}
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

              {/* ===== 탭 01. 행사 개요 ===== */}
              {activeTab === "01" && (
                <HoloBox>
                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-accent-gold">✧</span> 킹 오브 프리즘 온리전 「몇 번이라도 프리즘!」
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-slate-50 p-6 md:p-8 rounded-lg">
                      <section className="space-y-2">
                        <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">개최 일시</p>
                        <p className="font-medium">2026년 7월 4일 (토요일)</p>
                      </section>
                      <section className="space-y-2">
                        <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">개최 장소</p>
                        <p className="font-medium">서울 <br /><span className="text-xs text-slate-400 font-normal">※ 행사장 위치는 입장권을 구매한 참관객에게만 공개됩니다.</span></p>
                      </section>
                      <section className="space-y-2">
                        <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">참관 대상</p>
                        <p className="font-medium">2026년 기준 14세 (중학생) 이상 여성 참관객</p>
                        <p className="text-[11px] md:text-xs text-slate-500 italic mt-1 leading-relaxed">남성 참관객의 경우, 팬임을 증명할 수 있는 여성 참관객과 동행 시에만 참관이 가능합니다.</p>
                      </section>
                      <section className="space-y-2">
                        <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">입장권 판매일</p>
                        <p className="font-medium">추후 공개</p>
                      </section>
                      <section className="space-y-2 md:col-span-2 border-t border-slate-200/60 pt-5 mt-2">
                        <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent-gold font-bold">입장권 구성</p>
                        <p className="font-medium">행사 안내 및 이벤트 참가용 공식 팜플렛 + 전프레 <span className="text-xs text-slate-400 font-normal">(행사 전원 증정 기념품)</span></p>
                      </section>
                    </div>

                    <div className="space-y-8 pl-1 md:pl-2">
                      <section className="space-y-3">
                        <h4 className="font-bold text-slate-700 text-base md:text-lg flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> 온리전이란?
                        </h4>
                        <div className="pl-4 border-l-2 border-accent-gold/30 space-y-4">
                          <p className="text-sm md:text-base">
                            온리전은 한 가지 작품의 팬들이 모여 해당 작품의 만화, 소설, 일러스트, 굿즈 등을 나누며 즐기는 팬 행사입니다. 참가자는 팬의 마음으로 창작물을 제작, 판매하는 <strong className="text-slate-700 font-semibold">'부스 참가자'</strong>, 그리고 그 창작물을 구매하고 응원하는 <strong className="text-slate-700 font-semibold">'일반 참가자'</strong>로 나뉩니다.
                          </p>
                          <p className="text-[11px] md:text-sm text-slate-500 bg-slate-50 p-3 md:p-4 rounded italic inline-block">
                            ※ 본 온리전은 「킹 오브 프리즘」 비공식 팬 이벤트입니다.<br />
                            '동인'이나 'CP' 등의 개념을 잘 모르신다면 참여를 권장하지 않습니다.
                          </p>
                        </div>
                      </section>

                      <section className="space-y-3 pt-2">
                        <h4 className="font-bold text-slate-700 text-base md:text-lg flex items-start gap-2 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0"></span> 킹 오브 프리즘이 아닌 다른 시리즈 캐릭터 또한 다뤄지나요?
                        </h4>
                        <div className="pl-4 border-l-2 border-accent-gold/30 space-y-2">
                          <p className="text-sm md:text-base">
                            가능합니다. 단, <strong className="text-slate-700 font-semibold">프리티 리듬 레인보우 라이브</strong> 캐릭터에 한합니다.
                          </p>
                          <p className="text-sm md:text-base text-slate-500">
                            그 외의 시리즈 캐릭터 단독으로는 부스 참가가 불가능하며, 킹 오브 프리즘과 레인보우 라이브 캐릭터가 메인인 작품에 조연으로 등장하는 형태만 허용됩니다.
                            <span className="text-accent-gold font-bold ml-2 text-xs">※ 성인본 불가</span>
                          </p>
                        </div>