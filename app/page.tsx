import { HeroSection } from "@/components/hero-section";
import { NavigationBar } from "@/components/navigation-bar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationBar />
      <HeroSection />
    </main>
  );
}
