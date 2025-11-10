"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from "@repo/design-system/components/ui/navigation-menu";
import { Button } from "@repo/design-system/components/ui/button";
import { Avatar, AvatarFallback } from "@repo/design-system/components/ui/avatar";
import Link from "next/link";
import { useIsMobile } from "@repo/design-system/hooks/use-mobile";
import { cn } from "@repo/design-system/lib/utils";
import { ChevronRight } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
  highlight?: boolean;
};

const menuItems: MenuItem[] = [
  {
    label: "Language",
    submenu: [
      { label: "English", href: "/home" },
      { label: "Español", href: "/es/home" },
      { label: "Français", href: "/fr/home" },
      { label: "Português", href: "/pt/home" },
      { label: "Italiano", href: "/it/home" },
      { label: "日本語", href: "/ja/home" },
      { label: "ภาษาไทย", href: "/th/home" },
      { label: "Polski", href: "/pl/home" },
      { label: "한국어", href: "/ko/home" },
      { label: "Deutsch", href: "/de/home" },
      { label: "Русский", href: "/ru/home" },
      { label: "Dansk", href: "/da/home" },
      { label: "العربية", href: "/ar/home" },
      { label: "Norsk bokmål", href: "/nb/home" },
      { label: "Nederlands", href: "/nl/home" },
      { label: "Bahasa Indonesia", href: "/id/home" },
      { label: "繁體中文", href: "/tw/home" },
      { label: "简体中文", href: "/zh/home" },
      { label: "Türkçe", href: "/tr/home" },
    ],
  },
  { label: "My Creations", href: "/my-creations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Refer a Friend", href: "/app/refer", highlight: true },
  { label: "Contact Us", href: "mailto:support@pollo.ai" },
  { label: "Profile", href: "/profile/tommy605987" },
  { label: "Account Settings", href: "/settings" },
  { label: "Logout" },
];

export const ProfileMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger showCaret className="bg-transparent!">
            <Avatar>
              <AvatarFallback className="bg-amber-950 text-white">T</AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="md:w-[220px] overflow-visible! absolute left-0 right-auto md:left-auto md:right-0">
            <div className="flex flex-col gap-1">
              {menuItems.map((menuItem, key) => {
                if (menuItem.submenu) {
                  return (
                    <div
                      key={key}
                      className="relative group"
                      onMouseEnter={() => {
                        setOpenSubmenu(key);
                        setHovering(true);
                      }}
                      onMouseLeave={() => setHovering(false)}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex justify-start items-center w-full px-2 py-1.5",
                          openSubmenu === key && hovering ? "bg-white/5" : ""
                        )}
                      >
                        {menuItem.label}
                        <span><ChevronRight className="w-3! h-3! mt-0.5" /></span>
                      </Button>

                      {/* Flyout submenu */}
                      {openSubmenu === key && hovering && (
                        <div className="absolute top-0 right-full -mt-1.5 ml-2 z-auto">
                          <div className="grid grid-cols-2 gap-2 p-2 border border-gray-600 rounded-md shadow-lg w-56 bg-card">
                            {menuItem.submenu.map((submenuItem, submenuKey) => (
                              <Button key={submenuKey} variant="ghost" asChild>
                                <a
                                  href={submenuItem.href}
                                  className="w-full text-left text-sm"
                                >
                                  {submenuItem.label}
                                </a>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                } else if (menuItem.href) {
                  return (
                    <ListItem key={key} href={menuItem.href} highlightClass={menuItem.highlight ? "bg-[linear-gradient(270deg,#FFBE26_0%,#FF5C2E_25.5%,#417AF0_47.37%,#75E9E3_72.5%,#DCFF63_100%)] bg-clip-text text-base font-semibold text-transparent" : ""}>
                      {menuItem.label}
                    </ListItem>
                  );
                } else {
                  return (
                    <Button key={key} variant="ghost" className="justify-start w-full px-2 py-1.5">
                      {menuItem.label}
                    </Button>
                  );
                }
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}


function ListItem({
  children,
  href,
  highlightClass,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, highlightClass: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="text-sm px-2 py-1.5 font-medium ">
        <div className={cn(
          "line-clamp-2 leading-[22px] relative",
          highlightClass
        )}>
          {children}
        </div>
      </Link>
    </NavigationMenuLink>
  )
}