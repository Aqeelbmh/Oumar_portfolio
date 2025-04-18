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
      title: "Certificate of Participation, International Summer Summit",
      organization: "Universitas Airlangga",
      year: "2024",
      description: "Participated in the International Summer Summit, an event that brings together students from around the world to discuss global issues and exchange ideas.",
      link: "https://drive.google.com/file/d/1uNImlwwXOMYsvy_g9u7F7ChqEga2ck-R/view?usp=drive_link"
    },
    {
      title: "Certificate of Appreciation, International Summer Course",
      organization: "Universitas Diponegoro",
      year: "2024",
      description: "Cultural Collaboration and Cultural Exchange",
      link: "https://drive.google.com/file/d/12R9JeHbA_Aci1ZXHBzTUt1W8ZQVk42UG/view?usp=drive_link"
    },
    {
      title: "Certificate of Participation, In a Work Shop",
      organization: "Nusa Putra University",
      year: "2024",
      description: "Workshop themes includes robotics, engineering design, and problem solving",
      link: "https://drive.google.com/file/d/1BHVHukckHmFY30TsZR9j2BCAah7v8AwS/view?usp=drive_link"
    },
    {
      title: "Certificate of IELTS Preparation Class",
      organization: "Kigndom English Center Malang",
      year: "2024",
      description: "Prepared for IELTS exam with focus on vocabulary, grammar, and reading comprehension",
      link: "https://drive.google.com/file/d/12QBDrOnaYkwpQA3d5LRtN8yn0kB2kFNU/view?usp=drive_link"
    },
    {
      title: "Certificate of Appreciation, Impact Circle 8.0",
      organization: "AIESEC in President University",
      year: "2024",
      description: "Participated in Impact Circle 8.0, an event that brings together students from around the world to discuss global issues and exchange ideas.",
      link: "https://drive.google.com/file/d/17KdACaMgFFupkSSur8Net-6YdYS8B-_8/view?usp=drive_link"
    },
    {
      title: "TOEFL CHS 30",
      organization: "The American University of Science",
      year: "2023",
      description: "TOEFL CHS 30 is a test that measures your ability to understand and use English in an academic context.",
      link: "https://drive.google.com/file/d/1441BEfaCZ2E0ppTbZ0aJTwQsqQyV3EDu/view?usp=drive_link"
    },
    {
      title: "Basics of Digital Marketing",
      organization: "Alqasasbiz for Buisness and Marketing Solutions",
      year: "2021",
      description: "Learned the basics of digital marketing, including social media marketing, search engine marketing, and email marketing.",
      link: "https://drive.google.com/file/d/1Xk0oTiotiSrXUfsK30dLIxvLjVxhbcD4/view?usp=drive_link"
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
