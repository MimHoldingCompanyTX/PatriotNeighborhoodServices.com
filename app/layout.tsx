import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patriot Neighborhood Services | Alex Stouffer",
  description:
    "Meet Alex Stouffer, founder of Patriot Neighborhood Services, serving Rockwall and Heath with detailing, power washing, flag installation, and exterior cleaning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
