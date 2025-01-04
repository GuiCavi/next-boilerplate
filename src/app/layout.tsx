import { fontVariables } from "@/assets/fonts/fonts";
import { ThemeProvider } from "@/providers";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Boilerplate",
  description: "Boilerplate for Next Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${fontVariables.join(" ")} antialiased`}
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
  );
}
