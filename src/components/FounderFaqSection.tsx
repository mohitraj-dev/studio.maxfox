"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, MapPin, Calendar } from "lucide-react";
import { FAQS, STUDIO_CONTACT } from "@/data/studioData";

export function FounderFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="founder"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Block: Founder's Background Story + Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="section-pill">
            <span className="section-pill-dot" />
            Founder Story
          </span>

          <h2
            className="font-display text-3xl sm:text-5xl font-bold leading-[1.03]"
            style={{ color: "var(--text-primary)" }}
          >
            Built from indie cinema &amp; minimal craft.
          </h2>

          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/team-mohit.png"
                alt="Mohit Raj — Founder of MAXFOX STUDIO"
                className="h-16 w-16 rounded-2xl object-cover object-top border border-white/15 bg-gradient-to-b from-[#232323] to-[#0A0A0A]"
              />
              <div>
                <h3
                  className="font-display text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Mohit Raj
                </h3>
                <p className="text-xs font-medium text-[#D44816]">
                  Founder &amp; Creative Director
                </p>
                <div
                  className="mt-1 flex flex-wrap items-center gap-3 text-[11px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Est. 2024
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Ranchi, Jharkhand, India
                  </span>
                </div>
              </div>
            </div>

            <p
              className="text-sm sm:text-[15px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              MAXFOX STUDIO was founded in 2024 in Ranchi out of an obsession
              with indie short films, emotional intensity, and minimal visual
              storytelling. What began as late-night experimentation with shadow,
              sound design, and narrative pacing evolved into an independent
              creative studio helping brands speak with cinematic conviction.
            </p>

            <a
              href={STUDIO_CONTACT.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 12px 30px -8px rgba(212, 72, 22, 0.55)",
              }}
            >
              <span>View Personal Portfolio &amp; Short Films</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Block: Split Interactive FAQ Accordion (+ / -) */}
        <motion.div
          id="faq"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-3">
            <span className="section-pill">
              <span className="section-pill-dot" />
              Agency FAQ
            </span>
            <h3
              className="font-display text-2xl sm:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Questions, answered cleanly.
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.question}
                  className="glass-card rounded-3xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-display text-base sm:text-lg font-semibold leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors"
                      style={{
                        backgroundColor: isOpen
                          ? "var(--accent)"
                          : "var(--pill-bg)",
                        borderColor: isOpen ? "var(--accent)" : "var(--border)",
                        color: isOpen ? "#FFFFFF" : "var(--text-primary)",
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-6 pt-0 text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
