
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Bot, Mail, Workflow, ZoomIn, ZoomOut, Maximize2, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import ReadMore from '@/components/ui/read-more';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const argFlowchartHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  :root {
    --bg1: #05060c;
    --bg2: #0a0f1e;
  }
  * { box-sizing: border-box; }
  .arg-flow-container {
    background: radial-gradient(ellipse at 50% 0%, #0d1226 0%, #05060c 55%, #020308 100%);
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    color: #e8f4ff;
    padding: 36px 20px 60px;
    min-height: 100%;
  }
  .arg-header {
    text-align: center;
    margin-bottom: 8px;
  }
  .arg-header h1 {
    font-size: 28px;
    letter-spacing: 1px;
    margin: 0 0 6px;
    background: linear-gradient(90deg, #00e5ff, #ff37d0 60%, #c6ff4d);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .arg-header p {
    margin: 0;
    color: #7fa0c9;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .arg-legend {
    display: flex;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
    margin: 20px 0 10px;
    font-size: 12px;
    color: #b9d2ee;
  }
  .arg-legend span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  .arg-legend i {
    width: 10px; height: 10px; border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 8px currentColor;
  }
  .node-box { fill: rgba(8, 14, 28, 0.85); stroke-width: 2; }
  .edge-flow {
    fill: none;
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-dasharray: 14 220;
    animation: flowDash 3s linear infinite;
  }
  @keyframes flowDash {
    from { stroke-dashoffset: 234; }
    to { stroke-dashoffset: 0; }
  }
</style>
</head>
<body>
  <div class="arg-flow-container">
    <div class="arg-header">
      <h1>Automated Revenue Generator</h1>
      <p>End-to-end system flow · ARG</p>
    </div>
    <div class="arg-legend">
      <span><i style="background:#00e5ff"></i> AI Content Generator</span>
      <span><i style="background:#ff37d0"></i> Website Generator</span>
      <span><i style="background:#ffab2e"></i> Media Pipeline</span>
      <span><i style="background:#7dffb0"></i> Publish</span>
    </div>
    <svg viewBox="60 2390 1860 1780" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
      <g style="--ec:#ff37d0;">
        <path class="edge-flow" d="M 1378,2500 C 1378,2560 1755,2560 1755,2620" stroke="#ff37d0"/>
        <path class="edge-flow" d="M 1755,2698 L 1755,2748" stroke="#ff37d0"/>
        <path class="edge-flow" d="M 1755,2802 L 1755,2852" stroke="#ff37d0"/>
      </g>
      <g style="--ec:#00e5ff;">
        <path class="edge-flow" d="M 1118,2500 C 1118,2541 740,2541 740,2582" stroke="#00e5ff"/>
        <path class="edge-flow" d="M 740,2660 L 740,2710" stroke="#00e5ff"/>
        <path class="edge-flow" d="M 740,2764 L 740,2918" stroke="#00e5ff"/>
      </g>
      <rect class="node-box" x="1118" y="2430" width="260" height="102" rx="12" stroke="#ffd24d"/>
      <text x="1248" y="2480" text-anchor="middle" fill="#fff" font-size="16">ARG Engine</text>
      
      <rect class="node-box" x="610" y="2582" width="260" height="78" rx="12" stroke="#00e5ff"/>
      <text x="740" y="2625" text-anchor="middle" fill="#fff" font-size="14">AI Content Generator</text>

      <rect class="node-box" x="1630" y="2620" width="250" height="78" rx="12" stroke="#ff37d0"/>
      <text x="1755" y="2665" text-anchor="middle" fill="#fff" font-size="14">Website Generator</text>
    </svg>
  </div>
</body>
</html>
`;

const projects = [
  {
    title: 'Intelligent Document Processing | AI-ML',
    date: 'June 2026',
    description: 'Developed an AI-powered Intelligent Document Processing (IDP) platform that classifies documents from a central email and routes them to the appropriate AI agent. The system automates extraction, validation, invoice creation, E-Way Bill creation, RFQ and CPO processing, SPO generation, and finance approval workflows, eliminating manual effort and improving processing efficiency.',
    imageUrl: 'https://picsum.photos/seed/idp/600/400',
    projectUrl: '#',
    tags: ['AI', 'ML', 'Fresh Service', 'Automation', 'Agentic Workflow'],
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    aiHint: "document processing automation",
    ctaText: 'View Automation'
  },
  {
    title: 'Automated Revenue Generator (ARG) | AI',
    date: 'February 2025',
    description: 'Developed an AI-driven automated publishing and monetization engine that generates and operates revenue-ready websites with minimal human intervention. The system consists of two integrated modules: an Automated Website Generator and an AI Content Generator. The website generator creates new sites, prepares them for ad monetization, and implements essential technical SEO configurations.\n\nThe AI Content Generator continuously identifies trending topics via the Google Trends API, compiles reference signals, and feeds them into OpenAI Playground with structured prompts to produce SEO-optimized content including titles, descriptions, full articles, keywords, and meta tags. Generated articles are further processed through a text humanization layer to improve readability and content quality.\n\nIn parallel, the system retrieves relevant reference images, attributes the source appropriately, and overlays site branding before publishing. All generated media and content are automatically pushed to the ARG CMS, enabling continuous publishing at scale. The ecosystem is designed to capture organic search traffic and generate advertising revenue, creating a fully automated content-to-monetization pipeline.',
    imageUrl: 'https://picsum.photos/seed/arg/600/400',
    projectUrl: '#',
    flowchartUrl: 'arg-html',
    tags: ['Automation', 'Generative AI', 'SEO Automation', 'Content Systems'],
    icon: <Workflow className="h-6 w-6 text-accent" />,
    aiHint: "automation flow revenue engine",
    hasFlowchart: true,
  },
  {
    title: 'WebAstroAI | AI',
    date: 'January 2025',
    description: 'Developed an AI-powered astrology platform that combines web-based data analysis with intelligent interpretation to generate personalised astrological insights. The system automatically scans relevant sources, extracts patterns, and delivers contextual predictions tailored to each user’s profile. Designed with scalable architecture, clean UI, and seamless deployment—now fully live and functional for end users.',
    imageUrl: 'https://picsum.photos/seed/astro/600/400',
    projectUrl: 'https://webastroai.netlify.app/',
    tags: ['AI', 'Astrology', 'Web Analysis', 'Deployed'],
    icon: <Bot className="h-6 w-6 text-accent" />,
    aiHint: "artificial intelligence astrology web app",
  },
  {
    title: 'Mail Automation | n8n',
    date: 'July 2025',
    description: 'Developed a fully automated command-to-action engine using n8n, integrating a Telegram bot with Gemini’s LLM capabilities to understand user instructions. The system restructures inputs into a predefined operational format, fetches the appropriate Gmail template from a stored library, and sends the email instantly. Designed for reliability and scalability, it serves as a hands-free AI-driven workflow for automated communication.',
    imageUrl: 'https://picsum.photos/seed/mail/600/400',
    projectUrl: '#',
    tags: ['AI', 'Automation', 'n8n', 'Telegram'],
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

  return (
    <section id="projects-ai" className="container mx-auto py-12 md:py-16 scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Projects Showcase</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Projects built to gain real-world exposure in the new-age AI space.
        </p>
        <div className="multicolor-line mt-6 mb-12 w-24 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <CardHeader className="pb-2">
               <div className="flex items-center justify-between mb-1">
                   <div className="flex items-center gap-3">
                       {project.icon}
                       <CardTitle className="text-lg">{project.title}</CardTitle>
                   </div>
                   <span className="text-xs text-muted-foreground">{project.date}</span>
               </div>
                 <div className="flex flex-wrap gap-1 pt-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription as="div">
                <ReadMore text={project.description} />
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              {project.hasFlowchart && (
                <Button variant="default" className="w-full" onClick={() => setSelectedFlowchart(project.flowchartUrl || null)}>
                  View Flowchart <Workflow className="ml-2 h-4 w-4" />
                </Button>
              )}
              {project.projectUrl !== '#' && (
                <Button asChild variant="default" className="w-full">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    {project.ctaText || 'View Project'} <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.ctaText && project.projectUrl === '#' && !project.hasFlowchart && (
                <Button variant="default" className="w-full">
                  {project.ctaText} <Workflow className="ml-2 h-4 w-4" />
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
                <DialogDescription>Detailed Pipeline Workflow</DialogDescription>
              </div>
              {selectedFlowchart !== 'arg-html' && (
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
              )}
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-auto bg-muted/20 relative p-0">
            {selectedFlowchart === 'arg-html' ? (
              <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: argFlowchartHtml }} />
            ) : (
              <div 
                className="relative min-h-full transition-transform duration-200 ease-out origin-top-left flex items-start justify-center p-4"
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
                    className="max-w-full h-auto object-contain rounded-md shadow-2xl"
                  />
                )}
              </div>
            )}
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
