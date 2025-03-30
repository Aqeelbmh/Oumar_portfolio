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
      degree: "Master's Degree in International Relations",
      institution: "Franco-Arab African Private University",
      location: "Bamako, Mali",
      period: "2016 - 2018",
      description: "Focused on diplomatic relations, cross-cultural communication, and international cooperation frameworks with an emphasis on African-European relations.",
      link: "https://www.faapu.edu.ml"
    },
    {
      degree: "Bachelor's Degree in Social Sciences",
      institution: "Islamic University in Niger",
      location: "Say, Niger",
      period: "2012 - 2016",
      description: "Studied sociological theories, research methods, and cultural studies with a focus on West African societies and social structures.",
      link: "https://www.uiniger.edu.ne"
    },
    {
      degree: "Diploma in Digital Marketing",
      institution: "Digital Africa Institute",
      location: "Online",
      period: "2019",
      description: "Completed specialized training in digital marketing strategies, social media management, and content creation for diverse audiences.",
      link: "https://www.digitalafrica.institute"
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
