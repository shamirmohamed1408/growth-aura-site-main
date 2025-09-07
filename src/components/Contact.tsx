import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send,
  Calendar,
  MessageSquare 
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shamirmohamed14@gmail.com",
      href: "mailto:shamirmohamed14@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99769 69640",
      href: "tel:+919976969640",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mohamed-shamir-s-305268226/",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            Ready to grow your business with data-driven digital marketing strategies? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        name="company"
                        placeholder="Your company" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Input 
                        id="budget" 
                        name="budget"
                        placeholder="e.g., ₹50,000 - ₹1,00,000" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input 
                      id="service" 
                      name="service"
                      placeholder="e.g., Social Media Management, Paid Ads, etc." 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project, goals, and how I can help..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Book a Free Consultation</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Schedule a 30-minute strategy call to discuss your marketing goals.
                </p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.open("https://calendly.com/shamirmohamed14/free-strategy-call-get-5-qualified-leads-in-10-days", "_blank")}
                >
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to all inquiries within 4-6 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;