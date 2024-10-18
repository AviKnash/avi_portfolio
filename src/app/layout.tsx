import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/Application"; 

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
  title: "Avinash Ashok",
  description: "A small digital scripture",
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
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
