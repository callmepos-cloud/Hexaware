"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    id: 1,
    zero: "Zero",
    noun: "Tech Debt",
    description:
      "Build scalable, maintainable architectures that accelerate innovation.",
    accent: "#6366f1", // indigo
    accentDim: "rgba(99,102,241,0.08)",
    accentBorder: "rgba(99,102,241,0.25)",
    accentGlow: "rgba(99,102,241,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 2,
    zero: "Zero",
    noun: "Vulnerability",
    description:
      "Strengthen security posture with proactive protection and resilience.",
    accent: "#8b5cf6", // violet
    accentDim: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.25)",
    accentGlow: "rgba(139,92,246,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 3,
    zero: "Zero",
    noun: "Backlog",
    description:
      "Accelerate delivery through streamlined workflows and agile execution.",
    accent: "#06b6d4", // cyan
    accentDim: "rgba(6,182,212,0.08)",
    accentBorder: "rgba(6,182,212,0.25)",
    accentGlow: "rgba(6,182,212,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 4,
    zero: "Zero",
    noun: "Tickets",
    description:
      "Enable proactive operations that resolve issues before users notice them.",
    accent: "#10b981", // emerald
    accentDim: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.25)",
    accentGlow: "rgba(16,185,129,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 5,
    zero: "Zero",
    noun: "DSO",
    description:
      "Improve financial velocity through optimized billing and collections.",
    accent: "#f59e0b", // amber
    accentDim: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.25)",
    accentGlow: "rgba(245,158,11,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 6,
    zero: "Zero",
    noun: "License",
    description:
      "Maximize technology investments while reducing software overhead.",
    accent: "#ec4899", // pink
    accentDim: "rgba(236,72,153,0.08)",
    accentBorder: "rgba(236,72,153,0.25)",
    accentGlow: "rgba(236,72,153,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

function FeatureCard({
  feature,
  index,
  isVisible,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="relative h-full rounded-2xl p-px overflow-hidden"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${feature.accentBorder}, rgba(255,255,255,0.06), ${feature.accentBorder})`
            : "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
          transition: "background 0.4s ease",
        }}
      >
        <div
          className="relative h-full rounded-2xl p-7 flex flex-col gap-5 overflow-hidden"
          style={{
            background: hovered
              ? `linear-gradient(145deg, rgba(10,10,18,0.98), rgba(10,10,18,0.95))`
              : "rgba(10,10,18,0.95)",
            transition: "background 0.4s ease",
          }}
        >
          {/* Ambient glow on hover */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 20% 20%, ${feature.accentGlow}, transparent 70%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Top row: icon + index */}
          <div className="relative flex items-start justify-between">
            {/* Icon container */}
            <div
              className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: hovered ? feature.accentDim : "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? feature.accentBorder : "rgba(255,255,255,0.06)"}`,
                color: hovered ? feature.accent : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease",
              }}
            >
              {feature.icon}
            </div>

            {/* Subtle index tag */}
            <span
              className="text-[10px] font-mono font-semibold tracking-widest uppercase"
              style={{
                color: hovered ? feature.accent : "rgba(255,255,255,0.15)",
                transition: "color 0.3s ease",
              }}
            >
              0{feature.id}
            </span>
          </div>

          {/* Zero + Noun */}
          <div className="relative flex flex-col gap-0.5">
            {/* "Zero" — the visual anchor */}
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  color: feature.accent,
                  fontVariantNumeric: "tabular-nums",
                  transition: "opacity 0.3s ease",
                  opacity: hovered ? 1 : 0.85,
                }}
              >
                {feature.zero}
              </span>
              {/* Connector line */}
              <span
                className="flex-shrink-0 h-px w-3"
                style={{
                  background: feature.accentBorder,
                  marginBottom: "3px",
                  opacity: hovered ? 1 : 0.4,
                  transition: "opacity 0.3s ease, width 0.3s ease",
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
              {feature.noun}
            </h3>
          </div>

          {/* Description */}
          <p
            className="relative text-sm leading-relaxed font-normal"
            style={{
              color: hovered ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.4)",
              transition: "color 0.3s ease",
            }}
          >
            {feature.description}
          </p>

          {/* Bottom: learn more arrow */}
          <div
            className="relative mt-auto flex items-center gap-2"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0)" : "translateX(-6px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <span
              className="text-xs font-semibold tracking-wide uppercase"
              style={{ color: feature.accent }}
            >
              Explore
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{ color: feature.accent }}
            >
              <path
                d="M1 6h10M7 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-7 right-7 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
              opacity: hovered ? 0.6 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* Animated connecting SVG between cards */
function ConnectingLines() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 520"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGradH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99,102,241,0)" />
            <stop offset="30%" stopColor="rgba(99,102,241,0.15)" />
            <stop offset="70%" stopColor="rgba(139,92,246,0.15)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </linearGradient>
          <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99,102,241,0)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.12)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>
        {/* Horizontal connector row 1 */}
        <line x1="400" y1="130" x2="800" y2="130" stroke="url(#lineGradH)" strokeWidth="1" />
        {/* Horizontal connector row 2 */}
        <line x1="400" y1="390" x2="800" y2="390" stroke="url(#lineGradH)" strokeWidth="1" />
        {/* Vertical connector col 2 */}
        <line x1="600" y1="130" x2="600" y2="390" stroke="url(#lineGradV)" strokeWidth="1" />
        {/* Intersection dots */}
        <circle cx="600" cy="130" r="2.5" fill="rgba(99,102,241,0.3)" />
        <circle cx="600" cy="390" r="2.5" fill="rgba(139,92,246,0.3)" />
      </svg>
    </div>
  );
}

export default function ZeroDistance() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#06060a] py-28 md:py-36 overflow-hidden"
    >
      {/* Section-level ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full bg-violet-600/5 blur-[80px]" />
      </div>

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="max-w-2xl mb-20 md:mb-24"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-indigo-400">
              Our Philosophy
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.08]">
            Zero{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-indigo-300 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                Distance
              </span>
              {/* Underline accent */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(99,102,241,0.6), rgba(167,139,250,0.4), transparent)",
                }}
              />
            </span>
          </h2>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            Eliminating friction across technology, operations, security,
            finance, and support to help businesses move faster.
          </p>
        </div>

        {/* Grid */}
        <div className="relative">
          <ConnectingLines />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/[0.05]"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
            Every capability is purpose-built to eliminate a specific category
            of enterprise friction.
          </p>
          <button className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/[0.12] text-white/70 hover:text-white text-sm font-medium transition-all duration-200">
            View all capabilities
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transform group-hover:translate-x-0.5 transition-transform duration-200"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
