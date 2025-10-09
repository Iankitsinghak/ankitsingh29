"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedDiv } from "@/components/animated-div";
import { Github } from "lucide-react";
import { gfgStats, githubContributions } from "@/lib/data";
import { cn } from "@/lib/utils";

const GFGIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
        <title>GeeksforGeeks</title>
        <path d="M11.984 0a.304.304 0 00-.215.09l-9.04 9.04a.304.304 0 000 .43l2.848 2.848a.304.304 0 00.43 0l5.98-5.98 5.982 5.98a.304.304 0 00.43 0l2.847-2.848a.304.304 0 000-.43l-9.04-9.04A.304.304 0 0011.984 0zM3.66 12.016a.304.304 0 00-.43 0L.382 14.864a.304.304 0 000 .43l9.04 9.04c.06.06.15.09.215.09a.304.304 0 00.215-.09l9.04-9.04a.304.304 0 000-.43l-2.848-2.848a.304.304 0 00-.43 0l-5.98 5.98-5.982-5.98a.304.304 0 00-.43 0z"/>
    </svg>
);

export default function Stats() {
  return (
    <section id="stats" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
            My Coding Footprint
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            A glimpse into my contributions and problem-solving activities.
          </p>
        </AnimatedDiv>
        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
          {/* GitHub Stats */}
          <AnimatedDiv className="lg:col-span-2" delay={0.1}>
            <Card className="h-full transition-all duration-300 border-2 hover:border-accent hover:soft-glow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Github className="w-6 h-6" />
                  <CardTitle className="font-headline">GitHub Contributions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 p-2 border rounded-md bg-background/50">
                  {githubContributions.map((day, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-3 h-3 rounded-sm tooltip-trigger",
                        day.count === 0 && "bg-secondary",
                        day.count > 0 && day.count <= 2 && "bg-accent/20",
                        day.count > 2 && day.count <= 5 && "bg-accent/50",
                        day.count > 5 && day.count <= 8 && "bg-accent/80",
                        day.count > 8 && "bg-accent"
                      )}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-center text-muted-foreground">
                    A snapshot of my commit history over the last year.
                </p>
              </CardContent>
            </Card>
          </AnimatedDiv>

          {/* GFG Stats */}
          <AnimatedDiv delay={0.2}>
            <Card className="h-full transition-all duration-300 border-2 hover:border-accent hover:soft-glow">
              <CardHeader>
                 <div className="flex items-center gap-2">
                  <GFGIcon />
                  <CardTitle className="font-headline">GFG Practice Stats</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col justify-center h-full gap-6">
                <div className="space-y-4">
                    <div>
                        <p className="text-4xl font-bold text-accent">{gfgStats.problemsSolved}</p>
                        <p className="text-muted-foreground">Problems Solved</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-accent">#{gfgStats.rank}</p>
                        <p className="text-muted-foreground">University Rank</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
