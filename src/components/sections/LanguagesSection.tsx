import { Card, CardContent } from "@/components/ui/card";
import { Globe, Award, BookOpen, MessageSquare, Languages, GraduationCap, BookMarked, BookOpenCheck } from "lucide-react";

interface Language {
  name: string;
  level: string;
  description: string;
  icon: React.ReactNode;
}

const LanguagesSection = () => {
  const languages: Language[] = [
    {
      name: "English",
      level: "Native",
      description: "Fluent in both written and spoken English, with experience in academic and professional contexts.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: "French",
      level: "Advanced",
      description: "Strong command of French language, particularly in diplomatic and cultural contexts.",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Arabic",
      level: "Advanced",
      description: "Proficient in Modern Standard Arabic and various regional dialects.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      name: "Bambara",
      level: "Native",
      description: "Native speaker with deep understanding of cultural nuances and expressions.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      name: "Spanish",
      level: "Intermediate",
      description: "Good understanding and communication skills in both written and spoken Spanish.",
      icon: <Languages className="w-5 h-5" />
    },
    {
      name: "German",
      level: "Intermediate",
      description: "Proficient in basic communication and understanding of German language.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: "Portuguese",
      level: "Basic",
      description: "Basic understanding and communication skills in Portuguese.",
      icon: <BookMarked className="w-5 h-5" />
    }
  ];

  return (
    <section id="languages" className="section-padding bg-gradient-to-b from-secondary/5 to-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4 animate-fade-in font-mono">Languages</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6 animate-glow"></div>
          <p className="text-secondary/80 animate-fade-in-right font-mono">
            Multilingual proficiency enabling effective communication across diverse cultural contexts
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {language.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-mono font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                          {language.name}
                        </h3>
                        <span className="text-xs font-mono font-medium text-primary bg-gradient-to-r from-primary/20 to-accent/20 px-2.5 py-0.5 rounded-full border border-primary/20">
                          {language.level}
                        </span>
                      </div>
                      <p className="text-sm text-secondary/70 leading-relaxed font-mono group-hover:text-secondary/90 transition-colors duration-300">
                        {language.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
