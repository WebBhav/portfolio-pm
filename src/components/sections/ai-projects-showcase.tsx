
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Bot } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'WebAstroAI',
    description: 'Developed an AI-powered astrology platform that combines web-based data analysis with intelligent interpretation to generate personalised astrological insights. The system automatically scans relevant sources, extracts patterns, and delivers contextual predictions tailored to each user’s profile. Designed with scalable architecture, clean UI, and seamless deployment—now fully live and functional for end users.',
    imageUrl: 'https://picsum.photos/400/200?random=1', // Replace with actual screenshot or relevant image
    projectUrl: 'https://webastroai.netlify.app/',
    tags: ['AI', 'Astrology', 'Web Analysis', 'Deployed', 'Personal Project'],
    icon: <Bot className="h-6 w-6 text-accent" />,
    aiHint: "artificial intelligence astrology web app",
  },
  // Add more relevant AI projects here if any from resume or future plans
  // {
  //   title: 'AI Content Generator (JustBaat)', // Example if mentioned explicitly as a separate project
  //   description: 'Led development of an AI Content Generator platform driving B2B2C user acquisition.',
  //   imageUrl: 'https://picsum.photos/400/200?random=2',
  //   projectUrl: '#', // Internal project, may not have a public link
  //   tags: ['AI', 'Content Generation', 'B2B2C', 'Work Project'],
  //   icon: <Bot className="h-6 w-6 text-accent" />,
  //   aiHint: "ai content generation platform",
  // },
];

const AiProjectsShowcase = () => {
  // If there are no AI projects listed after filtering, consider hiding the section or showing a message.
  if (projects.length === 0) {
    return null; // Or return a placeholder message
  }

  return (
    <section id="projects-ai" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">AI Projects Showcase</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300">
             <Image
               src={project.imageUrl}
               alt={project.title}
               width={400}
               height={200}
               className="w-full h-48 object-cover"
               data-ai-hint={project.aiHint}
             />
            <CardHeader className="flex-row items-start gap-4 pb-2">
              {project.icon}
              <div>
                <CardTitle>{project.title}</CardTitle>
                 <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant={project.projectUrl === '#' ? "secondary" : "default"} disabled={project.projectUrl === '#'} className="w-full">
                <Link href={project.projectUrl} target={project.projectUrl === '#' ? '_self' : '_blank'} rel="noopener noreferrer">
                  {project.projectUrl === '#' ? 'Details Unavailable' : 'View Project'}
                  {project.projectUrl !== '#' && <ExternalLink className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       {/* Optional: Add a note if some projects are internal */}
       {/* <p className="text-center text-muted-foreground mt-8">Note: Some projects listed were developed internally during my employment and may not have public links.</p> */}
    </section>
  );
};

export default AiProjectsShowcase;



    