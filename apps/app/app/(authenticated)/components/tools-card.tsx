"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@repo/design-system/lib/utils";
import { Button } from "@repo/design-system/components/ui/button";

type ToolsCardProps = {
  title: string;
  videoSrc: string;
  posterSrc: string;
  href: string;
  className?: string;
  previewAt?: number; // seconds
};

export const ToolsCard = ({
  title,
  videoSrc,
  posterSrc,
  href,
  className,
  previewAt = 1.5,
}: ToolsCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.currentTime = previewAt;
    video.play().catch(() => { });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    // reset back to the preview timestamp
    video.currentTime = previewAt;
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative z-0 w-full max-w-[290px] cursor-pointer",
        "rounded-lg overflow-hidden border border-white/10 bg-[#0f0f14]",
        "gradient-border",
        className
      )}
    >
      <div className="gradient-border-item relative h-full overflow-hidden rounded-lg">
        {/* Video Section */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            className="size-full object-cover bg-black z-1 rounded-t-lg"
            poster={posterSrc}
            src={videoSrc}
            playsInline
            loop
            preload="metadata"
            controlsList="nodownload"
          />

          {/* Hover Button */}
          <div className="absolute bottom-3 left-1/2 z-3 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              className="relative overflow-hidden flex justify-center rounded-full font-semibold text-xs px-6 bg-linear-to-b from-[#C721FF] to-[#FF3466] text-white hover:opacity-90"
            >
              <Link href={href} className="relative z-2 whitespace-nowrap inline-block!">
                Use This Tool
              </Link>
            </Button>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-wrap gap-1 p-3 text-sm">
          <Link
            href={href}
            className="relative w-full truncate text-f-text-secondary group-hover:text-white transition-colors duration-200"
          >
            {title}
          </Link>
        </div>

        {/* Subtle gradient border */}
        <div className="pointer-events-none absolute inset-0 z-[-1] rounded-lg bg-linear-to-br from-[#C721FF]/20 to-[#FF3466]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};
