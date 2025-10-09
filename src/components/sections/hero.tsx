import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/animated-div";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animated-gradient -z-10"></div>
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <AnimatedDiv className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
            Hi, I’m Ankit Singh
          </h1>
          <p className="text-2xl font-medium text-muted-foreground md:text-3xl">
            Building scalable systems for real-world impact.
          </p>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground/80 lg:mx-0">
            A Computer Science student passionate about DevOps, Cloud Engineering, and creating backend systems that scale.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="#projects">
              <Button size="lg" className="w-full text-lg transition-all duration-300 sm:w-auto">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="w-full text-lg border-2 sm:w-auto hover:bg-accent hover:text-accent-foreground hover:border-accent">
                Get in Touch
              </Button>
            </Link>
          </div>
        </AnimatedDiv>
        <AnimatedDiv className="flex justify-center" delay={0.2}>
            <div className="relative p-1 rounded-full w-72 h-72 lg:w-96 lg:h-96 animated-border-glow">
              <Image
                src="/profile.jpeg"
                alt="Ankit Singh's profile picture"
                width={384}
                height={384}
                priority
                className="object-cover w-full h-full rounded-full"
                data-ai-hint="male portrait"
              />
            </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}