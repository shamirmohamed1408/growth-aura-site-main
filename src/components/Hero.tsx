import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">
                Marketing Strategist
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Mohamed Shamir
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Passionate digital marketing strategist with expertise in data-driven campaigns, 
                social media management, and cutting-edge AI automation solutions for B2B growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="glowOutline"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Mohamed-Shamir-Resume.pdf';
                  link.download = 'Mohamed-Shamir-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Campaigns Launched</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">35%</div>
                <div className="text-sm text-muted-foreground">Avg. Engagement Boost</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Mohamed Shamir - Digital Marketing Strategist"
                  className="w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;