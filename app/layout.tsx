import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patriot Neighborhood Services | Alex Stouffer",
  description:
    "Patriot Neighborhood Services by Alex Stouffer — serving our neighborhoods with pride.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
