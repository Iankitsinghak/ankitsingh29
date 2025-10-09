import { professionalTimeline } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedDiv } from "@/components/animated-div";

export default function Timeline() {
  return (
    <section id="timeline" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          Building Systems That Scale — and Stories That Inspire.
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          My professional journey and key milestones.
        </p>
      </AnimatedDiv>

      <div className="relative mt-12">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50 hidden md:block" />

        <div className="space-y-8">
          {professionalTimeline.map((item, index) => (
            <AnimatedDiv key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                {/* Content Left */}
                <div className="w-full md:w-5/12">
                  {index % 2 === 0 ? <TimelineCard {...item} /> : <div />}
                </div>

                {/* Icon in the middle */}
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content Right */}
                <div className="w-full mt-4 md:w-5/12 md:mt-0">
                  {index % 2 !== 0 ? <TimelineCard {...item} /> : <div />}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard(item: (typeof professionalTimeline)[0]) {
  return (
    <Card className="transition-all duration-300 border-2 hover:border-accent hover:soft-glow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
          {item.logo && (
            <div className="p-1 rounded-md bg-secondary">
              <item.logo className="w-6 h-6 text-foreground" />
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{item.duration}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
}
