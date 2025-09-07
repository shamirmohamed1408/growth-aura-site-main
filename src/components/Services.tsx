import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Target, 
  Mail, 
  MessageSquare, 
  Mic,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community management across all platforms to boost your brand presence.",
      features: ["Content Strategy", "Daily Management", "Engagement Tracking", "Brand Voice Development"],
      price: "Starting at ₹5,000/month",
    },
    {
      icon: Target,
      title: "Paid Ad Campaigns",
      description: "Data-driven Meta and Google Ads campaigns designed to maximize ROI and drive qualified leads to your business.",
      features: ["Campaign Setup", "A/B Testing", "Performance Optimization", "Detailed Reporting"],
      price: "Starting at ₹7,000/month",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email sequences and campaigns using Instantly to nurture leads and convert prospects into customers.",
      features: ["Email Automation", "Sequence Building", "Performance Analytics", "List Management"],
      price: "Starting at ₹12,000/month",
    },
    {
      icon: MessageSquare,
      title: "Chatbot Automation",
      description: "WhatsApp and web chatbot automation using aisensy and wati to streamline customer support and lead qualification.",
      features: ["Custom Chatbots", "Lead Qualification", "24/7 Support", "Integration Setup"],
      price: "Starting at ₹18,000/month",
    },
    {
      icon: Mic,
      title: "AI Voice Agents",
      description: "Cutting-edge AI voice agents for B2B businesses to automate sales calls, customer support, and lead qualification.",
      features: ["Voice AI Setup", "Custom Training", "Integration Support", "Performance Monitoring"],
      price: "Starting at ₹25,000/month",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored to grow your business 
            and maximize your online presence through data-driven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group-hover:text-primary transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Looking for a custom solution? Let's discuss your specific needs.
          </p>
          <Button variant="hero" size="lg">
            Get Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;