import { useState } from "react";
import { Briefcase, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../ui/Card";
import { AppButton as Button } from "../ui/Button";
import type { Project } from "./portfolioData";
import { ImageGalleryOverlay } from "./ImageOverflow";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [openGallery, setOpenGallery] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const [thumbnailIndex, setThumbnailIndex] = useState<Record<number, number>>({});

  const handlePrev = (projectIndex: number, images: string[]) => {
    setThumbnailIndex((prev) => {
      const current = prev[projectIndex] ?? 0;
      return {
        ...prev,
        [projectIndex]: (current - 1 + images.length) % images.length,
      };
    });
  };

  const handleNext = (projectIndex: number, images: string[]) => {
    setThumbnailIndex((prev) => {
      const current = prev[projectIndex] ?? 0;
      return {
        ...prev,
        [projectIndex]: (current + 1) % images.length,
      };
    });
  };

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
          {projects.map((project, projectIndex) => {
            const images = project.screenshot ?? [];
            const currentThumb = thumbnailIndex[projectIndex] ?? 0;

            return (
              <Card
                key={projectIndex}
                className="group p-8 bg-gradient-card border-border hover:shadow-xl transition-all duration-500 animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${projectIndex * 0.2}s` }}
              >
                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 relative">
                      {images.length > 0 && (
                        <div className="relative">
                          <img
                            src={images[currentThumb]}
                            alt={project.title}
                            className="cursor-pointer rounded-lg hover:opacity-90 transition"
                            onClick={() => setOpenGallery({ images, index: currentThumb })}
                          />
                          {/* Thumbnail chevrons */}
                          {images.length > 1 && (
                            <>
                              <button
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white hover:bg-black/60"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrev(projectIndex, images);
                                }}
                              >
                                <ChevronLeft className="h-5 w-5" />
                              </button>
                              <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white hover:bg-black/60"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNext(projectIndex, images);
                                }}
                              >
                                <ChevronRight className="h-5 w-5" />
                              </button>
                            </>
                          )}
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.year || "N/A"}
                      </div>
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
                      <Github className="h-4 w-4 mr-2" />
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
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {openGallery && (
        <ImageGalleryOverlay
          images={openGallery.images}
          startIndex={openGallery.index}
          onClose={() => setOpenGallery(null)}
        />
      )}
    </section>
  );
};

export default Projects;
