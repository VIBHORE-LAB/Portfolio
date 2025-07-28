import { Award } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground mb-4">
            <Award className="h-4 w-4" />
            Skills & Technologies
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge
                variant="secondary"
                className="w-full justify-center px-4 py-3 text-sm bg-card border border-border hover:bg-accent hover:border-primary/20 transition-all duration-300 cursor-default group-hover:scale-105"
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