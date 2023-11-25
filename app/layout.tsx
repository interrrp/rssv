import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Next",
  description: "A minimal Next.js template",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
