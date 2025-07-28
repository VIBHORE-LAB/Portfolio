import SocialLinks from './SocialLinks';
import type  { PortfolioData } from './portfolioData';

interface FooterProps {
  socialLinks: PortfolioData['socialLinks'];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Alex Chen. Built with React, TypeScript & Tailwind CSS
          </div>
<SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
