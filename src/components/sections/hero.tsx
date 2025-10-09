"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/animated-div";
import Link from "next/link";
import { useState } from "react";
import { FileText } from "lucide-react";
import { socialLinks } from "@/lib/data";

const FallbackAvatar = () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-full">
        <svg className="w-24 h-24 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    </div>
);

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 animated-gradient -z-10"></div>
      <div className="container grid items-center grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left">
        
        <AnimatedDiv className="relative flex justify-center md:justify-start" delay={0.2}>
          <div className="flex flex-col items-center">
            <div className="profile-image-wrapper">
              <div className="profile-image-container">
                {!imageError ? (
                  <Image
                    src="/profile.jpeg"
                    alt="Ankit Singh's profile picture"
                    width={256}
                    height={256}
                    priority
                    className="profile-image"
                    data-ai-hint="male portrait"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="profile-image">
                    <FallbackAvatar />
                  </div>
                )}
              </div>
              <div className="holographic-ring"></div>
            </div>
             <p className="profile-name-text">
              Ankit Singh
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
            Building Systems That Scale and Stories That Inspire.
          </h1>
          <p className="max-w-xl mx-auto text-lg md:mx-0 text-muted-foreground/80">
            A Computer Science sophomore passionate about DevOps, Cloud Engineering, and creating scalable backend systems that make an impact.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link href="#projects">
              <Button size="lg" className="w-full text-lg transition-all duration-300 sm:w-auto glow">
                View Projects
              </Button>
            </Link>
             <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full text-lg border-2 sm:w-auto hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="ghost" className="w-full text-lg sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
