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
import peanutsImage from "@/assets/peanuts-restaurant.jpg";
import hrmsImage from "@/assets/hrms-portal.jpg";
import hardcash from "@/assets/hardcash.jpg";

const projects = [
	{
		title: "Raider Dashboard",
		description:
			"A role-based dashboard for managing allocation tasks and maintaining FOS telecaller records, making team operations simple and organized.",
		image: ecommerceImage,
		tags: ["React", "Figma", "Tailwind CSS", "Redux"],
	},
	{
		title: "Zenploy (HRMS Portal)",
		description:
			"A modern HR management portal designed for efficient employee onboarding, payroll automation, and performance tracking.",
		image: hrmsImage,
		tags: ["Figma", "React", "Redux", "Tailwind CSS"],
	},
	{
		title: "Peanuts Restaurant",
		description:
			"A digital menu and reservation platform for restaurants, enabling online table booking, menu browsing, and customer feedback.",
		image: peanutsImage,
		tags: ["Figma", "Adobe XD", ", Material Design"],
	},
	{
		title: " HardCash website",
		description:
			"A fintech web app for secure money transfers, expense tracking, and real-time currency conversion for global travelers.",
		image: hardcash,
		tags: ["Tailwind", "react", "figama", "canva"],
	},
];

export function Projects() {
	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Featured{" "}
						<span className="gradient-text">Projects</span>
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
							className={`card-hover bg-card border-border overflow-hidden animate-fade-in animate-stagger-${
								(index % 3) + 1
							}`}
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
										{/* <Link href={project.link} target="_blank">
											View Project
										</Link> */}
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
										asChild
									>
										{/* <Link href={project.code} target="_blank">
											View Code
										</Link> */}
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