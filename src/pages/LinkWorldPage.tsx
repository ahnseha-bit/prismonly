import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";

const HoloBox = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full shadow-frame">
    <div className="outer-holo-line">
      <div className="p-[2px] bg-white flex flex-col w-full">
        <div className="inner-holo-line">
          <div className="main-board text-center flex flex-col items-center justify-center min-h-[50vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function LinkWorldPage() {
  const { tabId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabId !== "01") {
      navigate("/links/01", { replace: true });
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
                <div className="bg-white p-4 md:px-8 md:py-5 w-full flex items-center justify-center md:justify-start">
                  <h2 className="text-xl md:text-2xl font-happy font-bold tracking-[-0.03em] text-accent-gold inline-block m-0">
                    Link World
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key="linkworld-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col w-full"
            >
              <HoloBox>
                <LoadingPage />
              </HoloBox>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}