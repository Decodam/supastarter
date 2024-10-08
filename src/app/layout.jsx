import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/context/themeProvider"; 

import { cn } from "@/utils/cn.utils";

export const metadata = {
  title: "Supastarter - Auth Kit",
  description: "Supabase Next Js auth starter kit",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
