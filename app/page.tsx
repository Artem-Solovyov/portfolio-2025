import { AbouteSection } from "@/components/AbouteSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { WorksSection } from "@/components/WorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <WorksSection />
      <AbouteSection />
    </>
  );
}
