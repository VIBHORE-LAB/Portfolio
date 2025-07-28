import { Card } from '../ui/Card';
import { AppButton as Button} from '../ui/Button';
import { Mail, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';
import type { PortfolioData } from './portfolioData';

interface ContactProps {
  contact: PortfolioData['contact'];
  socialLinks: PortfolioData['socialLinks'];
}

const Contact: React.FC<ContactProps> = ({ contact, socialLinks }) => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              Get In Touch
            </div>
            <h2 className="text-5xl font-bold text-foreground">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <Card className="p-6 bg-gradient-card border-border hover:shadow-lg transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">{contact.email}</p>
                </div>
              </div>
            </Card>

            {/* Social Cards */}
            {socialLinks.map((link) => {
              const IconComponent =
                link.icon === 'Github'
                  ? Github
                  : link.icon === 'Linkedin'
                  ? Linkedin
                  : link.icon === 'Twitter'
                  ? Twitter
                  : null;

              return (
                <Card
                  key={link.platform}
                  className="p-6 bg-gradient-card border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{link.platform}</h3>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg group">
            <Mail className="h-5 w-5 mr-3 transition-transform group-hover:scale-110" />
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
