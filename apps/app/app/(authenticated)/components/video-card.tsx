"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@repo/design-system/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/design-system/components/ui/tooltip";
import { cn } from "@repo/design-system/lib/utils";
import { ArrowDownToLine, Ellipsis, Heart, Music2, Share2, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { CiImageOff, CiImageOn } from "react-icons/ci";
import { MdOutlinePlayArrow } from "react-icons/md";
import { PiLinkSimple } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

interface VideoCardProps {
  videoSrc: string;
  posterSrc: string;
  userName: string;
  userAvatar?: string;
  likes?: number;
  href?: string;
  isPortrait?: boolean;
}

export function VideoCard({
  videoSrc,
  posterSrc,
  userName,
  userAvatar,
  likes = 0,
  href,
  isPortrait = false,
}: VideoCardProps) {

  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = true    // must be muted for autoplay
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className={cn(
        "bg-f-bg-layout relative w-full cursor-pointer rounded-lg md:rounded-xl group overflow-hidden",
        isPortrait ? "aspect-9/16" : "aspect-video"
      )}
    >
      {/* Play Icon */}
      <span className="inline-flex justify-center items-center absolute start-2 top-2 z-1 size-6 bg-black/25 rounded-full group-hover:hidden">
        <MdOutlinePlayArrow />
      </span>

      <div className="text-f-text relative size-full">
        <div
          className="relative size-full rounded-lg md:rounded-xl overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Video */}
          <video
            ref={videoRef}
            className="bg-black bg-cover bg-center object-cover size-full cursor-pointer rounded-lg md:rounded-xl"
            poster={posterSrc}
            src={videoSrc}
            playsInline
            webkit-playsinline="true"
            controlsList="nodownload"
            loop
            muted
            preload="metadata"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 start-0 flex w-full flex-col bg-linear-to-b from-black/0 to-black/80 p-2">
            {/* User (hover state) */}
            <div className="hidden group-hover:flex">
              <div className="hover:text-f-primary inline-flex cursor-pointer items-center gap-x-2">
                <div className="bg-f-orange-6 relative flex size-6 items-center justify-center rounded-full text-white hover:cursor-pointer">
                  {userAvatar ? (
                    <figure className="relative size-full overflow-hidden rounded-full">
                      <Image
                        alt={userName}
                        src={userAvatar}
                        fill
                        className="size-full object-cover"
                      />
                    </figure>
                  ) : (
                    <span className="text-xs leading-none">
                      {userName[0].toUpperCase()}
                    </span>
                  )}
                </div>
                <span className="line-clamp-1 max-w-[200px] text-sm">
                  {userName}
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-0 flex flex-wrap items-center justify-between gap-1 group-hover:mt-3">
              {/* Try Tool Button */}
              <div className="flex h-[34px] flex-1 items-center">
                {href && (
                  <Button
                    type="button"
                    className="text-f-other-9 relative overflow-hidden rounded-full font-semibold text-xs/4 px-4 py-1.5 bg-linear-to-b from-[#C721FF] to-[#FF3466] hidden group-hover:block"
                  >
                    <div className="whitespace-nowrap opacity-0">
                      <span>Try the Same Tool</span>
                    </div>
                    <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center whitespace-nowrap">
                      <span>Try the Same Tool</span>
                    </div>
                    <div className="absolute inset-0 z-1 bg-black/0 transition-all duration-300 hover:bg-black/15" />
                  </Button>
                )}

                {/* Static User on Idle */}
                <div className="flex">
                  <div className="hover:text-f-primary inline-flex cursor-pointer items-center gap-x-2 group-hover:hidden">
                    <div className="bg-f-orange-6 relative flex size-6 items-center justify-center rounded-full text-white hover:cursor-pointer group-hover:hidden">
                      {userAvatar ? (
                        <figure className="relative size-full overflow-hidden rounded-full">
                          <Image
                            alt={userName}
                            src={userAvatar}
                            fill
                            className="size-full object-cover"
                          />
                        </figure>
                      ) : (
                        <span className="text-xs leading-none">
                          {userName[0].toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="line-clamp-1 max-w-[200px] text-sm">
                      {userName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Like + More */}
              <div className="flex items-center gap-x-1">
                <div className={cn(
                  "flex flex-wrap items-center gap-2 gap-x-1.5 opacity-0 transition-all",
                  open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}>
                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                      <div className="coco-dropdown-trigger [&>*:first-child]:w-full">
                        <div className="bg-black/25 flex cursor-pointer items-center gap-x-1 p-1 transition-all rounded-md text-f-other-9">

                          <span className="inline-flex justify-center items-center size-4">
                            <Ellipsis className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="max-w-32"
                      align="start"
                      onMouseLeave={() => setOpen(false)}
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="text-xs">
                            <ArrowDownToLine />
                            Download
                          </DropdownMenuSubTrigger>

                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem className="text-xs">
                                <CiImageOff />
                                Download with watermark
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-xs">
                                <CiImageOn />
                                Download without watermark
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="text-xs">
                            <Share2 />
                            Share
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem className="text-xs">
                                <BsTwitterX />
                                Share to X
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-xs">
                                <FaFacebookF />
                                Share to Facebook
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>

                      <DropdownMenuItem className="text-xs">
                        <PiLinkSimple />
                        Copy Link
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-xs">
                        <TriangleAlert />
                        Report
                      </DropdownMenuItem>

                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="bg-black/25 hover:bg-black/10 flex h-6 cursor-pointer items-center justify-center gap-x-1 rounded-md px-2 text-xs">
                  <span className="order-1">{likes}</span>
                  <span className="inline-flex justify-center items-center size-4 order-2">
                    <Heart className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Top-right sound icon */}
      <Tooltip>
        <TooltipTrigger asChild className="absolute end-2 top-2 flex items-center gap-x-1">
          <div className="bg-black/25 flex size-6 cursor-default items-center justify-center rounded-md">
            <Music2 className="w-3 h-3" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-accent text-foreground">
          <span>This video has sounds.</span>
        </TooltipContent>
      </Tooltip>
    </div >
  );
}
