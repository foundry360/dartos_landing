import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { AppProviders } from "@/providers";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VectorDarts",
    template: "%s | VectorDarts",
  },
  description: "VectorDarts: premium darts software. Play. Practice. Compete.",
  openGraph: {
    title: "VectorDarts",
    description:
      "VectorDarts: premium darts software. Play. Practice. Compete.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
