import { AboutSection } from "@/components/about-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { HeroSection } from "@/components/hero-section";
import { NavigationBar } from "@/components/navigation-bar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperiencesSection />
    </main>
  );
}
