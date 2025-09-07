import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HR Consulting Social Media Strategy",
      category: "Social Media Management",
      description: "Comprehensive social media management for PhoenixHRSolutions, an HR consulting company serving B2B and B2C clients across LinkedIn, Instagram, and Facebook.",
      challenge: "Limited online presence and low engagement on professional networks, particularly LinkedIn where HR decision-makers are most active.",
      solution: "Developed content strategy focused on HR insights, industry trends, and thought leadership. Created engaging creatives and implemented consistent posting schedule across all platforms.",
      results: [
        { metric: "LinkedIn Impressions", value: "1,500 → 16,350", icon: TrendingUp },
        { metric: "Growth Period", value: "6 months", icon: Zap },
        { metric: "Engagement Rate", value: "+980%", icon: Users },
      ],
      tags: ["LinkedIn", "Instagram", "Facebook", "HR Consulting", "B2B"],
      duration: "6 months",
      client: "PhoenixHRSolutions",
    },
    {
      title: "Luxury Spa Digital Presence",
      category: "Social Media Management",
      description: "Social media management for one of Chennai's premier luxury spas, focusing on brand positioning and customer acquisition through digital channels.",
      challenge: "Need to increase brand awareness and drive more appointment bookings and call enquiries for premium spa services.",
      solution: "Created premium visual content showcasing spa services, implemented strategic posting schedule, and engaged with local luxury market audience.",
      results: [
        { metric: "Call Enquiries", value: "+150%", icon: TrendingUp },
        { metric: "Appointment Bookings", value: "+120%", icon: Zap },
        { metric: "Social Impressions", value: "+200%", icon: Users },
      ],
      tags: ["Instagram", "Facebook", "Luxury Brand", "Chennai", "Spa Services"],
      duration: "Ongoing",
      client: "Luxury Spa Chennai",
    },
    {
      title: "Indian Restaurant LA Expansion",
      category: "Social Media Management",
      description: "Social media strategy for an authentic Indian cuisine restaurant in Los Angeles, focusing on local market penetration and customer acquisition.",
      challenge: "Needed to establish brand presence in competitive LA food scene and increase foot traffic to the restaurant.",
      solution: "Created appetizing food photography, showcased authentic Indian flavors, engaged with local food community, and promoted special events and offers.",
      results: [
        { metric: "Local Reach", value: "+180%", icon: TrendingUp },
        { metric: "Walk-ins", value: "+90%", icon: Users },
        { metric: "Social Engagement", value: "+145%", icon: Zap },
      ],
      tags: ["Restaurant Marketing", "Los Angeles", "Indian Cuisine", "Local SEO"],
      duration: "4 months",
      client: "Indian Cuisine LA",
    },
    {
      title: "Startup Lead Generation Campaign",
      category: "Lead Generation & AI Solutions",
      description: "Lead generation strategies for multiple startups and development of AI voice calling agents for B2B client acquisition and customer service automation.",
      challenge: "Startups needed cost-effective lead generation solutions, while B2B companies required efficient customer communication systems.",
      solution: "Implemented multi-channel lead generation funnels and developed AI voice agents using cutting-edge technology for automated calling and customer interactions.",
      results: [
        { metric: "Lead Quality", value: "+200%", icon: TrendingUp },
        { metric: "Cost Reduction", value: "-60%", icon: Zap },
        { metric: "Response Rate", value: "+175%", icon: Users },
      ],
      tags: ["Lead Generation", "AI Voice Agents", "B2B", "Automation", "Startups"],
      duration: "Ongoing",
      client: "Multiple Startups",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            Real results from real campaigns. Here's how I've helped businesses 
            achieve their digital marketing goals through strategic implementation.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
              <CardHeader className="bg-gradient-secondary">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="glowOutline" 
                      size="sm"
                      onClick={() => window.open("https://www.linkedin.com/in/mohamed-shamir-s-305268226/", "_blank")}
                    >
                      LinkedIn
                    </Button>
                    <Button 
                      variant="glowOutline" 
                      size="sm"
                      onClick={() => window.open("https://www.instagram.com/__s_h_a_m_i_r__?igsh=MWh3eHBodWFvZTN4Yg==", "_blank")}
                    >
                      Instagram
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-destructive">Challenge</h4>
                        <p className="text-muted-foreground">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Solution</h4>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-accent">Key Results</h4>
                    <div className="space-y-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-card p-4 rounded-lg border border-border">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="bg-primary/10 p-2 rounded">
                              <result.icon className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{result.metric}</span>
                          </div>
                          <div className="text-2xl font-bold text-primary">{result.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to achieve similar results for your business?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open("https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days", "_blank")}
          >
            Schedule Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;