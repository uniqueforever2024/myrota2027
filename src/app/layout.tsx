import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyRota 2027",
  description: "Team Shift & Leave Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}