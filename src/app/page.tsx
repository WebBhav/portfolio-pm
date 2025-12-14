
import HeroSection from '@/components/sections/hero-section';
import JourneySection from '@/components/sections/journey-section'; // New import for merged section
import AiProjectsShowcase from '@/components/sections/ai-projects-showcase';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import SkillsSection from '@/components/sections/skills-section';
import KeyProjectsSection from '@/components/sections/key-projects-section';
import PositionsSection from '@/components/sections/positions-section';
import AwardsSection from '@/components/sections/awards-section';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/ui/animated-section';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <JourneySection /> {/* Use the new JourneySection */}
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <AiProjectsShowcase />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <KeyProjectsSection />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <PositionsSection />
      </AnimatedSection>
       <Separator />
      <AnimatedSection>
        <AwardsSection />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
