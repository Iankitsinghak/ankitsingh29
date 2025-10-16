"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatedDiv } from '@/components/animated-div';
import { socialLinks } from '@/lib/data';

const COMMAND = 'git fetch && git pull origin main';

export default function Terminal() {
  const [typedCommand, setTypedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      setIsTyping(true);
      setTypedCommand('');
      const interval = setInterval(() => {
        setTypedCommand((prev) => {
          if (prev.length < COMMAND.length) {
            return COMMAND.slice(0, prev.length + 1);
          } else {
            clearInterval(interval);
            setIsTyping(false);
            return prev;
          }
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="terminal" className="container py-24 sm:py-32">
      <AnimatedDiv ref={ref}>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          Dev Zone
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          A peek into my workflow. Check out my GitHub to see more.
        </p>
      </AnimatedDiv>
      <AnimatedDiv className="max-w-3xl mx-auto mt-12" delay={0.2}>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="terminal-body">
            <div className="terminal-prompt">
              <span className="text-green-400">~/portfolio</span>
              <span className="mx-1 text-gray-500">&gt;</span>
              <code className="terminal-command">
                {typedCommand}
                {isTyping && <span className="blinking-cursor"></span>}
              </code>
            </div>
            {!isTyping && (
              <div className="mt-2 text-gray-400">
                <p>Updated successfully. Want to see more of my code?</p>
                <p>
                  Visit my{' '}
                  <Link href={socialLinks.github} target="_blank" className="underline text-accent hover:text-accent/80">
                    GitHub profile
                  </Link>.
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
}

// Minimal useInView hook for this component to avoid extra dependency
const useInView = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [ref, options]);

    return isInView;
};
