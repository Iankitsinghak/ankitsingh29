"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedDiv } from "@/components/animated-div";
import { cn } from "@/lib/utils";

const featuredProject = projects[0];
const otherProjects = projects.slice(1);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getPlaceholderImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          Projects Gallery
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          A selection of projects I've worked on.
        </p>
      </AnimatedDiv>

      {/* Featured Project */}
      <AnimatedDiv className="mt-12" delay={0.1}>
        <Card className="grid overflow-hidden transition-all duration-300 border-2 md:grid-cols-2 lg:grid-cols-5 group hover:border-accent hover:soft-glow">
          <div className="relative h-64 md:h-full lg:col-span-3">
            <Image
              src={getPlaceholderImage(featuredProject.imageId)?.imageUrl || ''}
              alt={featuredProject.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={getPlaceholderImage(featuredProject.imageId)?.imageHint}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col justify-between p-6 lg:col-span-2">
            <div>
              <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent">Featured Project</Badge>
              <CardTitle className="text-2xl font-bold font-headline">
                {featuredProject.title}
              </CardTitle>
              <p className="mt-2 text-muted-foreground">
                {featuredProject.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {featuredProject.tech.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
            </div>
            <CardFooter className="p-0 mt-6">
              <Button onClick={() => setSelectedProject(featuredProject)} className="w-full">
                View Details
              </Button>
            </CardFooter>
          </div>
        </Card>
      </AnimatedDiv>

      {/* Other Projects */}
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <AnimatedDiv key={project.title} delay={0.2 + index * 0.1}>
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 border-2 group hover:border-accent hover:soft-glow">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image
                    src={getPlaceholderImage(project.imageId)?.imageUrl || ''}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={getPlaceholderImage(project.imageId)?.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="text-xl font-bold font-headline">
                  {project.title}
                </CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button onClick={() => setSelectedProject(project)} variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </AnimatedDiv>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.tagline}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative h-64 rounded-lg overflow-hidden">
                   <Image
                    src={getPlaceholderImage(selectedProject.imageId)?.imageUrl || ''}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    data-ai-hint={getPlaceholderImage(selectedProject.imageId)?.imageHint}
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Description</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Challenges</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Outcomes</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.outcomes}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    {selectedProject.github && <Link href={selectedProject.github} target="_blank"><Button variant="outline"><Github className="mr-2"/>GitHub</Button></Link>}
                    {selectedProject.live && <Link href={selectedProject.live} target="_blank"><Button><ExternalLink className="mr-2"/>Live Demo</Button></Link>}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
