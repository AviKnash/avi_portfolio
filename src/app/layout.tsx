import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "../components/Header";
import { RootRefProvider } from "@/context/StickyRef/index";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/Application";
import ConditionalStickyCursor from "@/components/StickyCursor/ConditionalSticky";

const montreal = localFont({
  src: "./fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-montreal",
  weight: "100 900",
});


const montrealBold = localFont({
  src: "./fonts/PPNeueMontreal-Bold.otf",
  variable: "--font-montreal-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montreal.variable} ${montrealBold.variable}`}>
        <AppProvider>
          <RootRefProvider>
            <Header />
            <ConditionalStickyCursor />
            {children}
            <Footer />
          </RootRefProvider>
        </AppProvider>
      </body>
    </html>
  );
}