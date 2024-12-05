import { Inter as Font } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const font = Font({
  weight: ["100", "400", "700"],
  display: "swap",
});

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
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
