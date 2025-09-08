import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCanvas from "@/components/three/project-canvas";
import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  canvasId: string;
  canvasColor: string;
  delay: number;
  featured?: boolean;
}

function ProjectCard({ title, description, technologies, canvasId, canvasColor, delay, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className={`bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 ${featured ? 'border-primary/30' : ''}`}>
        <div className="h-48 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center relative overflow-hidden">
          <ProjectCanvas canvasId={canvasId} color={canvasColor} />
          {featured && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid={`button-view-${canvasId}`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              data-testid={`button-code-${canvasId}`}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const featuredProject = {
    title: "ML Phishing Detector",
    description: "An advanced machine learning application that detects phishing websites using sophisticated algorithms and natural language processing. Built with Python Flask backend and responsive frontend, this project demonstrates the intersection of cybersecurity and modern web development. Features real-time URL analysis, threat scoring, and comprehensive reporting.",
    technologies: ["Python", "Flask", "Machine Learning", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    canvasId: "featured-project",
    canvasColor: "#ef4444",
  };

  const projects = [
    {
      title: "React Portfolio Dashboard",
      description: "Interactive admin dashboard built with React and modern UI components, featuring real-time data visualization, user management, and responsive design patterns.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      canvasId: "project-2",
      canvasColor: "#10b981",
    },
    {
      title: "Node.js API Server",
      description: "RESTful API server with JWT authentication, rate limiting, and comprehensive error handling. Built using Node.js, Express, and PostgreSQL with full OpenAPI documentation.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      canvasId: "project-3",
      canvasColor: "#3b82f6",
    },
    {
      title: "3D Web Experience",
      description: "Immersive 3D web application using Three.js with interactive objects, physics simulation, and smooth animations. Features customizable scenes and responsive controls.",
      technologies: ["Three.js", "WebGL", "JavaScript", "GSAP"],
      canvasId: "project-4",
      canvasColor: "#f59e0b",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with product management, shopping cart, payment integration, and order tracking. Built with modern web technologies and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      canvasId: "project-5",
      canvasColor: "#8b5cf6",
    },
    {
      title: "Real-time Chat App",
      description: "Secure real-time messaging application with WebSocket communication, file sharing, group chats, and message encryption. Features modern UI and mobile responsiveness.",
      technologies: ["Socket.io", "React", "Express", "Redis"],
      canvasId: "project-6",
      canvasColor: "#06b6d4",
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive data analysis and visualization platform for processing large datasets. Features custom charts, filtering, and export capabilities with real-time updates.",
      technologies: ["D3.js", "Python", "Pandas", "Flask"],
      canvasId: "project-7",
      canvasColor: "#f97316",
    },
  ];

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
                Featured <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Innovative solutions showcasing full-stack development, machine learning, and modern web technologies
              </p>
            </motion.div>
            
            {/* Featured Project */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Trophy className="w-4 h-4" />
                    Featured Project
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground">{featuredProject.title}</h2>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} className="bg-accent text-accent-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105"
                      data-testid="button-view-featured-project"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      data-testid="button-view-featured-code"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </motion.div>
                <motion.div 
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <div className="bg-card rounded-xl p-8 h-80 flex items-center justify-center">
                      <ProjectCanvas canvasId={featuredProject.canvasId} color={featuredProject.canvasColor} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Other Projects Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Other Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.canvasId} 
                    {...project} 
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center mt-16 bg-muted/20 rounded-2xl p-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Collaborate?</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                These projects represent just a glimpse of what's possible. I'm always excited to work on 
                new challenges and bring innovative ideas to life. Let's build something amazing together!
              </p>
              <Link href="/contact">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105"
                  data-testid="button-start-project"
                >
                  Start a Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}