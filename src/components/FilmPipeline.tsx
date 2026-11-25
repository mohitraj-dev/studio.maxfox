"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { PIPELINE_PHASES, EXPLORED_GENRES } from "@/data/studioData";

export function FilmPipeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState(EXPLORED_GENRES[0]);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail.trim()) return;
    setNotified(true);
    setNotifyEmail("");
  };

  return (
    <section
      id="pipeline"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Ambient Burnt-Orange Glow */}
      <div
        className="pointer-events-none absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Coming Soon Hype + Interactive Numbered Selector */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="section-pill">
                <span className="section-pill-dot animate-pulse" />
                Film Division — Coming Soon
              </span>

              <h2
                className="font-display text-3xl sm:text-5xl font-bold leading-[1.03]"
                style={{ color: "var(--text-primary)" }}
              >
                End-to-End Cinema. In Development.
              </h2>

              <p
                className="text-sm sm:text-base leading-relaxed max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Phase II expands MAXFOX STUDIO into a full-scale narrative film
                house—uniting script development, principal photography, and
                theatrical post-production under one roof.
              </p>
            </motion.div>

            {/* Interactive Numbered Selector (Paceform "Your Progress Starts Here" Inspired) */}
            <div className="space-y-3">
              {PIPELINE_PHASES.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                  <div
                    key={phase.id}
                    onClick={() => setActivePhase(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActivePhase(idx);
                      }
                    }}
                    className={`glass-card rounded-3xl p-5 sm:p-6 cursor-pointer transition-all duration-300 ${
                      isActive ? "ring-1 ring-[#D44816]/60" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold transition-colors ${
                            isActive
                              ? "bg-[#D44816] text-white"
                              : "border text-[var(--text-secondary)]"
                          }`}
                          style={
                            !isActive
                              ? {
                                  borderColor: "var(--border)",
                                  backgroundColor: "var(--pill-bg)",
                                }
                              : undefined
                          }
                        >
                          {phase.number}
                        </span>
                        <div>
                          <h3
                            className="font-display text-lg sm:text-xl font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {phase.title}
                          </h3>
                          <p
                            className="text-xs"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {phase.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider border border-[#D44816]/30 text-[#D44816]">
                        Phase II
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t space-y-4" style={{ borderColor: "var(--border)" }}>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {phase.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {phase.deliverables.map((item) => (
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Frosted Glass "Cinema Slate" Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-3xl overflow-hidden">
              {/* Slate Visual Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070707]">
                <img
                  src="/assets/cinema-slate.jpg"
                  alt="MAXFOX Film Division Cinema Slate"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-transparent" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase bg-black/70 text-white border border-white/15 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-[#D44816]" />
                    Cinema Slate • 2027
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[#D44816]/90 text-white">
                    <Lock className="w-3 h-3" />
                    Private Slate
                  </span>
                </div>

                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
                      Active Pipeline Stage
                    </div>
                    <div className="font-display text-2xl font-bold text-white">
                      {PIPELINE_PHASES[activePhase].number}.{" "}
                      {PIPELINE_PHASES[activePhase].title}
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-[11px] font-mono text-white/60">
                      FOCUS GENRE
                    </div>
                    <div className="text-xs font-semibold text-[#D44816]">
                      {selectedGenre}
                    </div>
                  </div>
                </div>
              </div>

              {/* Explored Genres & Launch Waitlist */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-[0.16em] mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Genres in Exploration
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {EXPLORED_GENRES.map((genre) => {
                      const active = selectedGenre === genre;
                      return (
                        <button
                          key={genre}
                          type="button"
                          onClick={() => setSelectedGenre(genre)}
                          className="rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all cursor-pointer"
                          style={{
                            backgroundColor: active
                              ? "var(--accent)"
                              : "var(--pill-bg)",
                            borderColor: active
                              ? "var(--accent)"
                              : "var(--border)",
                            color: active ? "#FFFFFF" : "var(--text-primary)",
                          }}
                        >
                          {genre}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Minimal Notify Me on Launch Input */}
                <div
                  className="pt-5 border-t space-y-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Notify Me on Launch
                    </span>
                    <span
                      className="text-[11px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      No active booking yet
                    </span>
                  </div>

                  {!notified ? (
                    <form
                      onSubmit={handleNotify}
                      className="flex flex-col sm:flex-row gap-2.5"
                    >
                      <input
                        type="email"
                        required
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        placeholder="Enter your email for Phase II slate drops"
                        className="flex-1 rounded-full px-4 py-3 text-sm border bg-transparent focus:outline-none"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white transition-transform hover:scale-[1.02] cursor-pointer"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        <span>Notify Me</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  ) : (
                    <div
                      className="flex items-center gap-2.5 rounded-2xl px-4 py-3 border text-xs font-medium"
                      style={{
                        borderColor: "rgba(212, 72, 22, 0.4)",
                        backgroundColor: "rgba(212, 72, 22, 0.1)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D44816] shrink-0" />
                      <span>
                        You&apos;re on the Film Division early-access list. We&apos;ll
                        notify you when Phase II opens.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
