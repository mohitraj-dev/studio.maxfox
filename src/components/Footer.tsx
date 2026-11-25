"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CAPABILITIES, NAV_LINKS, STUDIO_CONTACT } from "@/data/studioData";
import { useTheme } from "@/components/ThemeProvider";
import { scrollToSection } from "@/components/SmoothScroll";

interface FooterProps {
  onStartProject: () => void;
}

export function Footer({ onStartProject }: FooterProps) {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      className="relative pt-20 sm:pt-24 overflow-hidden border-t"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Col 1: Brand Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <img
              src="/assets/logo.png"
              alt="MAXFOX STUDIOS"
              className={`h-11 w-auto object-contain transition-all ${
                theme === "light" ? "invert" : ""
              }`}
            />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Creative film &amp; media agency crafting cinematic brand films,
              social edits, and minimal visual identities audiences remember.
            </p>
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--text-muted)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm transition-colors hover:underline underline-offset-4 cursor-pointer"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--text-muted)" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {CAPABILITIES.map((cap) => (
                <li key={cap}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-sm transition-colors hover:underline underline-offset-4 cursor-pointer"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cap}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "var(--text-muted)" }}
            >
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--text-primary)" }}>
              <li>
                <a
                  href={`tel:${STUDIO_CONTACT.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#D44816] transition-colors"
                >
                  {STUDIO_CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_CONTACT.email}`}
                  className="hover:text-[#D44816] transition-colors"
                >
                  {STUDIO_CONTACT.email}
                </a>
              </li>
              <li style={{ color: "var(--text-secondary)" }}>
                {STUDIO_CONTACT.location}
              </li>
              <li>
                <a
                  href={STUDIO_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#D44816] transition-colors"
                >
                  <span>Instagram: {STUDIO_CONTACT.instagram}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Early Access / Newsletter Bar */}
        <div
          className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14"
        >
          <div className="space-y-1">
            <h4
              className="font-display text-xl sm:text-2xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Keep up with what&apos;s next
            </h4>
            <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
              Early access to MAXFOX Film Division releases, studio reels, and
              commission windows.
            </p>
          </div>

          {!subscribed ? (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto md:min-w-[380px]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brand.com"
                className="flex-1 rounded-full px-5 py-3 text-sm border bg-transparent focus:outline-none"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-xs font-semibold text-white cursor-pointer"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <span>Join Early Access</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D44816]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed to MAXFOX Film Division updates.</span>
            </div>
          )}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs pb-4"
          style={{ color: "var(--text-muted)" }}
        >
          <span>© 2024–2026 MAXFOX STUDIO. All rights reserved.</span>
          <span>Crafted in Ranchi, Jharkhand, India.</span>
        </div>
      </div>

      {/* Massive Full-Width Bleed-Out MAXFOX Wordmark */}
      <div className="relative select-none pointer-events-none overflow-hidden pt-4">
        <div
          className="font-display text-center font-bold uppercase leading-[0.76] tracking-[-0.05em] whitespace-nowrap"
          style={{
            fontSize: "clamp(5.5rem, 23vw, 24rem)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(245,245,245,0.28) 0%, rgba(212,72,22,0.22) 55%, rgba(5,5,5,0) 100%)"
                : "linear-gradient(180deg, rgba(17,17,17,0.22) 0%, rgba(212,72,22,0.2) 55%, rgba(246,246,244,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MAXFOX
        </div>
      </div>
    </footer>
  );
}
