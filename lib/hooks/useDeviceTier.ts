"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "mobile" | "tablet" | "desktop";

export function useDeviceTier() {
  const [tier, setTier] = useState<DeviceTier>("desktop");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function update() {
      const width = window.innerWidth;
      setTier(width < 768 ? "mobile" : width < 1280 ? "tablet" : "desktop");
      setReducedMotion(motionQuery.matches);
      setReady(true);
    }

    update();
    window.addEventListener("resize", update);
    motionQuery.addEventListener("change", update);
    return () => {
      window.removeEventListener("resize", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return {
    tier,
    reducedMotion,
    ready,
    canRender3D: ready && tier !== "mobile" && !reducedMotion,
  };
}
