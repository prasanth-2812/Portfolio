import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <span className="text-muted-foreground text-sm">{skill}</span>
      <div className="w-20">
        <Progress value={percentage} className="h-2" />
      </div>
    </div>
  );
}

interface SkillCardProps {
  icon: string;
  title: string;
  skills: Array<{ name: string; level: number }>;
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="gradient-border rounded-xl">
      <div className="bg-card rounded-xl p-8 h-full">
        <div className="text-primary text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-card-foreground">{title}</h3>
        <div className="space-y-3">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "🎨",
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      skills: [
        { name: "Python", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 88 },
        { name: "APIs", level: 87 },
      ],
    },
    {
      icon: "🤖",
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
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
