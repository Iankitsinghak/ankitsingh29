import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Timeline from '@/components/sections/timeline';
import Skills from '@/components/sections/skills';
import Stats from '@/components/sections/stats';
import Projects from '@/components/sections/projects';
import Journey from '@/components/sections/journey';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Timeline />
        <Skills />
        <Stats />
        <Projects />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
