import { certificationsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedDiv } from "@/components/animated-div";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          🏆 Achievements & Certifications
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          My credentials, awards, and recognitions.
        </p>
      </AnimatedDiv>

      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <AnimatedDiv key={index} delay={index * 0.1}>
            <Card className="flex flex-col h-full transition-all duration-300 border-2 bg-card/50 border-transparent hover:border-accent hover:soft-glow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-headline">{cert.title}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-foreground/80">{cert.issuer}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                {cert.date && <p className="text-xs text-muted-foreground">{cert.date}</p>}
                <p className="text-sm">{cert.skills}</p>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}
