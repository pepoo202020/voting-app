import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/providers";
import AnimatedBackground from "@/ui/components/AnimatedBackground";

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900", "1000", "300", "200"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacred Arts Gallery",
  description:
    "Step into a sacred space of beauty — where every brushstroke and sculpture reflects faith, inspiration, and the spirit of our church community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
