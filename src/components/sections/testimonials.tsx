"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedDiv } from "@/components/animated-div";
import { testimonials } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          What Others Say
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Feedback from mentors and peers I've had the pleasure to work with.
        </p>
      </AnimatedDiv>
      <AnimatedDiv className="mt-12" delay={0.1}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <blockquote className="text-xl italic text-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                      <p className="mt-4 font-semibold text-accent">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </AnimatedDiv>
    </section>
  );
}
