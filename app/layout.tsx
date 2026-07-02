import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fraunces is a variable font. When `axes` is specified, `weight` must be
// omitted (or set to "variable") — the axes cover the full weight range.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exist.im"),
  title: {
    default: "exist. — Identity governance for generative systems",
    template: "%s — exist.",
  },
  description:
    "exist. introduces refusal into generative processes. A governance system for identity, not a tool. Most ideas are rejected. What disappears is allowed to disappear.",
  openGraph: {
    title: "exist. — Identity governance for generative systems",
    description:
      "A governance system for identity in generative environments. Framework by Marian Dorobanțu. MozFest 2026.",
    url: "https://exist.im",
    siteName: "exist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "exist.",
    description:
      "Identity governance for generative systems. Framework by Marian Dorobanțu.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
