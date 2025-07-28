import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@mui/material"; 

interface SocialLink {
  platform: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  const iconMap: { [key: string]: React.ComponentType<{ className: string }> } = {
    Github,
    Linkedin,
    Twitter,
  };

  return (
    <div className="flex items-center justify-center gap-4 pt-8">
      {links.map((link) => {
        const Icon = iconMap[link.platform];

        if (!Icon) return null;

        return (
          <Button
            key={link.platform}
            variant="text"
            size="small"
            className="rounded-full hover:bg-accent transition-all duration-300 min-w-0 p-2"
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5" />
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
