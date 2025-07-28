import {
  ArrowDown,
  Mail,
  Download,
  MapPin,
} from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground relative">
              Vibhore Mathur
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full opacity-50 animate-pulse-slow" />
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {contact.location}
            </div>
          </div>

         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href={`mailto:${contact.email}`}
    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group px-4 py-2 rounded-md flex items-center"
  >
    <Mail className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
    Get In Touch
  </a>

  <Button
    href="/Vibhore_Mathur_Resume.pdf"
    download
    className="bg-background text-foreground hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl group flex items-center px-4 py-2 rounded-md normal-case"
  >
    <Download className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
    Download CV
  </Button>
</div>


          <SocialLinks links={socialLinks} />
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
