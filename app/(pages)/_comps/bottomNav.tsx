"use client"

import React from "react"
import { usePathname, useRouter } from "next/navigation"
import { TextB } from "@/comps"
import { cn } from "@/lib"
import {
  Cog,
  LucideDollarSign,
  LucideIcon,
  MessageCircle,
  UserCog,
} from "lucide-react"

export function BottomNav() {
  const router = useRouter()
  const path = usePathname()

  function isActive(link: string): boolean {
    if (link === path) {
      return true
    }
    return false
  }

  return (
    <div className={"fixed bottom-0 h-[60px] border-t border-cyan-50 w-full"}>
      <div className="flex justify-between items-center w-full px-8 py-2 h-full">
        {navItems.map(({ Icon, title, link }, i) => {
          return (
            <div
              onClick={() => router.push(link)}
              key={i}
              className={cn(
                `h-full 
              flex flex-col items-center justify-center 
              w-full rounded-lg`,
                isActive(link) ? "bg-secondary" : "bg-primary"
              )}
            >
              <Icon className={"text-primary-foreground"} />
              <TextB v="p6" className={"text-primary-foreground"}>
                {title}
              </TextB>
            </div>
          )
        })}
      </div>
    </div>
  )
}
const navItems: { title: string; Icon: LucideIcon; link: string }[] = [
  {
    title: "Friends",
    link: "/friends",
    Icon: UserCog,
  },
  {
    title: "Chat",
    link: "/chat",
    Icon: MessageCircle,
  },
  {
    title: "Market",
    link: "/market",
    Icon: LucideDollarSign,
  },
  {
    title: "Settings",
    link: "/settings",
    Icon: Cog,
  },
]
