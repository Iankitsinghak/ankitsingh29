"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AnimatedDiv } from '../animated-div';
import { HolographicCard } from '../holographic-card';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);

  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => (
    <HolographicCard>
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {project.links.github && (
            <Link href={project.links.github} target="_blank">
              <Button variant="outline" size="icon"><Github /></Button>
            </Link>
          )}
          {project.links.live && (
            <Link href={project.links.live} target="_blank">
              <Button variant="outline" size="icon"><ExternalLink /></Button>
            </Link>
          )}
        </div>
        <DialogTrigger asChild>
          <Button onClick={() => setSelectedProject(project)}>View Details</Button>
        </DialogTrigger>
      </CardFooter>
    </HolographicCard>
  );

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
      <section id="projects" className="container py-24 sm:py-32">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
            🚀 My Projects
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            A selection of projects that showcase my skills and passion.
          </p>
        </AnimatedDiv>

        {featuredProject && (
            <AnimatedDiv className="mt-12" delay={0.1}>
                <h3 className="mb-4 text-2xl font-bold text-center font-headline sm:text-3xl">Featured Project</h3>
                 <div className="max-w-4xl mx-auto">
                    <ProjectCard project={featuredProject} />
                 </div>
            </AnimatedDiv>
        )}

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <AnimatedDiv key={project.title} delay={0.2 + index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedDiv>
          ))}
        </div>

        <AnimatedDiv className="mt-12 text-center">
          <Link href="https://github.com/ankitsinglr26" target="_blank">
            <Button variant="ghost">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </AnimatedDiv>

        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{selectedProject.title}</DialogTitle>
              <p className="text-sm text-muted-foreground">{selectedProject.tagline}</p>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                </div>
                <div>
                    <h4 className="font-semibold">Description</h4>
                    <p className="text-muted-foreground">{selectedProject.details.description}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Challenges</h4>
                    <p className="text-muted-foreground">{selectedProject.details.challenges}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Outcomes</h4>
                    <p className="text-muted-foreground">{selectedProject.details.outcomes}</p>
                </div>
            </div>
          </DialogContent>
        )}
      </section>
    </Dialog>
  );
}
