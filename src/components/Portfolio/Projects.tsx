import { Briefcase, Github, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { AppButton as Button } from '../ui/Button';
import type { Project } from './portfolioData';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-background/50 rounded-full text-sm text-muted-foreground mb-4">
            <Briefcase className="h-4 w-4" />
            Portfolio
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-8 bg-gradient-card border-border hover:shadow-xl transition-all duration-500 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                   
                    </div>
                    <div className="text-sm text-muted-foreground">{project.year || 'N/A'}</div>
                  </div>
                </div>

                <div className="text-muted-foreground leading-relaxed space-y-2">
                  {project.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outlined"
                    size="small"
                    className="flex-1 border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                    component="a"
                    href={project.github}
                    target="_blank"
                  >
                    <Github className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                    Code
                  </Button>
                  {project.live && (
                    <Button
                      variant="outlined"
                      size="small"
                      className="flex-1 border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                      component="a"
                      href={project.live}
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
