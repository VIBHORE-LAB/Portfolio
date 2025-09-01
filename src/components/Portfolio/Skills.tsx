import { Award } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <Award className="h-4 w-4" />
            Skills & Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Badge
                variant="secondary"
                className="w-full justify-center px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-card border border-border hover:bg-accent hover:border-primary/20 transition-all duration-300 cursor-default group-hover:scale-105"
              >
                {skill}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
