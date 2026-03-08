import { useEffect, useState } from "react";

export default function DDayCounter({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center space-y-2 md:space-y-4">
      <div className="text-5xl md:text-9xl font-metal font-extralight tracking-tighter bg-linear-to-r from-hologram-1 via-hologram-3 via-hologram-5 to-hologram-7 text-transparent bg-clip-text pb-2">
        D-{timeLeft.days}
      </div>
      <div className="flex space-x-4 md:space-x-8 text-[12px] md:text-[14px] tracking-[0.2em] text-slate-400 font-sans font-medium">
        <span>{String(timeLeft.hours).padStart(2, '0')}시간</span>
        <span>{String(timeLeft.minutes).padStart(2, '0')}분</span>
        <span>{String(timeLeft.seconds).padStart(2, '0')}초</span>
      </div>
    </div>
  );
}
