import { ImageResponse } from "next/og";
import { OgImageContent } from "@/lib/ogImageContent";

export const runtime = "nodejs";
export const alt = "Nexa Construction Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
