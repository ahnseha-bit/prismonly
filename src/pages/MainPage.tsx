import { useState } from "react";
import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";

const ANNOUNCEMENTS = [
  { date: "2026.03.09", title: "Website Update", content: "Notice accordion feature has been updated." },
  { date: "2026.03.01", title: "Booth Application", content: "Booth application is now open. Please check the Info page for details." },
  { date: "2026.02.15", title: "Official Teaser", content: "The official teaser visual for the event has been released." }
];

export default function MainPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="fluid-container pt-[10vh] md:pt-[12vh] pb-[6vh] md:pb-[10vh] min-h-screen flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full space-y-8 md:space-y-[6vh]"
      >
        <div className="text-center shrink-0 mt-4 md:mt-0 flex flex-col items-center">
          <span className="bg-transparent text-accent-gold px-2.5 py-0.5 text-[10px] md:text-xs rounded-sm tracking-tight font-serif font-light inline-block mb-4 md:mb-5 leading-tight border border-accent-gold">
            Countdown to Prism
          </span>
          <div className="leading-none font-extralight tracking-tighter text-slate-800 font-metal">
            <DDayCounter targetDate="2026-07-04T00:00:00" />
          </div>
        </div>

        <div className="w-full max-w-lg shadow-frame flex flex-col">
          <div className="outer-holo-line flex flex-col">
            <div className="p-[2px] bg-white flex flex-col w-full">
              <div className="inner-holo-line flex flex-col">
                <div className="main-board p-5 md:p-8">
                  <h1 className="title-accent text-lg md:text-xl mb-4 md:mb-6 text-center">Notice</h1>
                  <div className="max-h-[320px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    <div className="space-y-1 w-full">
                      {ANNOUNCEMENTS.map((item, index) => (
                        <div key={index} className="border-b border-slate-100 last:border-none py-1">
                          <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between py-2.5 text-left group"
                          >
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                              <span className="text-[10px] font-bold text-accent-gold tracking-tighter opacity-80">{item.date}</span>
                              <span className="text-sm md:text-base font-bold text-slate-700 tracking-tight group-hover:text-accent-gold transition-colors">{item.title}</span>
                            </div>
                            <span className={`text-accent-gold text-xs transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                              ✧
                            </span>
                          </button>
                          {openIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="pt-1 pb-4 text-xs md:text-sm text-slate-500 leading-relaxed pl-1 text-left font-sans">
                                {item.content}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[10px] tracking-[0.3em] text-slate-300 uppercase shrink-0 pt-4 md:pt-0">
          Now Loading...
        </div>
      </motion.div>
    </div>
  );
}