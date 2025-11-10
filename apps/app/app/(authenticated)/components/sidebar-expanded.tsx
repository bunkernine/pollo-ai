"use client";


import { Button } from "@repo/design-system/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/design-system/components/ui/sidebar";
import { Badge } from "@repo/design-system/components/ui/badge"

import Link from "next/link";
import type { ReactNode } from "react";
import { SiX, SiInstagram, SiYoutube, SiDiscord } from "react-icons/si"
import { LuCrown } from "react-icons/lu";
import sidebarData from "../constants/sidebar-constants";
import { usePathname } from "next/navigation";
import { cn } from "@repo/design-system/lib/utils";

type GlobalSidebarProperties = {
  readonly children: ReactNode;
};




export const SidebarExpanded = ({ children }: GlobalSidebarProperties) => {
  const pathname = usePathname();

  return (
    <>
      <Sidebar variant="sidebar" className="px-4 pb-6 top-12 h-[calc(100%-3rem)]">
        <SidebarHeader className="my-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <Button className="w-full text-accent-foreground bg-accent-foreground/25 border border-accent-foreground">
                Create New
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarMenu>
              {sidebarData.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      key={item.url}
                      href={item.url}
                      className={cn(
                        "leading-relaxed mb-0.5 transition-colors",
                        pathname === item.url
                          ? "bg-white/10 text-accent-foreground"
                          : "hover:bg-white/10"
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="group-data-[collapsible=icon]:hidden px-0">
            <SidebarGroupLabel>Creation</SidebarGroupLabel>
            <SidebarMenu>
              {sidebarData.navCreation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      key={item.url}
                      href={item.url}
                      className={cn(
                        "leading-relaxed mb-0.5 transition-colors",
                        pathname === item.url
                          ? "bg-white/10 text-accent-foreground"
                          : "hover:bg-white/10"
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>

                      {item.beta && <Badge variant="destructive" className="text-[8px] uppercase">Beta</Badge>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="group-data-[collapsible=icon]:hidden border-b border-gray-700 px-0">
            <SidebarGroupLabel>Entertainment</SidebarGroupLabel>
            <SidebarMenu>
              {sidebarData.navEntertainment.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      key={item.url}
                      href={item.url}
                      className={cn(
                        "leading-relaxed mb-0.5 transition-colors",
                        pathname === item.url
                          ? "bg-white/10 text-accent-foreground"
                          : "hover:bg-white/10"
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="px-0">
            <SidebarMenu>
              {sidebarData.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      key={item.url}
                      href={item.url}
                      className={cn(
                        "leading-relaxed mb-0.5 transition-colors",
                        pathname === item.url
                          ? "bg-white/10 text-accent-foreground"
                          : "hover:bg-white/10"
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="mt-auto px-0">
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarData.navExtra.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        key={item.url}
                        href={item.url}
                        className={cn(
                          "leading-relaxed mb-0.5 transition-colors",
                          pathname === item.url
                            ? "bg-white/10 text-accent-foreground"
                            : "hover:bg-white/10"
                        )}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>

              <Button
                className="w-full! font-semibold hover:opacity-90 xl:bg-linear-to-r! xl:from-[#C721FF] xl:to-[#FF3466] gap-0 bg-transparent bg-none p-0 xl:w-auto xl:gap-2"
              >
                <LuCrown />
                Upgrade Now
              </Button>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="mt-3 pt-3 border-t border-gray-700">
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-center gap-4">

              <SiX />
              <SiInstagram />
              <SiYoutube />
              <SiDiscord />

            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>


      <SidebarInset className="min-h-[calc(100dvh-3rem)]">{children}</SidebarInset>
    </>
  );
};
