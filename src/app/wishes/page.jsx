"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const colors = [
  "#FFD93D",
  "#4D96FF",
  "#FF8FAB",
  "#B5F44A",
  "#C9B6FF",
  "#AEEA94",
  "#7FFFD4",
  "#FF7F50",
];

export default function BirthdayPage() {
  const [stage, setStage] = useState("start");

  const startParty = () => {
    setStage("party");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e9faf8] to-[#ffffff]">

      {/* START BUTTON */}
      {stage === "start" && (
        <motion.div
          onClick={startParty}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-[180px]">🎈</div>
          <p className="text-xl font-semibold">Click to Start 🎉</p>
        </motion.div>
      )}

      {/* BALLOONS (floating everywhere) */}
      {stage === "party" && (
        <>
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 10, -10, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Balloon color={colors[i % colors.length]} />
            </motion.div>
          ))}

          {/* LOVE HEARTS */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={"love" + i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-20px",
              }}
              animate={{
                y: [-20, -600],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              💖
            </motion.div>
          ))}
        </>
      )}

      {/* CAKE */}
      {stage === "party" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 bottom-16 -translate-x-1/2 text-center"
        >
          <div className="text-[240px]">🎂</div>

          {/* TEXT BELOW CAKE */}
          <h1 className="text-5xl font-black text-pink-500 mt-2 tracking-wide">
            HAPPY BIRTHDAY 🎉
          </h1>
        </motion.div>
      )}

    </div>
  );
}

/* 🎈 REAL HELIUM BALLOON */
function Balloon({ color }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="flex flex-col items-center"
    >
      {/* balloon shape */}
      <div
        className="relative w-[85px] h-[110px] rounded-full shadow-2xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, #fff, ${color})`,
        }}
      >
        {/* shine */}
        <div className="absolute top-3 left-4 w-4 h-8 bg-white/50 rounded-full" />
      </div>

      {/* string */}
      <div className="w-[2px] h-20 bg-gray-400" />
    </motion.div>
  );
}