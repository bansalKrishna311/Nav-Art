"use client";

import HeroSection from "@/components/HeroSection";
import { HeroParallaxDemo } from "@/components/image-gallery";
import StickyFooter  from "@/components/footer";
export default function Home() {


  

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      

     
        <HeroSection />
        <HeroParallaxDemo />
       
        <StickyFooter />   {/* //footer added */}
    
    </main>
  );
}
