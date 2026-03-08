import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function LoadingPage() {
  const text = "NOW LOADING";
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-12">
      <div className="flex space-x-3">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              delay: i * 0.1,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-xl md:text-2xl font-serif font-extralight tracking-widest text-black"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      
      <div className="flex space-x-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-black/20"
          >
            <Star size={14} strokeWidth={1} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
