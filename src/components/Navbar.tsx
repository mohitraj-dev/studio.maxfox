"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/studioData";
import { useTheme } from "@/components/ThemeProvider";
import { scrollToSection } from "@/components/SmoothScroll";

interface NavbarProps {
  onStartProject: () => void;
}

export function Navbar({ onStartProject }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-2xl shadow-lg"
            : "backdrop-blur-md"
        }`}
        style={{
          backgroundColor: scrolled
            ? "var(--nav-bg)"
            : theme === "dark"
              ? "rgba(5, 5, 5, 0.45)"
              : "rgba(246, 246, 244, 0.65)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
          {/* Left: Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
            aria-label="MAXFOX STUDIO Home"
          >
            <img
              src="/assets/logo.png"
              alt="MAXFOX STUDIOS"
              className={`h-9 w-auto object-contain transition-all duration-300 ${
                theme === "light" ? "invert" : ""
              }`}
            />
            <span
              className="hidden sm:inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Studio
            </span>
          </button>

          {/* Center: Minimal Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-medium tracking-wide transition-colors duration-200 hover:opacity-100 cursor-pointer"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Theme Pill Toggle + CTA */}
          <div className="flex items-center gap-2.5">
            {/* Dark / Light Pill Toggle */}
            <div
              className="relative flex items-center rounded-full p-1 border"
              style={{
                backgroundColor: "var(--pill-bg)",
                borderColor: "var(--border)",
              }}
              role="group"
              aria-label="Theme toggle"
            >
              {(["dark", "light"] as const).map((mode) => {
                const active = theme === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTheme(mode)}
                    className="relative z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize transition-colors duration-200 cursor-pointer"
                    style={{
                      color: active ? "#FFFFFF" : "var(--text-secondary)",
                    }}
                    aria-pressed={active}
                  >
                    {active && (
                      <motion.span
                        layoutId="theme-toggle-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full"
                        style={{
                          backgroundColor:
                            mode === "dark" ? "#1E1E1E" : "#111111",
                        }}
                      />
                    )}
                    {mode === "dark" ? (
                      <Moon className="w-3 h-3" />
                    ) : (
                      <Sun className="w-3 h-3" />
                    )}
                    <span className="hidden sm:inline">{mode}</span>
                  </button>
                );
              })}
            </div>

            {/* Burnt-Orange Pill CTA */}
            <button
              type="button"
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 8px 24px -6px rgba(212, 72, 22, 0.55)",
              }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border cursor-pointer"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--pill-bg)",
                color: "var(--text-primary)",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto lg:hidden mx-auto mt-2 max-w-7xl rounded-3xl border p-5 backdrop-blur-2xl"
            style={{
              backgroundColor: "var(--nav-bg)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium py-1.5 transition-colors cursor-pointer"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onStartProject();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold text-white cursor-pointer"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
