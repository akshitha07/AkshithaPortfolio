import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Layers, 
  Figma, 
  MonitorSpeaker,
  Zap,
  Users
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces"
  },
  {
    icon: Code2,
    name: "React & Next.js",
    description: "Building modern, performant web applications"
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description: "Ensuring seamless experiences across all devices"
  },
  {
    icon: Layers,
    name: "Design Systems",
    description: "Developing scalable and consistent design frameworks"
  },
  {
    icon: Figma,
    name: "Prototyping",
    description: "Bringing ideas to life with interactive prototypes"
  },
  {
    icon: MonitorSpeaker,
    name: "User Research",
    description: "Understanding user needs through research and testing"
  },
  {
    icon: Zap,
    name: "Performance",
    description: "Optimizing applications for speed and efficiency"
  },
  {
    icon: Users,
    name: "Collaboration",
    description: "Working effectively with cross-functional teams"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set combining design thinking with technical expertise 
            to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name}
                className={`card-hover bg-card border-border animate-scale-in animate-stagger-${(index % 4) + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}