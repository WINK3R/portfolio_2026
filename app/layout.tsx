import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      className={`${saansTrial.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-black">
        {children}
      </body>
    </html>
  );
}
