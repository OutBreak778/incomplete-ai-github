import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Outfit } from 'next/font/google';

import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react"
import {ClerkProvider} from "@clerk/nextjs"
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ['latin'], // Specifies character subsets
  weight: ['400', '700'], // Include the desired font weights
});

export const metadata: Metadata = {
  title: "OUTBREAK",
  description: "Generated by Gitlyze",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>

      <html lang="en" className={` ${GeistSans.variable} ${outfit.style.fontFamily}`}>
        <body>
          <TRPCReactProvider>{children}
          <Toaster />
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
    );
}
