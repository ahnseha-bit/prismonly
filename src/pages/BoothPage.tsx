import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import LoadingPage from "../components/LoadingPage";

const BOOTH_MENU = [
  { id: "01", label: "참가자 안내" },
  { id: "02", label: "부스 리스트" },
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
                <>
                  <HoloBox>
                    <div className="content-section">
                      <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 tracking-[-0.03em]">
                        <span className="text-accent-gold mr-2">✧</span> 부스 참가 정보
                      </h3>

                      <div className="bg-slate-50 p-5 md:p-8 rounded-lg space-y-8 mt-4">
                        <section className="space-y-4">
                          <p className="content-label">신청 자격</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="body-md font-bold text-slate-700">일반 부스</p>
                              <p className="body-md">2026년 기준 17세 이상 (10년 이전 출생자)</p>
                            </div>
                            <div className="space-y-1">
                              <p className="body-md font-bold text-slate-700">성인 부스</p>
                              <p className="body-md">2026년 기준 20세 이상 (07년 이전 출생자)</p>
                            </div>
                          </div>
                          <p className="body-sm text-rose-400 font-bold mt-2">※ 현재 부스 신청이 모두 종료되었습니다.</p>
                        </section>

                        <section className="space-y-4">
                          <p className="content-label">기본 구성</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="bg-white p-5 rounded-lg shadow-sm space-y-3">
                              <p className="body-lg text-accent-gold">반 부스 <span className="body-sm text-slate-400 font-normal ml-1">40,000원</span></p>
                              <ul className="body-sm space-y-1.5 text-slate-600">
                                <li>• 무료 입장 1인 / 유료 입장 1인</li>
                                <li>• 테이블 1개 (두 개의 반 부스가 쉐어)</li>
                                <li>• 의자 1개 (합의 후 현장 대여 1개 가능)</li>
                              </ul>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm space-y-3">
                              <p className="body-lg text-accent-gold">한 부스 <span className="body-sm text-slate-400 font-normal ml-1">70,000원</span></p>
                              <ul className="body-sm space-y-1.5 text-slate-600">
                                <li>• 무료 입장 2인 / 유료 입장 2인</li>
                                <li>• 테이블 1개</li>
                                <li>• 의자 1개 (사전 신청 시 1개 추가 가능 / 3,000원)</li>
                              </ul>
                            </div>
                          </div>
                        </section>
                      </div>

                      <section className="space-y-3 pl-2 md:pl-4">
                        <p className="content-label">신청 및 양도 규정</p>
                        <ul className="body-md list-disc list-inside space-y-2">
                          <li>부스 모집은 선착순을 기본으로 진행됩니다. (24시간 내 메일 발송, 미입금 시 자동 취소)</li>
                          <li>단순 변심으로 인한 취소가 불가하며, 지정된 양도 기간 내 양도가 가능합니다. (추후 안내)</li>
                          <li>연락 가능한 트위터 계정 및 메일 주소를 반드시 입력해 주셔야 합니다. (오류 시 누락 가능)</li>
                          <li>한 성인 부스를 여러 명이 이용할 경우, 부스 참가자 전원이 2026년 기준 20세 이상이어야 합니다.</li>
                        </ul>
                      </section>

                      <section className="space-y-3 pl-2 md:pl-4">
                        <p className="content-label">운영 주의사항</p>
                        <ul className="body-md list-disc list-inside space-y-2">
                          <li><strong className="text-slate-700">4p 이상 회지를 필참</strong>하셔야 합니다. (구간 가능)</li>
                          <li>반 부스는 반 부스끼리만 인접 신청이 가능합니다.</li>
                          <li>책상 위 45cm 초과 디스플레이 및 책상 영역을 벗어난 바닥 판넬 설치를 금지합니다.</li>
                          <li>허가받지 않은 타인의 창작물 및 공식 굿즈 판매는 불가합니다.</li>
                          <li>행사장 내 호객 행위, 지나친 소음, 성적인 묘사가 있는 디스플레이를 금지합니다.</li>
                        </ul>
                        <p className="body-sm pt-1">※ 공지사항을 미숙지하여 발생하는 문제는 행사 측에서 책임지지 않습니다.</p>
                      </section>
                    </div>
                  </HoloBox>

                  <HoloBox>
                    <div className="content-section">
                      <h3 className="text-xl md:text-2xl font-happy font-bold text-slate-800 tracking-[-0.03em]">
                        <span className="text-accent-gold mr-2">✧</span> 판매 규정
                      </h3>

                      <div className="bg-slate-50 p-5 md:p-8 rounded-lg space-y-8">
                        <section className="space-y-3">
                          <p className="content-label">성인본 판매 규정</p>
                          <ul className="body-md list-disc list-inside space-y-2">
                            <li>표지에 반드시 <strong className="text-rose-500">'19세 미만 구독 불가'</strong>를 표기해야 합니다.</li>
                            <li>성인본은 밀봉된 상태로 판매되어야 하며, 장내 개봉이 불가합니다.</li>
                            <li>판매 시 신분증과 팔찌를 통해 반드시 구매자의 연령을 확인해 주세요.</li>
                          </ul>
                          <p className="body-sm pt-2">
                            ※ 직접적인 성행위 묘사 외에도 전신 노출이나 잔인한 살해 장면 포함 시 성인물로 분류됩니다.
                          </p>
                        </section>

                        <section className="space-y-4">
                          <p className="content-label">성인지 기준 등급표</p>
                          <p className="body-sm md:body-md mb-2">
                            직접적인 성행위 묘사 외에도 전신 노출이나 잔인한 살해 장면이 나온다면 등급표 기준에 따라 성인물로 분류됩니다.
                          </p>

                          {/* 1. 각 항목별 등급 안내 표 */}
                          <div className="w-full border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                            <table className="w-full text-center border-collapse break-keep">
                              <thead>
                                <tr className="bg-slate-100 body-sm font-bold text-slate-700 border-b border-slate-200">
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">등급</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">노출</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">성행위</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">폭력</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">언어</th>
                                  <th className="px-1 py-1.5 md:p-2">기타</th>
                                </tr>
                              </thead>
                              <tbody className="body-sm text-slate-600 leading-tight">
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">4등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">성기노출</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">성범죄 또는<br />노골적 성행위</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">잔인한 살해</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">노골적이고<br />외설적 비속어</td>
                                  <td className="px-1.5 py-2 md:p-3 text-left align-top" rowSpan={5}>
                                    <p className="font-bold text-slate-700 mb-0.5">1.</p>
                                    <ul className="list-disc list-inside mb-2 space-y-0.5">
                                      <li>마약사용조장</li>
                                      <li>무기사용조장</li>
                                      <li>도박</li>
                                    </ul>
                                    <p className="font-bold text-slate-700 mb-0.5">2.</p>
                                    <ul className="list-disc list-inside space-y-0.5">
                                      <li>음주조장</li>
                                      <li>흡연조장</li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">3등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">전신노출</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">노골적이지<br />않은 성행위</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">살해</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">심한 비속어</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">2등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">부분노출</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">착의상태<br />성적접촉</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">상해</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">거친 비속어</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">1등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">노출복장</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">격렬한 키스</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">격투</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">일상 비속어</td>
                                </tr>
                                <tr>
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">0등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">노출없음</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">성행위없음</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">폭력없음</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">비속어없음</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <p className="content-label mt-8 pt-4">연령별 권장 사항</p>

                          {/* 2. 연령별 권장 사항 표 */}
                          <div className="w-full border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                            <table className="w-full text-center border-collapse break-keep">
                              <thead>
                                <tr className="bg-slate-100 body-sm font-bold text-slate-700 border-b border-slate-200">
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">구분</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">노출</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">성행위</th>
                                  <th className="px-1 py-1.5 md:p-2 border-r border-slate-200">폭력</th>
                                  <th className="px-1 py-1.5 md:p-2">언어</th>
                                </tr>
                              </thead>
                              <tbody className="body-sm text-slate-600 leading-tight">
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">전체가</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">1등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">0등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">1등급</td>
                                  <td className="px-1 py-2 md:p-2">0등급</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">
                                    12금<br /><span className="text-[9px] md:text-[11px] font-normal text-slate-400 mt-0.5 inline-block">(13세↑)</span>
                                  </td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">2등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">2등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">2등급</td>
                                  <td className="px-1 py-2 md:p-2">1등급</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                  <td className="px-1 py-2 md:p-2 font-bold bg-slate-50 border-r border-slate-200">
                                    15금<br /><span className="text-[9px] md:text-[11px] font-normal text-slate-400 mt-0.5 inline-block">(16세↑)</span>
                                  </td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">2등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">2등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200">3등급</td>
                                  <td className="px-1 py-2 md:p-2">2등급</td>
                                </tr>
                                <tr>
                                  <td className="px-1 py-2 md:p-2 font-bold bg-rose-50 border-r border-slate-200 text-rose-500">
                                    19금<br /><span className="text-[9px] md:text-[11px] font-bold mt-0.5 inline-block">(20세↑)</span>
                                  </td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200 font-bold text-rose-500">3등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200 font-bold text-rose-500">3등급</td>
                                  <td className="px-1 py-2 md:p-2 border-r border-slate-200 font-bold text-rose-500">4등급</td>
                                  <td className="px-1 py-2 md:p-2 font-bold text-rose-500">4등급</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </section>

                        <section className="space-y-4">
                          <p className="content-label text-rose-500">판매 및 배포 불가 항목</p>
                          <ol className="body-md list-decimal list-inside space-y-2 text-slate-700">
                            <li>식음료</li>
                            <li>공식 로고/일러스트 사용 및 혼동될 수 있는 창작물</li>
                            <li>생성형 AI 일러스트, 타인 저작권 침해 창작물</li>
                            <li>킹 오브 프리즘, 프리티 리듬 레인보우 라이브 캐릭터 중심이 아닌 창작물</li>
                            <li>미성년자 캐릭터 등장 성인본 (성인 IF 제외 우회 묘사 불가)</li>
                            <li>교복을 입는 묘사가 나오는 타카다노바바 죠지 성인본</li>
                          </ol>
                          <p className="body-sm text-rose-500 font-bold pt-2">
                            ※ 적발 시 판매 중지 및 강제 퇴장 조치되며, 참가비는 환불되지 않습니다.
                          </p>
                        </section>
                      </div>

                      <section className="space-y-3 pl-2 md:pl-4">
                        <p className="content-label">드림 커플링 창작물 지참 관련</p>
                        <p className="body-md">
                          프리즘 점프에 등장하는 형태의 묘사가 적은 드림주나, '근처에 사는 아저씨', '학생', '알바생' 등 구체적인 설정이 없는 엑스트라 수준의 인물은 지참이 가능합니다.<br />
                          단, <strong className="text-slate-700">상세한 설정이 부여된 오리지널 캐릭터 중심의 드림 회지 발간은 불가</strong>합니다. (타 시리즈 캐릭터 메인 제한과의 형평성 고려)
                        </p>
                      </section>
                    </div>
                  </HoloBox>
                </>
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
                  <LoadingPage />
                </HoloBox>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}