import { Inter as FontTitle } from "next/font/google";
import { Montserrat as FontBody } from "next/font/google";

export const fontTitle = FontTitle({
  weight: ["100", "400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-title",
});

export const fontBody = FontBody({
  weight: ["100", "400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
});

export const fontVariables = [
  fontTitle,
  fontBody,
].map(f => f.variable);
