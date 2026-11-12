import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  title: "hüseyin onur — fullstack",
  description:
    "Hüseyin Onur — fullstack geliştirici. .NET, Node.js ve React ile api, panel ve canlı ürünler.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark h-full antialiased",
        spaceGrotesk.variable,
        inter.variable,
        geistMono.variable,
      )}
    >
      <body className="relative flex min-h-full flex-col bg-bg text-fg selection:bg-accent selection:text-on-accent">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t="dark";document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})();`}
        </Script>
        <HtmlLangSync />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
