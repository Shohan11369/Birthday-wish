"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CountdownTimer() {
  const router = useRouter();

  // 🎯 BD TIME FIX (23 June 2026, 00:00 Dhaka)
  // JS month: June = 5
  const targetDate = new Date(2026, 5, 23, 0, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        router.push("/celebration");
        return;
      }

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router, targetDate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        
        <h1 className="mb-6 text-lg">
          Counting down to the Special Day
        </h1>

        <div className="flex gap-4 bg-white/10 px-8 py-6 rounded-2xl border border-white/20">

          <div>
            <div className="text-4xl font-bold">{timeLeft.d}</div>
            <div className="text-xs">Days</div>
          </div>

          <div>
            <div className="text-4xl font-bold">{timeLeft.h}</div>
            <div className="text-xs">Hours</div>
          </div>

          <div>
            <div className="text-4xl font-bold">{timeLeft.m}</div>
            <div className="text-xs">Min</div>
          </div>

          <div>
            <div className="text-4xl font-bold">{timeLeft.s}</div>
            <div className="text-xs">Sec</div>
          </div>

        </div>

      </div>
    </div>
  );
}