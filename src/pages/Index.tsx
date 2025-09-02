import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
