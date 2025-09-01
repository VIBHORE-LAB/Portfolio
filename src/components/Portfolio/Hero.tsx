import { ArrowDown, Mail, Download, MapPin } from "lucide-react";
import Button from "@mui/material/Button";
import SocialLinks from "./SocialLinks";

interface HeroProps {
  contact: {
    email: string;
    location: string;
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

const Hero = ({ contact, socialLinks }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto text-center space-y-10 sm:space-y-12">
        {/* Intro */}
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/50 rounded-full text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-foreground relative leading-tight">
            Vibhore Mathur
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-primary rounded-full opacity-50 animate-pulse-slow" />
          </h1>

          {/* Subtitle */}
          <div className="relative px-2 sm:px-0">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer crafting digital experiences with{" "}
              <span className="text-foreground font-medium relative">
                clean code
                <div className="absolute bottom-0 left-0 w-full h-px bg-primary/30" />
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium relative">
                modern design
                <div className="absolute bottom-0 left-0 w-full h-px bg-primary/30" />
              </span>
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-4 text-xs sm:text-sm md:text-base text-muted-foreground">
          <div className="flex items-center gap-1 sm:gap-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            {contact.location}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href={`mailto:${contact.email}`}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center justify-center text-sm sm:text-base"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:scale-110" />
            Get In Touch
          </a>

          <Button
            href="/Vibhore_Mathur_Resume.pdf"
            download
            className="bg-background text-foreground hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl group flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-md normal-case text-sm sm:text-base"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:scale-110" />
            Download CV
          </Button>
        </div>

        <SocialLinks links={socialLinks} />

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
