import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOCTIS TECHNOLOGIES — Virtual Web-Development Agency",
    template: "%s | NOCTIS TECHNOLOGIES",
  },
  description:
    "NOCTIS TECHNOLOGIES is a virtual web-development agency combining human-led delivery with a coordinated team of AI agents. Design, engineering, and growth — delivered with intent.",
  keywords: [
    "NOCTIS",
    "web development agency",
    "AI agents",
    "Next.js development",
    "virtual agency",
    "web engineering",
  ],
  authors: [{ name: "NOCTIS TECHNOLOGIES" }],
  creator: "NOCTIS TECHNOLOGIES",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NOCTIS TECHNOLOGIES",
    title: "NOCTIS TECHNOLOGIES — Virtual Web-Development Agency",
    description:
      "Human-led delivery, coordinated by a team of AI agents. Design, engineering, and growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOCTIS TECHNOLOGIES",
    description:
      "Virtual web-development agency. Human-led. Agent-coordinated.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080B12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-textPrimary antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
    }
