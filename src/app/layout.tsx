import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Antigravity",
  description: "Google Antigravity - Build the new way",
  openGraph: {
    title: "Google Antigravity",
    description: "Google Antigravity - Build the new way",
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
