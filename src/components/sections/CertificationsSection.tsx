import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  year: string;
  description: string;
  link?: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "IELTS Academic",
      organization: "British Council",
      year: "2020",
      description: "Achieved a high score demonstrating proficiency in English language for academic purposes.",
      link: "https://www.britishcouncil.org/exam/ielts"
    },
    {
      title: "TOEFL iBT",
      organization: "ETS",
      year: "2019",
      description: "Demonstrated English language proficiency for university admissions and professional contexts.",
      link: "https://www.ets.org/toefl"
    },
    {
      title: "Cross-Cultural Communication Certificate",
      organization: "International Institute for Intercultural Studies",
      year: "2021",
      description: "Specialized training in effective communication across cultural boundaries and diverse settings.",
      link: "https://www.iiis.org/certificates"
    },
    {
      title: "International Relations Summer Program",
      organization: "Geneva Institute of International Relations",
      year: "2018",
      description: "Intensive program focusing on diplomatic processes and international cooperation frameworks.",
      link: "https://www.giir.org/summer-programs"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-secondary/5 opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4 animate-fade-in">Certifications & Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 animate-glow"></div>
          <p className="text-secondary/80 animate-fade-in-right">
            Recognized accomplishments and professional development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:animate-glow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full animate-pulse">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-medium text-secondary">{cert.title}</h3>
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-secondary/70 mb-2">{cert.organization}</p>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-secondary/80">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
