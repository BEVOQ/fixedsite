import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Algarve Luxury Studio",
  description: "Landscaping, renovations, and microcement in the Algarve — calm, architectural, premium.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
