import { motion } from "motion/react";
import DDayCounter from "../components/DDayCounter";
import { Bell, Info, Calendar } from "lucide-react";

export default function MainPage() {
  return (
    <div className="w-full flex flex-col items-center py-40 px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[1440px] flex flex-col items-center"
      >
        {/* Frame 1: Logo Box */}
        <div className="w-48 aspect-square wireframe-box mb-32">
          Logo Box
        </div>

        {/* Intro Box */}
        <div className="w-full max-w-2xl h-12 wireframe-box mb-32">
          Intro Text Box
        </div>

        {/* Large D-Day */}
        <div className="mb-40">
          <DDayCounter targetDate="2026-07-04T00:00:00" />
        </div>

        {/* Updates Box */}
        <div className="w-full max-w-4xl h-64 wireframe-box">
          Recent Updates Box
        </div>
      </motion.div>
    </div>
  );
}
