"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";
import { Separator } from "@repo/design-system/components/ui/separator";
import { SidebarTrigger } from "@repo/design-system/components/ui/sidebar";
import { Fragment, useState, type ReactNode } from "react";
import Logo from "./logo";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/design-system/components/ui/popover"
import { Button } from "@repo/design-system/components/ui/button";
import { Label } from "@repo/design-system/components/ui/label";
import { Input } from "@repo/design-system/components/ui/input";


import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { ProfileMenu } from "./profile-menu";
import { ProfileCredit } from "./profile-credit";


type HeaderProps = {
  pages: string[];
  page: string;
};


export const Header = ({ pages, page }: HeaderProps) => {

  return (
    <header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b sticky top-0 pl-4 pr-8 z-50 bg-black">
      <div className="flex items-center justify-between gap-2 w-full">
        <Logo />

        <div className="flex items-center">
          <ProfileCredit />
          <ProfileMenu />
        </div>
      </div>
    </header>
  )


}





