"use client";

import dynamic from "next/dynamic";
import { useDeviceTier } from "@/lib/hooks/useDeviceTier";

const AbstractCanvas = dynamic(() => import("./AbstractCanvas"), { ssr: false });

export function AbstractScene({ className = "" }: { className?: string }) {
  const { canRender3D, ready } = useDeviceTier();
  const showCanvas = ready && canRender3D;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="blueprint-grid-dark absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(232,135,30,0.12),transparent_60%)]" />
      {showCanvas ? <AbstractCanvas /> : null}
    </div>
  );
}
