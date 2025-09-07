import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MessageSquare, 
  Instagram,
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamed-shamir-s-305268226/",
      label: "LinkedIn",
    },
    {
      icon: MessageSquare,
      href: "https://wa.me/919976969640",
      label: "WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__s_h_a_m_i_r__?igsh=MWh3eHBodWFvZTN4Yg==",
      label: "Instagram",
    },
  ];

  const navigationLinks = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Services", section: "services" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Mohamed Shamir S</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Digital Marketing Strategist specializing in data-driven campaigns, 
                social media management, and AI automation solutions for business growth.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:shamirmohamed14@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  shamirmohamed14@gmail.com
                </a>
                <a
                  href="tel:+919976969640"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 99769 69640
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Mohamed Shamir S. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Built with ❤️ using React & Tailwind CSS
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;