import { motion } from "motion/react";
import LoadingPage from "../components/LoadingPage";

export default function EventPage() {
  return (
    <div className="w-full flex flex-col items-center py-40 px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[1440px] flex flex-col items-center"
      >
        {/* Frame 2: Logo Box */}
        <div className="w-32 aspect-square wireframe-box mb-24">
          Logo Box
        </div>

        {/* Parent Menu Title */}
        <div className="w-full max-w-4xl flex justify-start mb-8">
          <h2 className="text-xl font-serif font-light tracking-[0.3em] uppercase text-black/80">Events</h2>
        </div>

        {/* Large Content Container */}
        <div className="w-full max-w-4xl min-h-[800px] wireframe-box">
          Content Container Box
        </div>
      </motion.div>
    </div>
  );
}
