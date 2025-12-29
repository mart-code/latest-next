import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
   import LightRays from '../components/LightRays';
import Navbar from "@/components/Navbar";
const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for every Developer Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen w-full antialiased`}
      >
        <Navbar/>
     <div className="absolute inset-0 top-0 z-[-1] min-h-screen" style={{width: '100%', height: '600px'}}>
  <LightRays
    raysOrigin="top-center-offset"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.02}
    noiseAmount={0.1}
    distortion={0.05}
    
  />
</div>
<main>{children}</main>
        
      </body>
    </html>
  );
}
