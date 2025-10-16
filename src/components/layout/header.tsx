"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks, socialLinks } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';

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
        <div className="flex items-center gap-4">
          <nav className="items-center hidden gap-1 md:flex">
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
                    <motion.span 
                      layoutId="activeSectionIndicator"
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              </Button>
            ))}
          </nav>

          <AnimatePresence>
            {isScrolled && (
              <motion.div
                className="items-center hidden md:flex"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-accent/50">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 md:hidden">
            <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-accent/50">
                <FileText className="w-4 h-4" />
              </Button>
            </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg md:hidden border-t border-border/50"
        >
          <nav className="container flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <Button key={link.hash} variant="ghost" asChild className={cn("w-full text-lg", activeSection === link.hash.substring(1) ? "text-accent" : "text-foreground")}>
                <a href={link.hash} onClick={(e) => { e.preventDefault(); handleLinkClick(link.hash); }}>{link.name}</a>
              </Button>
            ))}
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
