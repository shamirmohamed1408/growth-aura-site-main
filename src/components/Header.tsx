import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            Mohamed Shamir S
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              variant="hero"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;