"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Aperture, Radio, ShieldCheck } from "lucide-react";
import { CAPABILITIES } from "@/data/studioData";
import { scrollToSection } from "@/components/SmoothScroll";

interface HeroSectionProps {
  onOpenShowreel: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Full-Bleed Showreel Hero Canvas */}
      <div className="relative min-h-[92vh] flex items-end lg:items-center pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 bg-[#050505] text-[#F5F5F5]">
        {/* Background Media Layer: Showreel Video + Ambient Cinema Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
          >
            <source src="/assets/hero-cinema.mov" type="video/mp4" />
            <source src="/assets/hero-cinema.mov" />
          </video>

          {/* Darkening & Warm Burnt-Orange / Amber Edge Radial Lighting */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.72) 48%, rgba(5,5,5,0.45) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(65% 55% at 88% 22%, rgba(212, 72, 22, 0.34) 0%, rgba(168, 46, 12, 0.14) 42%, transparent 72%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-44"
            style={{
              background:
                "linear-gradient(to top, var(--bg) 0%, rgba(5,5,5,0.65) 55%, transparent 100%)",
            }}
          />
        </div>

        {/* Hero Foreground Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left Column: Headline & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-8 space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase bg-white/[0.06] border border-white/15 text-[#E5E5E5] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D44816] shadow-[0_0_10px_#D44816]" />
              <span>Cinematic Storytelling</span>
              <span className="text-white/35">•</span>
              <span>Brand Identity</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.35rem] xl:text-[4.9rem] font-bold leading-[0.98] tracking-[-0.03em] text-[#F5F5F5] max-w-4xl">
              Visual Experiences That Audiences{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#F5C5B0] to-[#D44816]">
                Remember.
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#B8B8B8]">
              MAXFOX STUDIO is a creative film &amp; media agency crafting
              high-impact brand films, commercials, retention-engineered reels,
              and minimal visual identities—built with theatrical discipline.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                style={{
                  backgroundColor: "#D44816",
                  boxShadow: "0 14px 36px -8px rgba(212, 72, 22, 0.65)",
                }}
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenShowreel}
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium text-[#F5F5F5] bg-white/[0.06] border border-white/15 backdrop-blur-md transition-colors hover:bg-white/[0.12] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#D44816]" />
                <span>Preview Studio Reel</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Frosted-Glass Studio Spec Card (Paceform Recovery Card Inspired) */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-4 lg:justify-self-end w-full max-w-sm"
          >
            <div
              className="rounded-3xl p-6 border backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              style={{
                background: "rgba(18, 18, 18, 0.72)",
                borderColor: "rgba(255, 255, 255, 0.14)",
              }}
            >
              {/* Subtle inner top glow */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full blur-3xl opacity-45"
                style={{ backgroundColor: "#D44816" }}
              />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#B5B5B5]">
                    <span className="h-2 w-2 rounded-full bg-[#D44816] animate-pulse" />
                    Production Spec
                  </span>
                  <span className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-white/10 text-white/80">
                    Phase I Active
                  </span>
                </div>

                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
                    4K ULTRA HD
                  </div>
                  <p className="mt-1 text-xs text-[#9E9E9E]">
                    Field-Ready Production • Calibrated Color &amp; Dual Audio
                  </p>
                </div>

                {/* Spec Bars / Waveform Inspired Visualization */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-3">
                    <Aperture className="w-4 h-4 text-[#D44816] mb-1.5" />
                    <div className="text-xs font-semibold text-white">10-Bit</div>
                    <div className="text-[10px] text-[#9E9E9E]">Log Pipeline</div>
                  </div>
                  <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-3">
                    <Radio className="w-4 h-4 text-[#D44816] mb-1.5" />
                    <div className="text-xs font-semibold text-white">48 kHz</div>
                    <div className="text-[10px] text-[#9E9E9E]">Spatial Mix</div>
                  </div>
                  <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-3">
                    <ShieldCheck className="w-4 h-4 text-[#D44816] mb-1.5" />
                    <div className="text-xs font-semibold text-white">120 FPS</div>
                    <div className="text-[10px] text-[#9E9E9E]">Cinema Motion</div>
                  </div>
                </div>

                {/* Showreel Trigger Row */}
                <button
                  type="button"
                  onClick={onOpenShowreel}
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 transition-colors cursor-pointer group"
                >
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">
                      Showreel Cut 2026
                    </div>
                    <div className="text-[11px] text-[#9E9E9E]">
                      Click to launch studio preview
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D44816] text-white transition-transform duration-200 group-hover:scale-105">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Capabilities Strip Directly Below Hero */}
      <div
        className="border-y py-5 overflow-hidden"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
        }}
      >
        <div className="animate-marquee flex items-center">
          {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center">
              <span
                className="font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] px-6 sm:px-9 whitespace-nowrap"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
