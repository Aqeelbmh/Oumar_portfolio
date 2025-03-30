import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare } from "lucide-react";

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      category: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Critical Thinking", level: 90 },
        { name: "Creativity", level: 85 },
        { name: "Adaptability", level: 90 }
      ]
    },
    {
      category: "Communication",
      icon: <MessageSquare className="w-6 h-6" />,
      skills: [
        { name: "Public Speaking", level: 90 },
        { name: "Technical Writing", level: 85 },
        { name: "Team Leadership", level: 80 },
        { name: "Cross-cultural", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-secondary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading text-4xl md:text-5xl mb-6 animate-fade-in font-mono">Skills & Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 animate-glow"></div>
          <p className="text-lg text-secondary/80 animate-fade-in-right font-mono">
            A diverse set of skills that enable me to tackle complex challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((category, index) => (
            <Card 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:animate-glow animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-mono text-secondary/70 group-hover:text-secondary/90 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono font-semibold text-primary bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-1.5 rounded-full border border-primary/20">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-secondary/10 rounded-full overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
