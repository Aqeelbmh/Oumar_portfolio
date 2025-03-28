
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  year: string;
  description: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "IELTS Academic",
      organization: "British Council",
      year: "2020",
      description: "Achieved a high score demonstrating proficiency in English language for academic purposes."
    },
    {
      title: "TOEFL iBT",
      organization: "ETS",
      year: "2019",
      description: "Demonstrated English language proficiency for university admissions and professional contexts."
    },
    {
      title: "Cross-Cultural Communication Certificate",
      organization: "International Institute for Intercultural Studies",
      year: "2021",
      description: "Specialized training in effective communication across cultural boundaries and diverse settings."
    },
    {
      title: "International Relations Summer Program",
      organization: "Geneva Institute of International Relations",
      year: "2018",
      description: "Intensive program focusing on diplomatic processes and international cooperation frameworks."
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-secondary/30 opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">Certifications & Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Recognized accomplishments and professional development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-medium">{cert.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/70 mb-2">{cert.organization}</p>
                    <p className="text-sm text-foreground/80">{cert.description}</p>
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
