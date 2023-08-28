import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover Exciting Chicago Events: Music, Arts, Festivals & More",
  description:
    "Explore a diverse array of Chicago events, from vibrant music festivals to captivating art exhibitions. Stay updated on the latest happenings and immerse yourself in the city's dynamic culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
