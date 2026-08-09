"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDeviceTier } from "@/lib/hooks/useDeviceTier";
import { HeroFallback } from "./HeroFallback";
import type { ProgressRef } from "./Beam";

const SteelFrameCanvas = dynamic(() => import("./SteelFrameCanvas"), { ssr: false });

export function Hero3D({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<{ value: number }>({ value: 0 }) as ProgressRef;
  const { canRender3D, ready } = useDeviceTier();

  useEffect(() => {
    if (!canRender3D || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        progressRef.current.value = self.progress;
      },
    });

    return () => trigger.kill();
  }, [canRender3D]);

  const showCanvas = ready && canRender3D;

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-charcoal-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {showCanvas ? (
          <div className="absolute inset-0">
            <SteelFrameCanvas progressRef={progressRef} />
          </div>
        ) : (
          <HeroFallback />
        )}
        <div className="relative z-10 flex h-full items-center">{children}</div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950 to-transparent" />
      </div>
    </section>
  );
}
