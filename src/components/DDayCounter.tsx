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
      <div className="text-5xl md:text-9xl font-metal font-extralight tracking-tighter text-black/90">
        D-{timeLeft.days}
      </div>
      <div className="flex space-x-4 md:space-x-8 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-black/20 font-light uppercase">
        <span>{timeLeft.hours}H</span>
        <span>{timeLeft.minutes}M</span>
        <span>{timeLeft.seconds}S</span>
      </div>
    </div>
  );
}
