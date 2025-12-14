import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Presentation, FileText, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Image from 'next/image';
import ReadMore from '@/components/ui/read-more';

const keyProjects = [
    {
    title: 'Payment Gateway | Product Design',
    date: 'July 2025',
    description: 'Designed a product strategy and end-to-end pitch deck for a Conversational AI–based merchant onboarding solution used by Payment Gateways. Included market sizing, user personas, feature architecture, RICE prioritisation, wireframes, GTM plan, key metrics, and risk analysis to improve completion rates and reduce onboarding friction for 25M+ digital MSMEs.',
    imageUrl: '/VaibhavSinghal_OnGrid.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1HCOuCQX1E14tF3GuXwKZ5e6XVyTmoNFK/view?usp=sharing',
    tags: ['Fintech', 'Product Design', 'Product Sense', 'Wireframing', 'Pitch Deck'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "payment gateway design",
  },
  {
    title: 'Improving Online Ordering Experience | BigBasket Now',
    date: 'June 2024',
    description: 'Secured 8th Rank in PM School #193 Challenge (Score: 87/99). Deep-dived into Q-Commerce market, created pitch deck for Bigbasket Now improvements aimed at increasing engagement. Designed wireframes and outlined end-to-end processes.',
    imageUrl: '/BigBasket.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1AsjAzRq_XmjMcHJJhDaVOOWB6qgXXvtL/view?usp=sharing', // Updated link
    tags: ['Q-Commerce', 'Case Study', 'Product Improvement', 'Pitch Deck', 'Wireframing'],
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    aiHint: "ecommerce app product design",
  },
  {
    title: 'Traders in College | BaaS Product GTM',
    date: 'May 2023',
    description: 'Developed a GTM strategy and pitch deck for a BaaS product targeting college students involved in trading (31B USD market). Included credit and consultancy services, wireframes, media promotions, and KYC procedures.',
    imageUrl: '/BaaS_Product.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1dwR6wgl-C7Ls4iNYGuovqTu33P41sCPs/view?usp=sharing', // Updated link
    tags: ['FinTech', 'BaaS', 'GTM Strategy', 'Pitch Deck', 'Student Market', 'Wireframing'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "fintech trading student app",
  },
  {
    title: 'JustBaat AI | Market Transition Strategy',
    date: 'May 2025',
    description: 'Designed an end-to-end product strategy and pitch deck for JustBaat AI, a video-first generative AI platform enabling faceless creators to produce vernacular AI videos at scale. Covered market sizing (7.5–15M creators), user personas, feature architecture, credit-based marketplace design, RICE prioritisation, success metrics, GTM plan, and risk analysis to improve creator onboarding, engagement, and monetisation across Meta and Google publisher ecosystems.',
    imageUrl: '/Justbaat.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1y1smVelyB3SY2hYz4wbbJ6_-OOE7FwgV/view?usp=sharing',
    tags: ['Product Strategy', 'Product Sense', 'Market Sizing', 'RICE Prioritisation', 'Wireframing', 'GTM'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "generative ai video platform strategy",
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
              <CardDescription as="div">
                <div className="block md:hidden">
                  <ReadMore text={project.description} />
                </div>
                <p className="hidden md:block">{project.description}</p>
              </CardDescription>
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
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="https://drive.google.com/drive/u/1/folders/1Hcd-58gybWHKgO3owtQSEhi86cUta7u6" target="_blank" rel="noopener noreferrer">
            Find more here <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default KeyProjectsSection;
