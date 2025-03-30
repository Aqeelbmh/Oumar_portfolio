import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Facebook, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "http://wa.me/6282113699561",
      color: "text-green-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "http://www.linkedin.com/in/oumar-bagayoko-7b2843317",
      color: "text-blue-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/bagayokoo291?igsh=MWlta295cnlhd2FlNQ%3D%3D&utm_source=qr",
      color: "text-pink-500"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/share/18URpHbafm/?mibextid=wwXIfr",
      color: "text-blue-500"
    },
    {
      name: "Telegram",
      icon: <Send className="w-5 h-5" />,
      href: "http://t.me/bagayokooumar64",
      color: "text-blue-400"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
      style={{ opacity: 1 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="order-2 md:order-1 max-w-3xl">
            <h1 className="heading text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
              Oumar <span className="text-primary animate-glow">Bagayoko</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 mb-8 animate-fade-in-right">
              Cultural Bridge-builder
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button className="btn-primary hover:animate-pulse-glow" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="gap-2 hover:animate-glow" asChild>
                <a href="/cv.pdf" download>
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:animate-glow ${social.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-24 text-center md:text-left">
              <Button
                variant="ghost"
                size="icon"
                className="animate-float hover:animate-pulse-glow"
                onClick={scrollToAbout}
                aria-label="Scroll to about section"
              >
                <ArrowDown className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Enhanced glowing circle effects */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl animate-pulse delay-1000"></div>
              <div className="absolute inset-0 rounded-full bg-secondary/10 blur-lg animate-pulse delay-2000"></div>
              
              {/* Enhanced oval frame with glow */}
              <div className="relative w-72 h-96 md:w-96 md:h-[32rem] rounded-[2.5rem] overflow-hidden border-4 border-primary/50 shadow-[0_0_25px_rgba(38,31,179,0.6)] animate-glow transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/10"></div>
                <img 
                  src="profile-image.jpg" 
                  alt="Oumar Bagayoko" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
