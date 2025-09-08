import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error: any) {
        console.error("Contact form error:", error);
        throw new Error(error.message || "Failed to send message. Please try again.");
      }
    },
    onSuccess: (data: any) => {
      console.log("Form submission response:", data);
      
      if (data.success && data.emailSent) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message! You will receive a confirmation email shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (data.success && !data.emailSent) {
        toast({
          title: "Message Received",
          description: "Your message was received but email notification failed. I'll still get back to you soon.",
          variant: "destructive",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submission started with data:", formData);
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Form validation passed, submitting...");
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "prasanthkathi05@gmail.com",
      href: "prasanthkathi05@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/kathi-prasanth",
      href: "https://linkedin.com/in/kathi-prasanth",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/prasanth-2812",
      href: "https://github.com/prasanth-2812",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9652824932",
      href: "tel:+919652824932",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: null,
    },
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to bring your ideas to life? Let's collaborate on your next project
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div 
                className="space-y-8"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div>
                  <h2 className="text-3xl font-semibold mb-6 text-foreground">Let's Connect</h2>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    I'm always excited to work on new projects and collaborate with innovative teams. 
                    Whether you have a specific project in mind, need technical consulting, or just 
                    want to discuss the latest in web development and machine learning, I'd love to hear from you!
                  </p>
                </div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const content = (
                      <motion.div 
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{info.title}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </motion.div>
                    );

                    return info.href ? (
                      <a key={info.title} href={info.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={info.title}>{content}</div>
                    );
                  })}
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Quick Response</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I typically respond to all inquiries within 24 hours. For urgent projects or 
                    consultations, feel free to mention it in your message, and I'll prioritize 
                    getting back to you as soon as possible.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="glass-effect rounded-2xl p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-input border-border focus:ring-primary focus:border-transparent"
                      data-testid="input-name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-input border-border focus:ring-primary focus:border-transparent"
                      data-testid="input-email"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration / Consultation / Other"
                      required
                      className="bg-input border-border focus:ring-primary focus:border-transparent"
                      data-testid="input-subject"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      required
                      className="bg-input border-border focus:ring-primary focus:border-transparent resize-none"
                      data-testid="textarea-message"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}