import { ChevronDown } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Link } from "wouter";
import HeroCanvas from "@/components/three/hero-canvas";

export default function HeroSection() {
  const scrollToSection = useSmoothScroll();

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      <HeroCanvas />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
        <div className="floating-animation">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Kathi Prasanth</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 typing-animation" role="text">
            Full Stack Web Developer
          </p>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            B.Tech in Information Technology | Passionate about creating innovative web solutions with modern technologies including Python, React, Node.js, and Machine Learning
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center" role="navigation" aria-label="Main navigation">
            <Link href="/projects">
              <button
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                data-testid="button-view-work"
                aria-label="View my portfolio projects"
              >
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                data-testid="button-contact"
                aria-label="Get in touch for collaboration"
              >
                Get In Touch
              </button>
            </Link>
          </nav>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
        data-testid="button-scroll-down"
        aria-label="Scroll down to learn more about me"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </header>
  );
}
