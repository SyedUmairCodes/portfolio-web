import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Syed Umair Ali | Full-stack developer",
  description:
    "Syed Umair Ali, known as SyedUmairCodes on socialmedia is a full-stack software developer, AI engineer, and a fan off all things productivity and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          "bg-main text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
