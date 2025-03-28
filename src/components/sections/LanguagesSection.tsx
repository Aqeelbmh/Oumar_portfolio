
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface Language {
  name: string;
  level: string;
  proficiency: number;
  flag: string;
}

const LanguagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const languages: Language[] = [
    { 
      name: "English", 
      level: "Professional Proficiency", 
      proficiency: 90,
      flag: "🇬🇧"
    },
    { 
      name: "Arabic", 
      level: "Native Fluency", 
      proficiency: 100,
      flag: "🇸🇦"
    },
    { 
      name: "French", 
      level: "Native Fluency", 
      proficiency: 100,
      flag: "🇫🇷"
    },
    { 
      name: "Bambara", 
      level: "Native Fluency", 
      proficiency: 100,
      flag: "🇲🇱"
    },
    { 
      name: "Joula", 
      level: "Professional Proficiency", 
      proficiency: 90,
      flag: "🇧🇫"
    },
    { 
      name: "Manika", 
      level: "Professional Proficiency", 
      proficiency: 85,
      flag: "🇬🇳"
    },
    { 
      name: "Bahasa Indonesia", 
      level: "Elementary Proficiency", 
      proficiency: 40,
      flag: "🇮🇩"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const progressBars = document.querySelectorAll(".lang-progress");
          progressBars.forEach((bar) => {
            const width = bar.getAttribute("data-width");
            if (width) {
              (bar as HTMLElement).style.width = `${width}%`;
            }
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="languages" className="section-padding opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">Languages</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Multilingual capabilities spanning diverse linguistic traditions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                    <div>
                      <h3 className="font-medium">{lang.name}</h3>
                      <p className="text-sm text-foreground/70">{lang.level}</p>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="lang-progress skill-progress"
                      data-width={lang.proficiency}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-primary/10 rounded-lg">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-2">Language Bridge</h3>
                <p className="text-foreground/80">
                  My multilingual capabilities allow me to serve as a cultural and linguistic bridge across diverse communities and professional contexts. I particularly enjoy facilitating cross-cultural understanding and communication in interdisciplinary environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
