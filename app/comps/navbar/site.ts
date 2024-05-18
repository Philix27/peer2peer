"use client"
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ChatUp",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
}
