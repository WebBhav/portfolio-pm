
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Bot, Mail } from 'lucide-react';
import Image from 'next/image';
import ReadMore from '@/components/ui/read-more';

const projects = [
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
  // If there are no AI projects listed after filtering, consider hiding the section or showing a message.
  if (projects.length === 0) {
    return null; // Or return a placeholder message
  }

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
              <CardDescription as="div">
                <div className="block md:hidden">
                  <ReadMore text={project.description} />
                </div>
                <p className="hidden md:block">{project.description}</p>
              </CardDescription>
            </CardContent>
            {project.projectUrl !== '#' && (
              <CardFooter>
                <Button asChild variant="default" className="w-full">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
       <div className="text-center text-muted-foreground mt-16">
         <p>More AI Projects coming soon...</p>
       </div>
    </section>
  );
};

export default AiProjectsShowcase;
