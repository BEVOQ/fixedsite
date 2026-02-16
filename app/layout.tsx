import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { absoluteUrl, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Algarve Luxury Studio",
    template: "%s"
  },
  description: "Landscaping, handyman services, and microcement in the Algarve.",
  metadataBase: new URL(absoluteUrl()),
  openGraph: {
    title: "Algarve Luxury Studio",
    description: "Landscaping, handyman services, and microcement in the Algarve.",
    url: absoluteUrl("/"),
    siteName: "Algarve Luxury Studio",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessSchema = localBusinessSchema();

  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </body>
    </html>
  );
}
