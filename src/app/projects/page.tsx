
import type { Metadata } from 'next';
import AiProjectsShowcase from '@/components/sections/ai-projects-showcase';
import KeyProjectsSection from '@/components/sections/key-projects-section';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Vaibhav Singhal',
  description: 'A showcase of AI projects and key product case studies by Vaibhav Singhal, demonstrating skills in product management, AI, and design.',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <AnimatedSection>
        <AiProjectsShowcase />
      </AnimatedSection>
      
      <Separator />

      <AnimatedSection>
        <KeyProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/#journey">
                    <Briefcase className="mr-2 h-5 w-5" /> My Professional Journey
                </Link>
            </Button>
        </div>
       </AnimatedSection>
    </div>
  );
}
