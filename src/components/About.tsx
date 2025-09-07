import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Strategic Planning", level: 90 },
    { name: "Digital Marketing", level: 85 },
    { name: "Social Media Management", level: 92 },
    { name: "Paid Ad Campaigns", level: 88 },
    { name: "Email Marketing", level: 80 },
    { name: "AI Automation", level: 75 },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Data-Driven Approach",
      description: "Every campaign is backed by thorough research and analytics to ensure maximum ROI.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Specialized in strategies that drive sustainable business growth and engagement.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Building lasting relationships through transparent communication and results.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge AI tools and automation for competitive advantage.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground">
            As a passionate digital marketing strategist and B.Tech Information Technology student, 
            I combine technical expertise with creative marketing strategies to deliver exceptional results. 
            Currently pursuing my degree while running GenLeads Agency, I specialize in data-driven 
            campaigns that boost engagement and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-lg font-semibold mb-4">Education & Background</h4>
              <div className="space-y-3">
                <div>
                  <div className="font-medium">B.Tech Information Technology</div>
                  <div className="text-sm text-muted-foreground">2022-2026 • CGPA: 8.1</div>
                </div>
                <div>
                  <div className="font-medium">Founder & Business Strategist</div>
                  <div className="text-sm text-muted-foreground">GenLeads Agency • 2024-Present</div>
                </div>
                <div>
                  <div className="font-medium">Languages</div>
                  <div className="text-sm text-muted-foreground">English (Fluent), Tamil (Native)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;