  "use client";

  import HeroSection from "@/components/HeroSection";
  import { HeroParallaxDemo } from "@/components/image-gallery";
  import StickyFooter  from "@/components/footer";
  // import AnimatedTestimonialsDemo from "@/components/self";
  import ContactCard from "@/components/ContactCard";
  import me from "./assets/me.jpg"
  import { AboutSection } from "@/components/AboutSection";
  export default function Home() {


    

    return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        

      
          <HeroSection />
          <HeroParallaxDemo />
          <AboutSection />
        {/* <AnimatedTestimonialsDemo />
          */}
        
          <StickyFooter />   {/* //footer added */}
      
      </main>
    );
  }
