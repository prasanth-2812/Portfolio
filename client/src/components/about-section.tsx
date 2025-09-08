export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by innovation and passionate about technology
          </p>
        </header>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <article className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Profile</h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                <span className="text-foreground">Full Stack Web Developer with expertise in modern technologies</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                <span className="text-foreground">B.Tech in Information Technology</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                <span className="text-foreground">Specialized in Machine Learning and Web Development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                <span className="text-foreground">Passionate about creating secure and innovative solutions</span>
              </li>
            </ul>
          </article>
          <div className="grid gap-6">
            <article className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
              <h4 className="text-xl font-semibold mb-3 text-primary">Education</h4>
              <p className="text-card-foreground mb-2">Bachelor of Technology</p>
              <p className="text-muted-foreground">Information Technology</p>
            </article>
            <article className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
              <h4 className="text-xl font-semibold mb-3 text-primary">Specialization</h4>
              <p className="text-card-foreground mb-2">Full Stack Development</p>
              <p className="text-muted-foreground">Machine Learning & Web Security</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
