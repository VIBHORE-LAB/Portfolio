import {
  Code,
  User,
  Briefcase,
  Award,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@mui/material';

interface HeaderProps {
  onCodeToggle: () => void;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, 
      behavior: 'smooth',
    });
  }
};

const Header = ({ onCodeToggle }: HeaderProps) => {
  return (
    <>
      {/* Left button for code toggle */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="outlined"
          size="small"
          onClick={onCodeToggle}
          className="bg-card/80 backdrop-blur-md border-border hover:bg-accent transition-all duration-300 shadow-lg"
        >
          <Code className="h-4 w-4 mr-2" />
          Code
        </Button>
      </div>

      {/* Right icon nav */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-2">
          <Button
            variant="text"
            size="small"
            className="rounded-full min-w-0 p-2"
            onClick={() => scrollToSection('about')}
          >
            <User className="h-4 w-4" />
          </Button>
          <Button
            variant="text"
            size="small"
            className="rounded-full min-w-0 p-2"
            onClick={() => scrollToSection('experience')}
          >
            <Briefcase className="h-4 w-4" />
          </Button>
          <Button
            variant="text"
            size="small"
            className="rounded-full min-w-0 p-2"
            onClick={() => scrollToSection('skills')}
          >
            <Award className="h-4 w-4" />
          </Button>
          <Button
            variant="text"
            size="small"
            className="rounded-full min-w-0 p-2"
            onClick={() => scrollToSection('contact')}
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
