import React from "react";
import { motion } from "motion/react";

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

export default function LinkPage() {
  const linkSections = [
    {
      title: "공식",
      links: [
        { label: "X (Twitter)", url: "https://x.com/PrismOnly_", value: "@PrismOnly_" },
        { label: "TMM", url: "#", value: "Now Loading…", isDisabled: true },
      ],
    },
    {
      title: "협력",
      links: [
        { label: "출력소 | 아이엔비", url: "https://x.com/inbcopy", value: "@inbcopy" },
        { label: "인쇄소 | 아이코믹스", url: "https://t.co/RBObgysRqo", value: "icomics.co.kr" },
      ],
    },
  ];

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
                <div className="bg-white p-4 md:px-8 md:py-5 w-full">
                  <h2 className="text-xl md:text-2xl font-happy font-bold text-accent-gold m-0 tracking-[-0.03em]">
                    Link World
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <HoloBox>
            <div className="content-section space-y-10">
              <div className="border-b border-slate-100 pb-4">
                <p className="body-md text-slate-500 font-medium">
                  행사 관련 외부 링크를 모아둔 페이지입니다.
                </p>
              </div>

              <div className="space-y-10">
                {linkSections.map((section, idx) => (
                  <div key={idx} className="flex flex-col space-y-4">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-l-4 border-accent-gold pl-3">
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.isDisabled ? undefined : link.url}
                          target={link.isDisabled ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className={`group p-4 border flex flex-col space-y-1 transition-all ${link.isDisabled
                              ? "bg-slate-50 border-slate-100 cursor-not-allowed"
                              : "bg-white border-slate-200 hover:border-accent-gold hover:shadow-md"
                            }`}
                        >
                          <span className="text-[10px] font-bold text-slate-400 group-hover:text-accent-gold transition-colors">
                            {link.label}
                          </span>
                          <span className={`text-[13px] md:text-[14px] font-bold ${link.isDisabled ? "text-slate-300 italic" : "text-slate-700"
                            }`}>
                            {link.value}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HoloBox>
        </div>
      </motion.div>
    </div>
  );
}