import { Github, Linkedin } from "lucide-react";
import { Button } from "@mui/material";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

// Custom X (Twitter) icon as component
const XIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.83 3H17.57L12 10.07L6.43 3H3L10.33 12.14L3 21H6.27L12 13.93L17.73 21H21L13.67 12.14L20.83 3Z" />
  </svg>
);

const SocialLinks = ({ links }: SocialLinksProps) => {
  const iconMap: { [key: string]: React.ComponentType<{ className: string }> } = {
    github: Github,
    linkedin: Linkedin,
    x: XIcon,
  };

  return (
    <div className="flex items-center justify-center gap-4 pt-8">
      {links.map((link) => {
        const Icon = iconMap[link.icon.toLowerCase()];
        if (!Icon) return null;

        return (
          <Button
            key={link.platform}
            variant="text"
            size="small"
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              minWidth: 0,
              padding: "8px",
              borderRadius: "9999px",
              color: "#555",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(85, 85, 85, 0.1)",
                color: "#222",
              },
            }}
          >
            <Icon className="h-5 w-5" />
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
