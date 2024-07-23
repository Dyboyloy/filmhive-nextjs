"use client"

import { ThemeProvider } from "next-themes"

export default function Provider({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-gray-800 dark:text-gray-100 select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}
