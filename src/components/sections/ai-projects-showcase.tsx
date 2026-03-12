
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Bot, Mail, Workflow, ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';
import Image from 'next/image';
import ReadMore from '@/components/ui/read-more';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: 'Automated Revenue Generator (ARG)',
    description: 'Developed an AI-driven automated publishing and monetization engine that generates and operates revenue-ready websites with minimal human intervention. The system consists of two integrated modules: an Automated Website Generator and an AI Content Generator. The website generator creates new sites, prepares them for ad monetization, and implements essential technical SEO configurations.\n\nThe AI Content Generator continuously identifies trending topics via the Google Trends API, compiles reference signals, and feeds them into OpenAI Playground with structured prompts to produce SEO-optimized content. Generated articles are further processed through a text humanization layer to improve readability. The system also retrieves relevant reference images, attributes sources, and overlays branding before pushing to the ARG CMS for continuous publishing at scale.',
    imageUrl: 'https://picsum.photos/seed/arg/400/200',
    projectUrl: '#',
    flowchartUrl: 'https://picsum.photos/seed/arg-flow/1200/1600', // Placeholder for the flowchart
    tags: ['Automation', 'Generative AI', 'SEO Automation', 'Content Systems'],
    icon: <Workflow className="h-6 w-6 text-accent" />,
    aiHint: "automation flow revenue engine",
    hasFlowchart: true,
  },
  {
    title: 'WebAstroAI',
    description: 'Developed an AI-powered astrology platform that combines web-based data analysis with intelligent interpretation to generate personalised astrological insights. The system automatically scans relevant sources, extracts patterns, and delivers contextual predictions tailored to each user’s profile. Designed with scalable architecture, clean UI, and seamless deployment—now fully live and functional for end users.',
    imageUrl: 'https://picsum.photos/seed/astro/400/200',
    projectUrl: 'https://webastroai.netlify.app/',
    tags: ['AI', 'Astrology', 'Web Analysis', 'Deployed', 'Personal Project'],
    icon: <Bot className="h-6 w-6 text-accent" />,
    aiHint: "artificial intelligence astrology web app",
  },
  {
    title: 'Mail Automation | n8n',
    description: 'Developed a fully automated command-to-action engine using n8n, integrating a Telegram bot with Gemini’s LLM capabilities to understand user instructions. The system restructures inputs into a predefined operational format, fetches the appropriate Gmail template from a stored library, and sends the email instantly. Designed for reliability and scalability, it serves as a hands-free AI-driven workflow for automated communication.',
    imageUrl: 'https://picsum.photos/seed/mail/400/200',
    projectUrl: '#',
    tags: ['AI', 'Automation', 'n8n', 'Telegram', 'Personal Project'],
    icon: <Mail className="h-6 w-6 text-accent" />,
    aiHint: "mail automation telegram bot",
  },
];

const AiProjectsShowcase = () => {
  const [selectedFlowchart, setSelectedFlowchart] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoom(1);

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects-ai" className="container mx-auto pt-12 md:pt-16 scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Projects Showcase</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Projects built to gain real-world exposure in the new-age AI space.
        </p>
        <div className="multicolor-line mt-6 mb-12 w-24 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300">
             <div className="relative h-48 w-full group overflow-hidden">
               <Image
                 src={project.imageUrl}
                 alt={project.title}
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint={project.aiHint}
               />
               {project.hasFlowchart && (
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Button variant="secondary" size="sm" onClick={() => setSelectedFlowchart(project.flowchartUrl || null)}>
                     <Maximize2 className="mr-2 h-4 w-4" /> View Architecture
                   </Button>
                 </div>
               )}
             </div>
            <CardHeader className="flex-row items-start gap-4 pb-2">
              <div className="mt-1">{project.icon}</div>
              <div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                 <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] uppercase tracking-wider font-bold bg-secondary text-secondary-foreground px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-muted-foreground text-sm">
                <div className="block md:hidden">
                  <ReadMore text={project.description} maxLength={120} />
                </div>
                <p className="hidden md:block line-clamp-4">{project.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              {project.hasFlowchart && (
                <Button variant="outline" className="w-full" onClick={() => setSelectedFlowchart(project.flowchartUrl || null)}>
                  <Workflow className="mr-2 h-4 w-4" /> View Flowchart
                </Button>
              )}
              {project.projectUrl !== '#' && (
                <Button asChild variant="default" className="w-full">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Flowchart Modal */}
      <Dialog open={!!selectedFlowchart} onOpenChange={(open) => {
        if (!open) {
          setSelectedFlowchart(null);
          setZoom(1);
        }
      }}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] flex flex-col p-0 overflow-hidden bg-background">
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle>Project Architecture</DialogTitle>
                <DialogDescription>Automated Revenue Generator (ARG) Pipeline</DialogDescription>
              </div>
              <div className="flex items-center gap-2 mr-6">
                <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoom <= 1}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
                <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoom >= 3}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleResetZoom}>
                  Reset
                </Button>
              </div>
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-auto bg-muted/20 relative cursor-grab active:cursor-grabbing p-4">
            <div 
              className="relative min-h-full transition-transform duration-200 ease-out origin-top-left"
              style={{ 
                transform: `scale(${zoom})`,
                width: zoom > 1 ? `${zoom * 100}%` : '100%',
              }}
            >
              {selectedFlowchart && (
                <Image
                  src={selectedFlowchart}
                  alt="Architecture Flowchart"
                  width={2000}
                  height={2000}
                  className="w-full h-auto object-contain rounded-md shadow-2xl"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

       <div className="text-center text-muted-foreground mt-12 pb-8">
         <p>More AI Projects coming soon...</p>
       </div>
    </section>
  );
};

export default AiProjectsShowcase;
