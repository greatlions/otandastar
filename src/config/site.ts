import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Kuryltai",
  author: "Batyrbek",
  description:
    "Проект для Kuryltai",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "Batyrbek",
  },
  links: {
    github: "https://github.com/Batrbekk",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
