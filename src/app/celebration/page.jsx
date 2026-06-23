"use client";
import { motion } from "framer-motion";

export default function BirthdayWish() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#070816] overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,80,255,0.25),transparent_60%)]" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />

      {/* 🌻 SUNFLOWERS (ADDED - 4 CORNERS) */}
      <div className="absolute top-4 left-4 text-8xl z-20 opacity-100 animate-pulse drop-shadow-[0_0_35px_rgba(255,200,0,0.9)]">
        🌻
      </div>

      <div className="absolute top-4 right-4 text-12xl z-20 opacity-100 animate-pulse drop-shadow-[0_0_35px_rgba(255,200,0,0.9)]">
        🌻
      </div>

      <div className="absolute bottom-4 left-4 text-8xl z-20 opacity-100 animate-pulse drop-shadow-[0_0_35px_rgba(255,200,0,0.9)]">
        🌻
      </div>

      <div className="absolute bottom-4 right-4 text-8xl z-20 opacity-100 animate-pulse drop-shadow-[0_0_35px_rgba(255,200,0,0.9)]">
        🌻
      </div>

      {/* ✨ JIKIMIKI SPARKLE (NEW ADD) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-3xl drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 900 + 200,
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            y: [-10, -300],
            opacity: [0, 1, 0],
            scale: [0.4, 1.5, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* 💖 Floating Love Balloons (BIGGER UPDATED) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl drop-shadow-[0_10px_30px_rgba(255,105,180,0.7)]"
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 800 + 300,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [-20, -250],
            opacity: [0, 1, 0],
            rotate: [0, 25, -25],
            scale: [0.8, 1.8, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {Math.random() > 0.5 ? "💖" : "🎈"}
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[720px]"
      >
        <div className="p-[2px] rounded-[44px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-xl">

          {/* GLASS CARD */}
          <div className="card-glass rounded-[42px] px-10 py-16 text-center">

            {/* Cake */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[120px] drop-shadow-[0_0_25px_rgba(255,200,0,0.3)]"
            >
              🎂
            </motion.div>

            {/* Title */}
            <h1 className="mt-6 text-6xl font-black drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Happy Birthday Farha✨
            </h1>

            <div className="mx-auto mt-8 h-[2px] w-64 bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

            {/* Message */}
            <div className="mt-12 space-y-6 p-10">

              <p className="text-[16px] leading-[2] p-4">
                আজকের দিনটা শুধু তোমার। প্রার্থনা করি, মহাবিশ্বের সবটুকু আনন্দ
                আর ভালোবাসা যেন আজকের দিনে তোমার ঝুড়িতে এসে ধরা দেয়। <br /><br />

                তুমি এমন একজন মানুষ, যার উপস্থিতি আশেপাশের জীবনগুলোকে আরও সুন্দর
                করে তোলে। আজকের এই দিনটা তোমার জন্য হোক <br />

                ভালোবাসা, হাসি আর 
                অসংখ্য সুন্দর মুহূর্তে ভরা ✨
              </p>

              <p className="text-[16px] font-bold leading-[2] drop-shadow-[0_0_15px_rgba(255,105,180,0.4)]">
                তুমি ঠিক এভাবেই হাসিখুশি থেকো, কারণ তোমার হাসিতেই পৃথিবীটা একটু বেশি উজ্জ্বল মনে হয়।
              </p>

              <p className="text-[16px] font-bold drop-shadow-[0_0_20px_rgba(255,182,193,0.5)]">
                তোমার প্রতিটা ইচ্ছা পূরণ হোক 🌸
              </p>

              <br />

              <p className="text-[22px] font-semibold drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                শুভ জন্মদিন 💖
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-8 mt-10">
                <a href="/" className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition">
                  Back to Home
                </a> <br/>
                <a href="/wishes" className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white transition">
                  Next Page
                </a>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}