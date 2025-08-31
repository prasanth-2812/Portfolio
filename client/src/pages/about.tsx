import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
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
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate about creating innovative solutions with cutting-edge technology
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center mb-20"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp} className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Professional Journey</h2>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">Full Stack Developer</h3>
                      <p className="text-muted-foreground">Specializing in modern web technologies including React, Node.js, and Python. Passionate about creating seamless user experiences and robust backend systems.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">Machine Learning Enthusiast</h3>
                      <p className="text-muted-foreground">Developed advanced ML models for cybersecurity applications, including phishing detection systems using Python and various ML frameworks.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2">Innovation Driven</h3>
                      <p className="text-muted-foreground">Always exploring new technologies and methodologies to solve complex problems and deliver exceptional digital experiences.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="grid gap-6">
                  <motion.div 
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-primary">Education</h3>
                    <h4 className="text-xl text-card-foreground mb-2">Bachelor of Technology</h4>
                    <p className="text-muted-foreground mb-3">Information Technology</p>
                    <p className="text-sm text-secondary">
                      Comprehensive study of modern computing technologies, software engineering principles, 
                      and emerging technological trends.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-primary">Specializations</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-card-foreground">Full Stack Web Development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-card-foreground">Machine Learning & AI</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-card-foreground">Cybersecurity</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-card-foreground">3D Web Development</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-foreground">My Vision</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                I believe in the power of technology to transform ideas into reality. My goal is to create 
                digital solutions that not only meet functional requirements but also provide exceptional 
                user experiences. Whether it's developing secure web applications, implementing machine 
                learning models, or crafting immersive 3D experiences, I'm committed to delivering 
                innovative solutions that make a meaningful impact.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}