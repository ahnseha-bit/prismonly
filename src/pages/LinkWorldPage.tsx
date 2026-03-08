import { motion } from "motion/react";
import { ExternalLink, Twitter, Instagram, Youtube, Globe } from "lucide-react";

const LINKS = [
  { name: "Official Twitter (X)", url: "#", icon: Twitter, color: "text-blue-400" },
  { name: "Official Instagram", url: "#", icon: Instagram, color: "text-pink-400" },
  { name: "Official Youtube", url: "#", icon: Youtube, color: "text-red-500" },
  { name: "Convention Center", url: "#", icon: Globe, color: "text-emerald-400" },
];

export default function LinkWorldPage() {
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
          <h2 className="text-xl font-serif font-light tracking-[0.3em] uppercase text-black/80">Link World</h2>
        </div>

        {/* Large Content Container */}
        <div className="w-full max-w-4xl min-h-[800px] wireframe-box">
          Content Container Box
        </div>
      </motion.div>
    </div>
  );
}
