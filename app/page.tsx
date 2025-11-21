import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <ExperienceTimeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
