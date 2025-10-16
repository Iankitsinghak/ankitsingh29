"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/animated-div";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FileText } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const FallbackAvatar = () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-full">
        <svg className="w-24 h-24 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    </div>
);

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButtonIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2500); // Change button every 2.5 seconds to match animation

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="relative min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 animated-gradient -z-10"></div>
      <div className="container text-center">
        
        <AnimatedDiv className="relative flex justify-center" delay={0.2}>
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

        <AnimatedDiv className="mt-8 space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
            Building Systems That Scale and Stories That Inspire.
          </h1>
          <AnimatedDiv delay={0.8}>
            <p className="max-w-2xl mx-auto text-lg font-semibold text-gray-300">
              Building my journey — one project, one idea, one line of code at a time.
            </p>
          </AnimatedDiv>
          <p className="max-w-xl mx-auto text-lg md:mx-auto text-muted-foreground/80">
            A Computer Science sophomore passionate about DevOps, Cloud Engineering, and creating scalable backend systems that make an impact.
          </p>
           <div className="relative flex flex-row flex-wrap justify-center gap-2 sm:gap-4">
              <Link href="#projects" passHref>
                <Button size="lg" variant="outline" className={cn("w-full text-lg border-2 sm:w-auto transition-all duration-300 border-input", activeButtonIndex === 0 ? "glossy-active" : "")}>
                  View Projects
                </Button>
              </Link>
              <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" variant="outline" className={cn("w-full text-lg border-2 sm:w-auto transition-all duration-300 border-input", activeButtonIndex === 1 ? "glossy-active" : "")}>
                  <FileText className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </Link>
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline" className={cn("w-full text-lg border-2 sm:w-auto transition-all duration-300 border-input", activeButtonIndex === 2 ? "glossy-active" : "")}>
                  Get in Touch
                </Button>
              </Link>
            </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
