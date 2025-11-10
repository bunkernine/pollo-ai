"use client";

import Image from "next/image";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@repo/design-system/components/ui/item";
import { Badge } from "@repo/design-system/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/design-system/components/ui/tooltip";

type GridItem = {
  name: string;
  description?: string;
  icon?: string;
  href?: string;
  tag?: string; // "new" | "hot" | "video" | "audio"
  id?: string | number;
  buttonMode?: "none" | "hover" | "fixed";
};

type GridListProps = {
  items: GridItem[];
  previewOnHover?: boolean;
  previewSize?: number;
  defaultButtonMode?: "none" | "hover" | "fixed";
};

export const GridList = ({
  items,
  previewOnHover = true,
  previewSize = 60,
  defaultButtonMode = "hover",
}: GridListProps) => {
  const getBadgeColor = (tag?: string) => {
    if (!tag) return "bg-gray-300 text-gray-800";
    const t = tag.toLowerCase();
    if (t === "new") return "bg-green-500 text-white";
    if (["hot", "video", "audio"].includes(t)) return "bg-red-500 text-white";
    return "bg-gray-300 text-gray-800";
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {items.map((item) => {
          const id = item.id ?? item.name;
          const tooltipEnabled = previewOnHover && !!item.icon;
          const buttonMode = item.buttonMode ?? defaultButtonMode;

          const MediaContent = (
            <div className="bg-f-other-6 flex size-12 items-center justify-center rounded-xl overflow-hidden">
              {item.icon ? (
                <div className="size-8 rounded-lg bg-black p-1">
                  <div className="relative size-full transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="size-8 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  N/A
                </div>
              )}
            </div>
          );

          return (
            <Item
              key={id}
              variant="outline"
              size="sm"
              asChild
              className="group flex items-center gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-f-bg-elevated focus-within:bg-f-bg-elevated"
            >
              <a href={item.href ?? "#"}>
                <ItemMedia>
                  {tooltipEnabled ? (
                    <Tooltip>
                      <TooltipTrigger asChild>{MediaContent}</TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="center"
                        className="rounded-lg border bg-accent p-2 shadow-lg"
                      >
                        <div
                          className="relative"
                          style={{
                            width: previewSize,
                            height: previewSize,
                          }}
                        >
                          <Image
                            src={item.icon!}
                            alt={`${item.name} preview`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    MediaContent
                  )}
                </ItemMedia>

                <ItemContent>
                  <div className="flex flex-wrap items-center gap-1">
                    <ItemTitle className="text-sm font-semibold text-f-text">
                      {item.name}
                    </ItemTitle>
                    {item.tag && (
                      <Badge
                        variant="secondary"
                        className={`${getBadgeColor(
                          item.tag
                        )} text-[10px] font-medium`}
                      >
                        {item.tag}
                      </Badge>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-f-text-tertiary truncate">
                      {item.description}
                    </p>
                  )}
                </ItemContent>

                {buttonMode !== "none" && (
                  <ItemActions
                    className={
                      buttonMode === "fixed"
                        ? "ml-auto flex"
                        : "ml-auto hidden group-hover:flex"
                    }
                  >
                    <button className="bg-black/50 hover:bg-accent rounded-full px-3 py-1 text-xs transition-colors duration-300">
                      Try
                    </button>
                  </ItemActions>
                )}
              </a>
            </Item>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
