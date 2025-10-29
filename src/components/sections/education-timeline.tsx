import { educationTimeline } from "@/lib/data";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedDiv } from "@/components/animated-div";
import { HolographicCard } from "../holographic-card";

function TimelineCard(item: (typeof educationTimeline)[0]) {
  return (
    <HolographicCard>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{item.duration}</p>
        </div>
        <p className="text-sm font-semibold text-foreground/80">{item.institute}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{item.description}</p>
      </CardContent>
    </HolographicCard>
  );
}

export default function EducationTimeline() {
  return (
    <section id="education" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          📘 Education Timeline
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          My academic journey and key learning milestones.
        </p>
      </AnimatedDiv>

      <div className="relative mt-12">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50 hidden md:block" />

        <div className="space-y-8">
          {educationTimeline.map((item, index) => (
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
