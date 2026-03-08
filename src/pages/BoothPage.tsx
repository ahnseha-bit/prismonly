import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingPage from "../components/LoadingPage";
import { LayoutGrid, FileText, Map as MapIcon } from "lucide-react";

const BOOTH_MENU = [
  { id: "list", label: "부스 리스트", icon: LayoutGrid },
  { id: "detail", label: "부스 상세정보", icon: FileText },
  { id: "map", label: "부스 배치도", icon: MapIcon },
];

export default function BoothPage() {
  const [activeTab, setActiveTab] = useState("list");

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
          <h2 className="text-xl font-serif font-light tracking-[0.3em] uppercase text-black/80">Booth</h2>
        </div>

        {/* Sub-menu Buttons */}
        <div className="flex space-x-4 mb-16">
          {BOOTH_MENU.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-10 py-3 rounded-[4px] text-xs tracking-widest transition-all duration-400 font-light ${
                activeTab === item.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-400 hover:bg-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Large Content Container */}
        <div className="w-full max-w-4xl min-h-[800px] wireframe-box">
          Content Container Box
        </div>
      </motion.div>
    </div>
  );
}
