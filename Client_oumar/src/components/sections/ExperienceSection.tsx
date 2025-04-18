
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Student Consultant",
      company: "Apply for Campus",
      period: "2021 - Present",
      description: "Provided guidance to prospective international students on admissions processes and cultural adaptation.",
      achievements: [
        "Mentored over 50 students through the university application process",
        "Facilitated cultural orientation workshops for new international students",
        "Developed multi-language information resources for student use"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Professional journey across diverse roles and responsibilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-10 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-medium">{exp.title}</h3>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-foreground/70 font-medium mb-3">{exp.company}</p>
                    <p className="mb-4 text-foreground/80">{exp.description}</p>
                    
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-foreground/80">{achievement}</li>
                      ))}
                    </ul>
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

export default ExperienceSection;
