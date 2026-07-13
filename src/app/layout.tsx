import type { Metadata } from "next";
import { AppProviders } from "@/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "DartOS",
    template: "%s | DartOS",
  },
  description: "DartOS landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
