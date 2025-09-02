import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import financeImage from "@/assets/project-finance.jpg";
import healthcareImage from "@/assets/project-healthcare.jpg";
import travelImage from "@/assets/project-travel.jpg";
import socialImage from "@/assets/project-social.jpg";
import learningImage from "@/assets/project-learning.jpg";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
    image: ecommerceImage,
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Finance App UI",
    description: "Modern financial application interface with intuitive expense tracking, budget planning, and investment portfolio management.",
    image: financeImage,
    tags: ["Figma", "React Native", "Redux", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Platform",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    image: healthcareImage,
    tags: ["Next.js", "Supabase", "Framer Motion", "Prisma"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Travel Booking App",
    description: "Seamless travel experience with flight booking, hotel reservations, and itinerary planning features.",
    image: travelImage,
    tags: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Unified social media management tool for content scheduling, analytics, and multi-platform engagement.",
    image: socialImage,
    tags: ["React", "GraphQL", "D3.js", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Learning Platform",
    description: "Interactive online learning environment with video streaming, progress tracking, and collaborative features.",
    image: learningImage,
    tags: ["Angular", "Express", "PostgreSQL", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of recent work demonstrating expertise in UI/UX design and 
            front-end development across various industries and platforms.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`card-hover bg-card border-border overflow-hidden animate-fade-in animate-stagger-${(index % 3) + 1}`}
            >
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}