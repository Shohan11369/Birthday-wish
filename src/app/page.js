"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-06-23T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setIsActive(true);
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 }); // Set to 0 when finished
        return;
      }

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <img
        src="/bg3.png"
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          backgroundColor: "#000",
          zIndex: -1,
        }}
      />

      {/* Glass box */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          padding: "1.5rem",
          borderRadius: "20px",
          textAlign: "center",
          color: "#fff",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          width: "90%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "1rem", marginBottom: "15px", fontWeight: "300" }}>
          {isActive ? "The time has arrived!" : "Counting down to the Special Day"}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {[
            { label: "Days", val: timeLeft.d },
            { label: "Hours", val: timeLeft.h },
            { label: "Min", val: timeLeft.m },
            { label: "Sec", val: timeLeft.s },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.2)",
                padding: "8px",
                borderRadius: "10px",
                minWidth: "50px",
              }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#ffd700" }}>
                {isActive ? 0 : item.val}
              </div>
              <div style={{ fontSize: "0.6rem", textTransform: "uppercase" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <Link href={isActive ? "/celebration" : "#"}>
          <button
            disabled={!isActive}
            style={{
              background: isActive ? "#ffd700" : "#555",
              color: isActive ? "#000" : "#999",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: isActive ? "pointer" : "not-allowed",
              opacity: isActive ? 1 : 0.5,
              transition: "0.3s",
            }}
          >
            {isActive ? "Next Page" : "Locked"}
          </button>
        </Link>
      </div>
    </main>
  );
}