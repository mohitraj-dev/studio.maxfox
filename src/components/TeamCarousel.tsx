"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clapperboard } from "lucide-react";
import { TEAM_MEMBERS, TeamMember } from "@/data/studioData";

function EditorialPortraitPlaceholder({
  member,
  isActive,
}: {
  member: TeamMember;
  isActive: boolean;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#0B0B0B] transition-all duration-700 ${
        isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"
      }`}
    >
      {/* Monochrome-to-Color Radial Studio Lighting */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${member.accentTone} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          isActive ? "!opacity-100" : ""
        }`}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.09) 0%, rgba(12,12,12,0.92) 68%, #050505 100%)",
        }}
      />

      {/* Minimalist Architectural Silhouette + Viewfinder Reticle */}
      <svg
        viewBox="0 0 300 380"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`glow-${member.number}`} cx="55%" cy="32%" r="48%">
            <stop offset="0%" stopColor="#D44816" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#D44816" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="300"
          height="380"
          fill={`url(#glow-${member.number})`}
          className={`transition-opacity duration-700 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        {/* Editorial Silhouette */}
        <circle cx="150" cy="136" r="46" fill="rgba(255,255,255,0.08)" />
        <path
          d="M62 380 C66 266, 98 220, 150 220 C202 220, 234 266, 238 380 Z"
          fill="rgba(255,255,255,0.07)"
        />
        {/* Rim Highlight Arc */}
        <path
          d="M180 96 A46 46 0 0 1 182 174"
          stroke="#D44816"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={`transition-opacity duration-700 ${
            isActive ? "opacity-90" : "opacity-25 group-hover:opacity-90"
          }`}
        />

        {/* Cinema Frame Corner Marks */}
        <path
          d="M28 42 L28 24 L46 24 M254 24 L272 24 L272 42 M28 338 L28 356 L46 356 M254 356 L272 356 L272 338"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      {/* Monogram Centerpiece */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center pb-12">
        <span className="font-display text-5xl font-bold tracking-[-0.04em] text-white/25 transition-colors duration-500 group-hover:text-white/45">
          {member.monogram}
        </span>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 backdrop-blur-md">
          <Clapperboard className="w-3 h-3 text-[#D44816]" />
          Unit {member.number}
        </span>
      </div>
    </div>
  );
}

export function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const selectMember = (idx: number) => {
    const clamped = Math.max(0, Math.min(TEAM_MEMBERS.length - 1, idx));
    setActiveIndex(clamped);
    if (trackRef.current) {
      const card = trackRef.current.children[clamped] as HTMLElement | undefined;
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <section
      id="team"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div className="space-y-4">
            <span className="section-pill">
              <span className="section-pill-dot" />
              The Collective
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.02]"
              style={{ color: "var(--text-primary)" }}
            >
              The Minds Behind the Frame.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono mr-2"
              style={{ color: "var(--text-secondary)" }}
            >
              0{activeIndex + 1} / 0{TEAM_MEMBERS.length}
            </span>
            <button
              type="button"
              onClick={() => selectMember(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-all disabled:opacity-35 cursor-pointer"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--pill-bg)",
                color: "var(--text-primary)",
              }}
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => selectMember(activeIndex + 1)}
              disabled={activeIndex === TEAM_MEMBERS.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-all disabled:opacity-35 cursor-pointer"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--pill-bg)",
                color: "var(--text-primary)",
              }}
              aria-label="Next team member"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Interactive Card Showcase */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {TEAM_MEMBERS.map((member, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.article
                key={member.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`glass-card rounded-3xl overflow-hidden flex flex-col cursor-pointer group transition-all duration-500 ${
                  isActive
                    ? "ring-1 ring-[#D44816]/60 -translate-y-1"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {/* Portrait Frame: Monochrome shifting to full color on hover/active */}
                <div
                  className="relative aspect-[3/3.6] overflow-hidden bg-[#0A0A0A]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.12) 0%, rgba(18,18,18,0.96) 65%, #070707 100%)",
                  }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className={`h-full w-full object-cover ${
                        member.number === "02" ? "object-[50%_22%]" : "object-top"
                      } transition-all duration-700 group-hover:scale-105 ${
                        isActive
                          ? "grayscale-0 contrast-105"
                          : "grayscale contrast-110 group-hover:grayscale-0"
                      }`}
                    />
                  ) : (
                    <EditorialPortraitPlaceholder
                      member={member}
                      isActive={isActive}
                    />
                  )}

                  {/* Color Rim Glow & Bottom Vignette */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle at 80% 18%, rgba(212, 72, 22, 0.25), transparent 55%)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full px-3 py-1 text-[11px] font-mono font-semibold bg-black/65 text-white border border-white/15 backdrop-blur-md">
                      {member.number}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-[#D44816] shadow-[0_0_12px_#D44816]"
                          : "bg-white/30 group-hover:bg-[#D44816]"
                      }`}
                    />
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-display text-xl font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#D44816] mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full px-2.5 py-1 text-[11px] font-medium border"
                        style={{
                          backgroundColor: "var(--pill-bg)",
                          borderColor: "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
