import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "smartfinds — Discover useful products and ideas",
    template: "%s",
  },
  description:
    "smartfinds is an independent product discovery project creating useful guides and publishing visual content across social platforms.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "smartfinds — Discover useful products and ideas",
    description:
      "Independent product discovery and informational content project helping users explore practical ideas and recommendations.",
    siteName: "smartfinds",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
