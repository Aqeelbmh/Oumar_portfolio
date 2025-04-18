import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ExternalLink } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  link?: string;
}

const EducationSection = () => {
  const educations: Education[] = [
    {
      degree: "Bachelor's Degree in Arts and Human Sciences",
      institution: "Franco-Arab African Private University",
      location: "Bamako, Mali",
      period: "2020 - 2024",
      description: "Studies were conducted on person (Offline)",
      link: "https://drive.google.com/file/d/13AOTwQDh-m5uE_ym0dZbhrLKtPF-lLE5/view?usp=drive_link"
    },
    {
      degree: "Bachelor's Degree in Arabic Language and Human Sciences",
      institution: "Islamic University in Niger",
      location: "Say, Niger",
      period: "2020 - 2023",
      description: "Studies were conducted on person (Online)",
      link: "https://drive.google.com/file/d/1YZT4Hof1qxSkrcn7IldzR1_6AbCqGsJN/view?usp=drive_link"
    },
    {
      degree: "Diploma in High School",
      institution: "Dar El Hadith",
      location: "Bamako, Mali",
      period: "2017 - 2019",
      description: "Studies were conducted on person (Offline)",
      link: "https://drive.google.com/file/d/1H_fVVqFpqi11NOmy6DAS25S5f-p7FkYc/view?usp=drive_link"
    },
    {
      degree: "Elementary School",
      institution: "Dar El Fallah",
      location: "Bamako, Mali",
      period: "2007 - 2016",
      description: "Studies were conducted on person (Offline)",
      link: "https://drive.google.com/file/d/1dENRhwh_4ePS0gw8z01AWM8ZzfMZq0Gq/view?usp=drive_link"
    }
  ];

  return (
    <section id="education" className="section-padding opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4 animate-fade-in">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 animate-glow"></div>
          <p className="text-secondary/80 animate-fade-in-right">
            Academic journey across prestigious institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-10 ml-4">
            {educations.map((edu, index) => (
              <div key={index} className="mb-12 relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-glow">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                
                <Card className="shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:animate-glow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-medium text-secondary">{edu.degree}</h3>
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-secondary/70 font-medium mb-1">{edu.institution}</p>
                      {edu.link && (
                        <a 
                          href={edu.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-secondary/60 mb-3">{edu.location}</p>
                    <p className="text-secondary/80">{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
