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
    <div className="flex flex-col items-center space-y-4">
      {/* 1. 크고 화려한 D-Day (글씨 잘림 방지를 위해 px-4, pb-2 여백 추가) */}
      <div className="text-5xl md:text-8xl font-metal font-extralight tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-hologram-pink via-hologram-blue via-hologram-green via-hologram-purple to-hologram-pink px-4 pb-2">
        D-{timeLeft.days}
      </div>

      {/* 2. 아래에 작고 깔끔하게 들어가는 문장형 카운터 */}
      <div className="text-sm md:text-base font-sans text-slate-500 font-medium tracking-wide">
        개최까지 {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초!
      </div>
    </div>
  );
}