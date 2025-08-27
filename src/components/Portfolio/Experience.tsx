import { Briefcase } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import type { Experience as ExperienceType } from '../Portfolio/portfolioData';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-background/50 rounded-full text-sm text-muted-foreground mb-4">
            <Briefcase className="h-4 w-4" />
            Experience
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across different companies and industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card border-border hover:shadow-lg transition-all duration-300 group animate-scale-in"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit border-border">
                  {exp.period.split(" - ")[1] === "Present" ? "Current" : "Completed"}
                </Badge>
              </div>

              <div className="mt-4 text-muted-foreground space-y-2"> 
                {exp.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
