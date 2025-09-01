import { Briefcase } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import type { Experience as ExperienceType } from "../Portfolio/portfolioData";

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-background/50 rounded-full text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <Briefcase className="h-4 w-4" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Professional Journey
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions across different companies and industries
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-gradient-card border-border hover:shadow-lg transition-all duration-300 group animate-scale-in"
            >
              {/* Role & Company */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground text-sm sm:text-base">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-xs sm:text-sm">{exp.period}</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit border-border text-xs sm:text-sm px-2 sm:px-3 py-0.5"
                >
                  {exp.period.split(" - ")[1] === "Present"
                    ? "Current"
                    : "Completed"}
                </Badge>
              </div>

              {/* Description */}
              <div className="mt-3 sm:mt-4 text-muted-foreground space-y-1.5 sm:space-y-2 text-sm sm:text-base leading-relaxed">
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
