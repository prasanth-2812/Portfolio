import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useState } from "react";
import { Palette, Settings, Bot, Wrench, Shield, Globe, Zap } from "lucide-react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay: number;
  highlighted?: boolean;
}

function AnimatedSkillBar({ skill, percentage, delay, highlighted = false }: SkillBarProps) {
  const [animated, setAnimated] = useState(false);

  return (
    <motion.div 
      className={`flex items-center justify-between mb-4 ${highlighted ? 'bg-primary/10 rounded-lg p-3 border border-primary/20' : ''}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onAnimationComplete={() => setAnimated(true)}
    >
      <div className="flex items-center gap-2">
        {highlighted && <Zap className="w-4 h-4 text-primary" />}
        <span className={`text-sm font-medium ${highlighted ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
          {skill}
        </span>
      </div>
      <div className="w-24">
        <Progress 
          value={animated ? percentage : 0} 
          className={`h-2 transition-all duration-1000 ease-out ${highlighted ? '[&>div]:bg-primary' : ''}`}
        />
      </div>
    </motion.div>
  );
}

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Array<{ name: string; level: number; highlighted?: boolean }>;
  delay: number;
}

function SkillCard({ icon: Icon, title, skills, delay }: SkillCardProps) {
  return (
    <motion.div 
      className="gradient-border rounded-xl"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
    >
      <div className="bg-card rounded-xl p-8 h-full">
        <motion.div 
          className="text-primary mb-6 text-center"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-12 h-12 mx-auto" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-6 text-card-foreground text-center">{title}</h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <AnimatedSkillBar 
              key={skill.name} 
              skill={skill.name} 
              percentage={skill.level} 
              delay={delay + index * 0.1}
              highlighted={skill.highlighted}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Frontend Development",
      skills: [
        { name: "Vibe Coding", level: 95, highlighted: true },
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      icon: Settings,
      title: "Backend Development",
      skills: [
        { name: "Python", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 88 },
        { name: "Express.js", level: 87 },
        { name: "APIs", level: 90 },
      ],
    },
    {
      icon: Bot,
      title: "Machine Learning",
      skills: [
        { name: "Python ML", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "TensorFlow", level: 82 },
        { name: "Scikit-learn", level: 88 },
        { name: "Security ML", level: 88 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 80 },
        { name: "Three.js", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 83 },
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "Web Security", level: 88 },
        { name: "Phishing Detection", level: 92 },
        { name: "Threat Analysis", level: 85 },
        { name: "Security Audits", level: 80 },
        { name: "Penetration Testing", level: 78 },
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "Responsive Design", level: 94 },
        { name: "Performance Opt.", level: 87 },
        { name: "SEO", level: 85 },
        { name: "Accessibility", level: 82 },
        { name: "PWA", level: 80 },
      ],
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
                Technical <span className="text-primary">Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expertise across the full stack of modern web development and emerging technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {skillCategories.map((category, index) => (
                <SkillCard
                  key={category.title}
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div 
              className="text-center bg-muted/20 rounded-2xl p-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Continuous Learning</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest developments. 
                I regularly explore new frameworks, tools, and methodologies to ensure my skills remain 
                cutting-edge and relevant to today's challenges.
              </p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {["AI/ML", "Cloud Computing", "DevOps", "Blockchain", "AR/VR", "IoT"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}