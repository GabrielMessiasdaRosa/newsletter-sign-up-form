import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subscribe to newsletter",
  description: "Subscribe to newsletter to get updates on new articles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-charcoalGrey`}>{children}</body>
    </html>
  );
}
