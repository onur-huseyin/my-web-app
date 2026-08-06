import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import HtmlLangSync from "@/components/layout/HtmlLangSync";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hüseyin Onur — Senior Full Stack Developer",
  description:
    "Full Stack Developer specializing in .NET, Node.js, React and cloud technologies. Building scalable backend systems, modern web applications, and high-performance APIs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full antialiased",
        spaceGrotesk.variable,
        inter.variable,
        geistMono.variable,
      )}
    >
      <body className="cursor-enabled relative flex min-h-full flex-col bg-bg text-fg selection:bg-accent">
        <div className="grain-overlay" aria-hidden="true" />
        <HtmlLangSync />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
