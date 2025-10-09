"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import { AnimatedDiv } from "@/components/animated-div";
import { skillsData, learningBadges } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          Skill Growth Journey
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          My proficiency across various technologies and concepts in the DevOps and Cloud domain.
        </p>
      </AnimatedDiv>
      <div className="grid items-center grid-cols-1 gap-12 mt-12 lg:grid-cols-2">
        <AnimatedDiv className="w-full h-[400px] lg:h-[500px]" delay={0.1}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
              <defs>
                <radialGradient id="skillGradient">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                </radialGradient>
              </defs>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="hsl(var(--accent))"
                fill="url(#skillGradient)"
                fillOpacity={0.8}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </AnimatedDiv>
        <AnimatedDiv className="space-y-8" delay={0.2}>
          <div>
            <h3 className="text-2xl font-bold text-center font-headline lg:text-left">
              Core Competencies
            </h3>
            <p className="mt-2 text-center text-muted-foreground lg:text-left">
              These are the areas where I focus most of my energy and passion.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center font-headline lg:text-left">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4 lg:justify-start">
              {learningBadges.map((badge, index) => (
                <AnimatedDiv key={badge.name} delay={0.3 + index * 0.05}>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 p-2 px-3 text-sm transition-all duration-300 border-2 border-transparent cursor-pointer hover:border-accent hover:soft-glow"
                  >
                    <badge.icon className="w-5 h-5 text-accent" />
                    {badge.name}
                  </Badge>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
