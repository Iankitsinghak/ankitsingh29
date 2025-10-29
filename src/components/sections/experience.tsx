import { experienceTimeline } from "@/lib/data";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedDiv } from "@/components/animated-div";
import { HolographicCard } from "../holographic-card";

function TimelineCard(item: (typeof experienceTimeline)[0]) {
  return (
    <HolographicCard>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{item.duration}</p>
        </div>
        <p className="text-sm font-semibold text-foreground/80">{item.organization}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{item.description}</p>
      </CardContent>
    </HolographicCard>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary">
        <div className="container">
            <AnimatedDiv>
                <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
                💼 Professional Experience
                </h2>
                <p className="mt-4 text-center text-muted-foreground">
                A timeline of my professional roles and contributions.
                </p>
            </AnimatedDiv>

            <div className="relative mt-12">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50 hidden md:block" />

                <div className="space-y-8">
                {experienceTimeline.map((item, index) => (
                    <AnimatedDiv key={index} delay={index * 0.1}>
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                        <div className="w-full md:w-5/12">
                        {index % 2 === 0 ? <TimelineCard {...item} /> : <div />}
                        </div>

                        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
                        <item.icon className="w-6 h-6" />
                        </div>

                        <div className="w-full mt-4 md:w-5/12 md:mt-0">
                        {index % 2 !== 0 ? <TimelineCard {...item} /> : <div />}
                        </div>
                    </div>
                    </AnimatedDiv>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
}
