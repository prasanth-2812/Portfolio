import { Progress } from "@/components/ui/progress";
import { Palette, Settings, Bot, Zap } from "lucide-react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  highlighted?: boolean;
}

function SkillBar({ skill, percentage, highlighted = false }: SkillBarProps) {
  return (
    <div className={`flex items-center justify-between mb-3 ${highlighted ? 'bg-primary/10 rounded-lg p-3 border border-primary/20' : ''}`} role="listitem">
      <div className="flex items-center gap-2">
        {highlighted && <Zap className="w-4 h-4 text-primary" aria-hidden="true" />}
        <span className={`text-sm ${highlighted ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
          {skill}
        </span>
      </div>
      <div className="w-20">
        <Progress 
          value={percentage} 
          className={`h-2 ${highlighted ? '[&>div]:bg-primary' : ''}`}
          aria-label={`${skill} skill level: ${percentage}%`}
        />
      </div>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Array<{ name: string; level: number; highlighted?: boolean }>;
}

function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <article className="gradient-border rounded-xl" role="listitem">
      <div className="bg-card rounded-xl p-8 h-full">
        <header className="text-primary mb-4">
          <Icon className="w-10 h-10 mx-auto" aria-hidden="true" />
        </header>
        <h3 className="text-xl font-semibold mb-4 text-card-foreground">{title}</h3>
        <div className="space-y-3" role="list" aria-label={`${title} skills`}>
          {skills.map((skill) => (
            <SkillBar 
              key={skill.name} 
              skill={skill.name} 
              percentage={skill.level} 
              highlighted={skill.highlighted}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SkillsSection() {
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
      ],
    },
    {
      icon: Settings,
      title: "Backend Development",
      skills: [
        { name: "Python", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 88 },
        { name: "APIs", level: 87 },
      ],
    },
    {
      icon: Bot,
      title: "Machine Learning",
      skills: [
        { name: "Python ML", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Security", level: 88 },
        { name: "Three.js", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/20" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Technical skills categories">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
