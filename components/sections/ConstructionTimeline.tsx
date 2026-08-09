"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui/Section";

const stages = [
  {
    label: "Plan",
    title: "Understand the project",
    description: "Scope, timing and site requirements are confirmed before anyone is sourced.",
  },
  {
    label: "People",
    title: "Match the workforce",
    description: "Workers and trades are identified against the specific requirement — not a generic pool.",
  },
  {
    label: "Build",
    title: "Deploy to site",
    description: "Workers are briefed and placed on-site, working within your project's structure.",
  },
  {
    label: "Deliver",
    title: "Support through completion",
    description: "Nexa stays available as requirements shift through the life of the project.",
  },
];

export function ConstructionTimeline({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        noPreference: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduce } = context.conditions as { reduce: boolean };
        const items = gsap.utils.toArray<HTMLElement>(".timeline-stage");

        if (reduce) {
          gsap.set(items, { opacity: 1, y: 0 });
          gsap.set(".timeline-line-fill", { scaleX: 1 });
          return;
        }

        gsap.set(items, { opacity: 0, y: 32 });

        items.forEach((item, i) => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
            delay: i * 0.05,
          });
        });

        gsap.fromTo(
          ".timeline-line-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          },
        );
      },
    );

    return () => mm.revert();
  }, []);

  const isDark = tone === "dark";

  return (
    <div ref={containerRef} className="relative">
      <Eyebrow>How Nexa Works</Eyebrow>
      <h2
        className={`font-display mt-3 text-3xl font-medium tracking-tight uppercase md:text-4xl ${isDark ? "text-offwhite" : "text-charcoal-900"}`}
      >
        Plan. People. Build. Deliver.
      </h2>

      <div className="relative mt-12">
        <div
          className={`absolute top-6 right-0 left-0 hidden h-px md:block ${isDark ? "bg-white/15" : "bg-charcoal-900/15"}`}
        >
          <div
            className="timeline-line-fill h-full origin-left bg-amber-500"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {stages.map((stage, index) => (
            <div key={stage.label} className="timeline-stage relative">
              <div className="flex items-center gap-3 md:block">
                <span className="font-display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-amber-500 bg-charcoal-950 text-sm font-semibold text-amber-500 md:mb-5">
                  0{index + 1}
                </span>
                <p
                  className={`font-display text-xs tracking-[0.2em] uppercase md:mt-0 ${isDark ? "text-amber-400" : "text-amber-600"}`}
                >
                  {stage.label}
                </p>
              </div>
              <h3 className={`mt-3 text-lg font-semibold ${isDark ? "text-offwhite" : "text-charcoal-900"}`}>
                {stage.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-concrete-300" : "text-charcoal-700"}`}>
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
