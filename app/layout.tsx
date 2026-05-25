import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const saansTrial = localFont({
  src: "../public/fonts/saans-font-family/SaansCollectionVF-TRIAL.ttf",
  variable: "--font-saans-trial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", saansTrial.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full bg-white font-sans text-black">
        {children}
      </body>
    </html>
  );
}
