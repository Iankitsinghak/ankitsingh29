"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks, socialLinks } from '@/lib/data';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.current?.observe(section));

    return () => {
      sections.forEach(section => observer.current?.unobserve(section));
    };
  }, []);

  const handleLinkClick = (hash: string) => {
    const element = document.getElementById(hash.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled || isOpen ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-bold transition-colors font-headline hover:text-accent">
          Ankit Singh
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.hash}
              variant="ghost"
              asChild
              className={cn(
                "relative transition-colors",
                activeSection === link.hash.substring(1) ? "text-accent" : "text-foreground hover:text-foreground/80"
              )}
            >
              <a href={link.hash} onClick={(e) => { e.preventDefault(); handleLinkClick(link.hash); }}>
                {link.name}
                {activeSection === link.hash.substring(1) && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </a>
            </Button>
          ))}
           <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer" className="ml-4">
              <Button variant="outline" size="sm" className="border-accent/50 hover:bg-accent hover:text-accent-foreground hover:glow-sm">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg md:hidden border-t border-border/50">
          <nav className="container flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <Button key={link.hash} variant="ghost" asChild className={cn("w-full text-lg", activeSection === link.hash.substring(1) ? "text-accent" : "text-foreground")}>
                <a href={link.hash} onClick={(e) => { e.preventDefault(); handleLinkClick(link.hash); }}>{link.name}</a>
              </Button>
            ))}
             <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
              <Button variant="outline" className="w-full border-accent/50">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
