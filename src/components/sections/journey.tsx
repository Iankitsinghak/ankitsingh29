import { AnimatedDiv } from "@/components/animated-div";
import { journeySteps } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
            My Growth Timeline
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            A visual representation of my learning and development journey over the years.
          </p>
        </AnimatedDiv>

        <div className="relative mt-12">
          <div className="flex w-full pb-8 overflow-x-auto snap-x snap-mandatory">
            <div className="flex items-center gap-4 px-4 sm:gap-8">
              {journeySteps.map((step, index) => (
                <AnimatedDiv
                  key={index}
                  className="flex items-center flex-shrink-0 gap-4 snap-center sm:gap-8"
                  delay={index * 0.1}
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 border-2 rounded-lg w-60 h-40 bg-card border-transparent hover:border-accent hover:soft-glow">
                    <p className="text-lg font-bold text-accent font-headline">
                      {step.year}
                    </p>
                    <p className="mt-2 text-foreground">{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <ArrowRight className="flex-shrink-0 w-8 h-8 text-muted-foreground/50" />
                  )}
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
