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
          <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <ContactCard
          name="Navpreet Kaur Kang"
          phone="+61 420 752 070"
          email="Nav99preet@yahoo.com.au"
          location="Melbourne, Australia"
          imageSrc="/me.jpg"  // Replace with actual image URL
        />
      </div>
          <StickyFooter />   {/* //footer added */}
      
      </main>
    );
  }
