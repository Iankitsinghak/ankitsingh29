import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import EducationTimeline from '@/components/sections/education-timeline';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Stats from '@/components/sections/stats';
import Contact from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';
import Certifications from '@/components/sections/certifications';
import IntroAnimation from '@/components/intro-animation';
import Terminal from '@/components/sections/terminal';

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <EducationTimeline />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Experience />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Projects />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Skills />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Terminal />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Certifications />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Stats />
          <Separator className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px]" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
