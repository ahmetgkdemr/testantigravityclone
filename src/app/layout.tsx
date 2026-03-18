import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOGII",
  description: "YOGII - Elevate your everyday comfort",
  openGraph: {
    title: "YOGII",
    description: "YOGII - Elevate your everyday comfort",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
