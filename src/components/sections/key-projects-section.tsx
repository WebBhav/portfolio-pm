import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Presentation, ExternalLink, FileText } from 'lucide-react'; // Added FileText
import Image from 'next/image';

const keyProjects = [
  {
    title: 'Improving Online Ordering Experience | BigBasket Now',
    date: 'June 2024',
    description: 'Secured 8th Rank in PM School #193 Challenge (Score: 87/99). Deep-dived into Q-Commerce market, created pitch deck for Bigbasket Now improvements aimed at increasing engagement. Designed wireframes and outlined end-to-end processes.',
    imageUrl: 'https://picsum.photos/400/200?random=4',
    pitchDeckUrl: 'https://drive.google.com/file/d/1AsjAzRq_XmjMcHJJhDaVOOWB6qgXXvtL/view?usp=sharing', // Updated link
    tags: ['Q-Commerce', 'Case Study', 'Product Improvement', 'Pitch Deck', 'Wireframing'],
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    aiHint: "ecommerce app product design",
  },
  {
    title: 'Traders in College | BaaS Product GTM',
    date: 'May 2023',
    description: 'Developed a GTM strategy and pitch deck for a BaaS product targeting college students involved in trading (31B USD market). Included credit and consultancy services, wireframes, media promotions, and KYC procedures.',
    imageUrl: 'https://picsum.photos/400/200?random=5',
    pitchDeckUrl: 'https://drive.google.com/file/d/1dwR6wgl-C7Ls4iNYGuovqTu33P41sCPs/view?usp=sharing', // Updated link
    tags: ['FinTech', 'BaaS', 'GTM Strategy', 'Pitch Deck', 'Student Market', 'Wireframing'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "fintech trading student app",
  },
];

const KeyProjectsSection = () => {
  return (
    <section id="key-projects" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Key Projects & Case Studies</h2>
      <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {keyProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300">
             <Image
               src={project.imageUrl}
               alt={project.title}
               width={400}
               height={200}
               className="w-full h-48 object-cover"
               data-ai-hint={project.aiHint}
             />
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
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
               {project.pitchDeckUrl !== '#' ? (
                <Button asChild variant="default" className="w-full">
                  {/* Ensure target="_blank" opens link in a new tab */}
                  <Link href={project.pitchDeckUrl} target="_blank" rel="noopener noreferrer">
                    View Pitch Deck <FileText className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
               ) : (
                 <Button variant="secondary" disabled className="w-full">
                    Pitch Deck Unavailable
                 </Button>
               )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyProjectsSection;
