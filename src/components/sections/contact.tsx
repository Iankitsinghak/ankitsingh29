import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedDiv } from "@/components/animated-div";
import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <AnimatedDiv>
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">
          Let’s build something impactful together.
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </AnimatedDiv>

      <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-2">
        <AnimatedDiv delay={0.1}>
          <div className="p-8 border rounded-lg bg-card/50 backdrop-blur-sm border-white/10">
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" className="bg-background/50" />
              <Input type="email" placeholder="Your Email" className="bg-background/50" />
              <Textarea placeholder="Your Message" className="min-h-[150px] bg-background/50" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left" delay={0.2}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a href="mailto:ankit@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                ankit.singh@example.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Connect with me</h3>
              <div className="flex justify-center mt-4 space-x-4 lg:justify-start">
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="transition-all duration-300 border-accent/50 hover:bg-accent hover:text-accent-foreground hover:glow-sm">
                    <Github className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="transition-all duration-300 border-accent/50 hover:bg-accent hover:text-accent-foreground hover:glow-sm">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="transition-all duration-300 border-accent/50 hover:bg-accent hover:text-accent-foreground hover:glow-sm">
                    <FileText className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
