"use client";

import React from "react";
import { motion } from "framer-motion";

const KINETIC_WORDS = ["Direct.", "Shoot.", "Grade.", "Score.", "Inspire."];

export function KineticBanner() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl rounded-3xl overflow-hidden relative px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, #E85E24 0%, #D44816 42%, #8F2506 100%)",
          boxShadow: "0 30px 90px -25px rgba(212, 72, 22, 0.55)",
        }}
      >
        {/* Warm Radial Sheen */}
        <div
          className="pointer-events-none absolute -top-28 -left-20 h-96 w-96 rounded-full blur-3xl opacity-45"
          style={{ backgroundColor: "#FF9457" }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full blur-3xl opacity-50"
          style={{ backgroundColor: "#3D0E02" }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
          {/* Left: Crisp White MAXFOX Logo + Studio Ethos */}
          <div className="space-y-5 max-w-xs">
            <img
              src="/assets/logo.png"
              alt="MAXFOX STUDIOS"
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-md"
            />
            <p className="text-xs sm:text-sm font-medium text-white/85 leading-relaxed">
              Every frame calibrated for tension, clarity, and lasting brand
              memory.
            </p>
          </div>

          {/* Right: Stacked High-Contrast Kinetic Words */}
          <div className="flex flex-col items-start md:items-end">
            {KINETIC_WORDS.map((word, idx) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="font-display text-4xl sm:text-6xl lg:text-[4.4rem] font-bold leading-[0.94] tracking-[-0.04em] text-white"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
