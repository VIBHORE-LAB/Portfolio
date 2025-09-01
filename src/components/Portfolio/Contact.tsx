import { Card } from "../ui/Card";
import { AppButton as Button } from "../ui/Button";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import type { PortfolioData } from "./portfolioData";

const X = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.83 3H17.57L12 10.07L6.43 3H3L10.33 12.14L3 21H6.27L12 13.93L17.73 21H21L13.67 12.14L20.83 3Z" />
  </svg>
);

interface ContactProps {
  contact: PortfolioData["contact"];
  socialLinks: PortfolioData["socialLinks"];
}

const Contact: React.FC<ContactProps> = ({ contact, socialLinks }) => {
  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-xs sm:text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Let&apos;s Work Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Let&apos;s connect and discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <a
              href={`mailto:${contact.email}`}
              className="no-underline block pointer-events-auto"
            >
              <Card className="p-6 sm:p-8 bg-gradient-card border-border transition-all duration-300 group flex flex-col justify-center items-center text-center h-[200px] sm:h-[220px] w-full max-w-xs mx-auto transform hover:shadow-2xl hover:bg-accent/10 cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary group-hover:text-primary/80 transition-transform" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {contact.email}
                  </p>
                </div>
              </Card>
            </a>

            {/* Social Links */}
            {socialLinks.map((link) => {
              const IconComponent =
                link.icon === "Github"
                  ? Github
                  : link.icon === "Linkedin"
                  ? Linkedin
                  : link.icon === "X"
                  ? X
                  : null;

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline block pointer-events-auto"
                >
                  <Card className="p-6 sm:p-8 bg-gradient-card border-border transition-all duration-300 group flex flex-col justify-center items-center text-center h-[200px] sm:h-[220px] w-full max-w-xs mx-auto transform hover:shadow-2xl hover:bg-accent/10 cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-primary/80 transition-transform" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        {link.platform}
                      </h3>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Button */}
          <a
            href={`mailto:${contact.email}`}
            className="no-underline block pointer-events-auto"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group flex items-center justify-center mx-auto mt-8 sm:mt-12 max-w-xs transform">
              <Mail className="h-5 w-5 mr-2 sm:mr-3 transition-transform" />
              Start a Conversation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
