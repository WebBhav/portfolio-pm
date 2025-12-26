
import type { Metadata } from 'next';
import AiProjectsShowcase from '@/components/sections/ai-projects-showcase';
import KeyProjectsSection from '@/components/sections/key-projects-section';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/ui/animated-section';

export const metadata: Metadata = {
  title: 'Projects | Vaibhav Singhal',
  description: 'A showcase of AI projects and key product case studies by Vaibhav Singhal, demonstrating skills in product management, AI, and design.',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <AnimatedSection>
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                A showcase of my work in AI and product strategy.
            </p>
             <div className="multicolor-line mt-6 mb-12 w-24 mx-auto"></div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AiProjectsShowcase />
      </AnimatedSection>
      
      <Separator />

      <AnimatedSection>
        <KeyProjectsSection />
      </AnimatedSection>
    </div>
  );
}
