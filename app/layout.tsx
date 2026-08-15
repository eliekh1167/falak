import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FALAK — Aerospace & Engineering, a YFP Initiative",
    template: "%s — FALAK",
  },
  description:
    "FALAK is a student-run aerospace and engineering program reviving Lebanon's orbital ambitions, operating under Youth for Physics (YFP). UAV engineering, CubeSat development, and hands-on research.",
  metadataBase: new URL("https://falak.youthforphysics.org"),
  openGraph: {
    title: "FALAK — Aerospace & Engineering, a YFP Initiative",
    description:
      "A student-run aerospace and engineering program reviving Lebanon's orbital ambitions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-void">
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        <MotionProvider>
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
