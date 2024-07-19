import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Navbar from "@/components/shared/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobfinder.io",
  description: "A Jobfinder web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider >
    <html lang='en' suppressHydrationWarning >
      <body className="w-full h-auto">
        <Navbar />
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
