"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, Film } from "lucide-react";
import { STUDIO_CONTACT } from "@/data/studioData";

const PROJECT_TYPES = [
  "Brand Film",
  "Commercial Shoot",
  "Reels & Shorts",
  "Color & Sound Post",
  "Visual Identity",
];

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
}

export function ProjectModal({ open, onClose }: ProjectModalProps) {
  const [selectedService, setSelectedService] = useState(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setBrief("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative w-full max-w-lg rounded-3xl p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border cursor-pointer"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--pill-bg)",
                color: "var(--text-primary)",
              }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2 pr-8">
                  <span className="section-pill">
                    <span className="section-pill-dot" />
                    Start a Project
                  </span>
                  <h3
                    className="font-display text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Let&apos;s craft something unforgettable.
                  </h3>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Focus Area
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const active = selectedService === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedService(type)}
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
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name or brand"
                    className="w-full rounded-2xl px-4 py-3 text-sm border bg-transparent focus:outline-none"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full rounded-2xl px-4 py-3 text-sm border bg-transparent focus:outline-none"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell us about your vision, timeline, or shoot location..."
                  className="w-full rounded-2xl px-4 py-3 text-sm border bg-transparent focus:outline-none resize-none"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <a
                    href={`mailto:${STUDIO_CONTACT.email}?subject=${encodeURIComponent(
                      `Project Inquiry: ${selectedService}`
                    )}`}
                    className="text-xs underline underline-offset-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Or email {STUDIO_CONTACT.email}
                  </a>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white cursor-pointer"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <span>Send Project Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 mx-auto text-[#D44816]" />
                <h3
                  className="font-display text-2xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Brief Received
                </h3>
                <p
                  className="text-sm max-w-sm mx-auto leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Thank you, {name}. Our Ranchi creative desk will review your{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    {selectedService}
                  </strong>{" "}
                  inquiry and reply at{" "}
                  <span style={{ color: "var(--text-primary)" }}>{email}</span>{" "}
                  within 24 hours.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`tel:${STUDIO_CONTACT.phone.replace(/\s+/g, "")}`}
                    className="rounded-full px-5 py-2.5 text-xs font-medium border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Call {STUDIO_CONTACT.phone}
                  </a>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="rounded-full px-6 py-2.5 text-xs font-semibold text-white cursor-pointer"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ShowreelModalProps {
  open: boolean;
  onClose: () => void;
  onStartProject: () => void;
}

export function ShowreelModal({
  open,
  onClose,
  onStartProject,
}: ShowreelModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/15 bg-[#0A0A0A] shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Film className="w-4 h-4 text-[#D44816]" />
                <span className="font-display text-sm font-semibold text-white tracking-wide">
                  MAXFOX STUDIO — Showreel Preview (4K UHD)
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
                aria-label="Close showreel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <video
                controls
                autoPlay
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source src="/assets/hero-cinema.mov" type="video/mp4" />
                <source src="/assets/hero-cinema.mov" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#D44816]">
                    MAXFOX STUDIO • Showreel 2026
                  </span>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    4K field-ready production, color grading, and narrative cuts.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onStartProject();
                  }}
                  className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-semibold text-white bg-[#D44816] hover:brightness-110 cursor-pointer"
                >
                  <span>Commission a Film</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
