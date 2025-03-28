
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  description: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const professionalSkills: Skill[] = [
    {
      name: "Teamwork & Collaboration",
      level: 95,
      description: "Experienced in diverse team environments"
    },
    {
      name: "Leadership",
      level: 90,
      description: "Guided multiple project teams to successful outcomes"
    },
    {
      name: "Cultural Immersion",
      level: 98,
      description: "Thrived in diverse cultural settings across multiple countries"
    },
    {
      name: "Time Management",
      level: 85,
      description: "Balancing multiple priorities efficiently"
    },
    {
      name: "Digital Marketing",
      level: 80,
      description: "Experience in developing digital marketing strategies"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const progressBars = document.querySelectorAll(".skill-progress");
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
    <section ref={sectionRef} id="skills" className="section-padding opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            A diverse skill set developed through academic excellence and practical experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {professionalSkills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  data-width={skill.level}
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p className="text-sm text-foreground/70 mt-1">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
