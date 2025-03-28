
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ opacity: 1 }} // Ensure visibility
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          opacity: 0.2,
        }}
      ></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="order-2 md:order-1 max-w-3xl">
            <h1 className="heading text-4xl md:text-6xl lg:text-7xl mb-6">
              Oumar <span className="text-primary">Bagayoko</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Bridging cultures, languages, and perspectives through interdisciplinary collaboration
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download CV
              </Button>
            </div>
            <div className="mt-24 text-center md:text-left">
              <Button
                variant="ghost"
                size="icon"
                className="animate-float"
                onClick={scrollToAbout}
                aria-label="Scroll to about section"
              >
                <ArrowDown className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              {/* Glowing circle effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
              
              {/* Circular frame with glow */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_25px_rgba(var(--primary-rgb),0.6)]">
                <img 
                  src="/profile-image.jpg" 
                  alt="Oumar Bagayoko" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
