"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/app/comps"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* <Moon className="hidden h-5 w-5 dark:block" />
      <Sun className="h-[1.5rem] w-[1.3rem] block dark:hidden" /> */}
      {theme === "light" ? (
        <Moon className="h-[1.5rem] w-[1.3rem" />
      ) : (
        <Sun className="h-[1.5rem] w-[1.3rem" />
      )}
    </Button>
  )
}
