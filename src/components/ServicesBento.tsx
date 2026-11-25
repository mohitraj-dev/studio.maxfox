"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Sliders, Palette, Camera, ArrowUpRight } from "lucide-react";

const VIDEO_ITEMS = [
  "Brand Films",
  "Commercial Shoots",
  "Product Videos",
  "Instagram Reels",
  "YouTube Shorts",
  "Viral Hook Editing & Content Strategy",
];

const POST_ITEMS = [
  "Cinematic Editing",
  "Color Grading",
  "Trailer-Style Mixing",
  "Sound Design",
  "Background Score Selection",
  "Motion Graphics",
];

const BRAND_ITEMS = [
  "Brand Development",
  "Logo Design",
  "Color Palette & Typography Systems",
  "Minimal Visual Aesthetics",
];

const GEAR_ITEMS = [
  "4K Ultra HD Output",
  "Professional DSLR & Mirrorless Systems",
  "High-Quality Audio",
  "Portable Lighting & Field-Ready Workflow",
];

interface ServicesBentoProps {
  onStartProject: () => void;
}

export function ServicesBento({ onStartProject }: ServicesBentoProps) {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10"
    >
      {/* Subtle Ambient Radial Light */}
      <div
        className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-96 w-[44rem] max-w-full rounded-full blur-[130px] opacity-20"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="space-y-4">
            <span className="section-pill">
              <span className="section-pill-dot" />
              Creative Services
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.02] max-w-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              Everything your brand needs to stand out.
            </h2>
          </div>
          <p
            className="max-w-sm text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From high-retention social edits to cinema-grade brand films and
            minimal identity systems—crafted under one roof.
          </p>
        </motion.div>

        {/* Asymmetric 4-Card Bento Grid (Paceform Reference Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Tall Left Card — Cinematic Video & Social Content */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:row-span-2 glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative h-72 sm:h-80 lg:h-[24rem] overflow-hidden bg-[#0A0A0A]">
              <img
                src="/assets/service-video.jpg"
                alt="Cinematic Video & Social Content Rig"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/25 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase bg-black/60 text-white border border-white/15 backdrop-blur-md">
                  <Film className="w-3 h-3 text-[#D44816]" />
                  01 / Video &amp; Social
                </span>
                <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold bg-[#D44816] text-white">
                  4K • 9:16 &amp; 16:9
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3
                  className="font-display text-2xl sm:text-3xl font-bold mb-2.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  Cinematic Video &amp; Social Content
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Scroll-stopping visual storytelling engineered for both widescreen
                  brand authority and high-retention vertical feeds.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {VIDEO_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3.5 py-1.5 text-xs font-medium border transition-colors"
                    style={{
                      backgroundColor: "var(--pill-bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t" style={{ borderColor: "var(--border)" }}>
                <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  Concept to final export
                </span>
                <button
                  type="button"
                  onClick={onStartProject}
                  className="inline-flex items-center gap-1 text-xs font-semibold transition-colors cursor-pointer"
                  style={{ color: "var(--accent)" }}
                >
                  Book a Shoot <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Wide Top-Right Card — Post-Production & Audio Experience */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-7 glass-card rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 group"
          >
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 order-2 md:order-1">
              <div className="space-y-3">
                <span className="section-pill">
                  <Sliders className="w-3 h-3 text-[#D44816]" />
                  02 / Post &amp; Audio
                </span>
                <h3
                  className="font-display text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Post-Production &amp; Audio Experience
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Theatrical pacing, film-emulation grading, and trailer-grade
                  sonic architecture that command full attention.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {POST_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1.5 text-xs font-medium border"
                    style={{
                      backgroundColor: "var(--pill-bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative md:col-span-6 min-h-[240px] md:min-h-full overflow-hidden bg-[#080808] order-1 md:order-2">
              <img
                src="/assets/service-post.jpg"
                alt="Color Grading & Sound Mixing Suite"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full px-3 py-1.5 bg-black/70 border border-white/15 backdrop-blur-md">
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-2 bg-[#D44816] rounded-full animate-pulse" />
                  <span className="w-0.5 h-3 bg-[#D44816] rounded-full animate-pulse" />
                  <span className="w-0.5 h-1.5 bg-[#D44816] rounded-full animate-pulse" />
                  <span className="w-0.5 h-2.5 bg-[#D44816] rounded-full animate-pulse" />
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-white">
                  DaVinci + Spatial Mix
                </span>
              </div>
            </div>
          </motion.article>

          {/* Card 3: Bottom-Middle Card — Branding & Visual Identity */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
          >
            {/* Bespoke Minimal Brand Identity Specimen Graphic */}
            <div
              className="rounded-2xl p-5 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,72,22,0.14) 0%, rgba(18,18,18,0.65) 55%, rgba(5,5,5,0.9) 100%)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-white/75">
                  <Palette className="w-3 h-3 text-[#D44816]" />
                  03 / Identity System
                </span>
                <span className="text-[10px] font-mono text-white/50">
                  GRID 08px
                </span>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="font-display text-5xl font-bold leading-none tracking-[-0.04em] text-white">
                  Aa
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-6 w-6 rounded-full border border-white/20"
                    style={{ backgroundColor: "#050505" }}
                    title="#050505"
                  />
                  <span
                    className="h-6 w-6 rounded-full border border-white/20"
                    style={{ backgroundColor: "#D44816" }}
                    title="#D44816"
                  />
                  <span
                    className="h-6 w-6 rounded-full border border-white/20"
                    style={{ backgroundColor: "#F5F5F5" }}
                    title="#F5F5F5"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3
                  className="font-display text-xl sm:text-2xl font-bold mb-1.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  Branding &amp; Visual Identity
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Cohesive visual languages built with geometric precision and
                  unmistakable restraint.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {BRAND_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1 text-xs font-medium border"
                    style={{
                      backgroundColor: "var(--pill-bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Card 4: Bottom-Right Card — Production Gear & Capabilities */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
          >
            {/* Bespoke Optical Reticle / Gear HUD */}
            <div
              className="rounded-2xl p-5 border relative overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(212,72,22,0.22), rgba(10,10,10,0.9) 70%)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-white/75">
                  <Camera className="w-3 h-3 text-[#D44816]" />
                  04 / Hardware
                </span>
                <span className="h-2 w-2 rounded-full bg-[#D44816]" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    4K UHD
                  </div>
                  <div className="text-[11px] text-white/60">
                    Field-Ready Kit
                  </div>
                </div>
                <svg
                  viewBox="0 0 48 48"
                  className="w-11 h-11 text-[#D44816] opacity-90 transition-transform duration-500 group-hover:rotate-45"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="11"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="1.2"
                  />
                  <circle cx="24" cy="24" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3
                  className="font-display text-xl sm:text-2xl font-bold mb-1.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  Production Gear &amp; Capabilities
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Agile cinema hardware built to deploy anywhere without crew
                  bloat.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {GEAR_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1 text-xs font-medium border"
                    style={{
                      backgroundColor: "var(--pill-bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
