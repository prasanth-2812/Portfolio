import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCanvas from "@/components/three/project-canvas";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  canvasId: string;
  canvasColor: string;
}

function ProjectCard({ title, description, technologies, canvasId, canvasColor }: ProjectCardProps) {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:scale-105" role="listitem">
      <div className="h-48 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
        <ProjectCanvas canvasId={canvasId} color={canvasColor} />
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h4>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground" role="listitem">
              {tech}
            </Badge>
          ))}
        </div>
        <button 
          className="text-primary hover:text-primary/80 font-medium" 
          data-testid={`link-project-${canvasId}`}
          aria-label={`View ${title} project`}
        >
          View Project →
        </button>
      </CardContent>
    </article>
  );
}

export default function ProjectsSection() {
  const otherProjects = [
    {
      title: "React Portfolio Dashboard",
      description: "Interactive dashboard built with React and modern UI components, featuring real-time data visualization.",
      technologies: ["React", "JavaScript", "CSS"],
      canvasId: "project-2",
      canvasColor: "#10b981",
    },
    {
      title: "Node.js API Server",
      description: "RESTful API server with authentication, built using Node.js and modern backend technologies.",
      technologies: ["Node.js", "Express", "API"],
      canvasId: "project-3",
      canvasColor: "#3b82f6",
    },
    {
      title: "3D Web Experience",
      description: "Immersive 3D web application using Three.js with interactive objects and smooth animations.",
      technologies: ["Three.js", "WebGL", "JavaScript"],
      canvasId: "project-4",
      canvasColor: "#f59e0b",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions showcasing full-stack development and machine learning expertise
          </p>
        </header>
        
        {/* Featured Project - ML Phishing Detector */}
        <article className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Project
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">ML Phishing Detector</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                An advanced machine learning application that detects phishing websites using sophisticated algorithms. 
                Built with Python Flask backend and responsive HTML/CSS frontend, this project demonstrates the 
                intersection of cybersecurity and modern web development.
              </p>
              <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="Technologies used">
                {["Python", "Flask", "Machine Learning", "HTML", "CSS"].map((tech) => (
                  <Badge key={tech} className="bg-accent text-accent-foreground" role="listitem">
                    {tech}
                  </Badge>
                ))}
              </div>
              <nav className="flex gap-4" role="navigation" aria-label="Project links">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105"
                  data-testid="button-view-featured-project"
                  aria-label="View ML Phishing Detector project"
                >
                  View Project
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  data-testid="button-view-featured-code"
                  aria-label="View ML Phishing Detector source code"
                >
                  View Code
                </Button>
              </nav>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="bg-card rounded-xl p-8 h-80 flex items-center justify-center">
                  <ProjectCanvas canvasId="featured-project" color="#ef4444" />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Other projects">
          {otherProjects.map((project) => (
            <ProjectCard key={project.canvasId} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
