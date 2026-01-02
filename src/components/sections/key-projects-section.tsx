
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Presentation, FileText, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Image from 'next/image';
import ReadMore from '@/components/ui/read-more';

const keyProjects = [
    {
    title: 'Times Job Application | RCA & Growth Strategy',
    date: 'January 2026',
    description: 'Led a comprehensive Root Cause Analysis (RCA) to diagnose low candidate engagement across $3,000+ active job listings. Identified a critical "Notification Gap" where a 14.9% email open rate was the primary bottleneck compared to WhatsApp’s 18x higher conversion efficiency. Developed a data-driven remediation plan featuring "High-Intent WhatsApp Retargeting" (triggering messages only for email-openers), industry-specific outreach routing for "deskless" workers (Healthcare/Manufacturing), and a "WhatsApp Boost" micro-transaction model for standard recruiters. Optimized the ₹0.93 (Email) vs. ₹2.34 (WA) cost-per-apply trade-off to project a 25% aggregate increase in job applications while maintaining platform unit margins.',
    imageUrl: '/Times.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1UKOs4vO8A6wrqCJiNgzB4VK64Pm8IOgf/view?usp=drive_link',
    tags: ['Product Analytics', 'RCA', 'Funnel Optimization', 'Unit Economics', 'Channel Strategy'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "job application growth strategy",
  },
  {
    title: 'PharmaTrade | Product Strategy',
    date: 'Aug 2025',
    description: 'Designed a zero-to-one B2B pharmaceutical trading marketplace aimed at bringing real-time price discovery, compliance, and liquidity to India’s fragmented pharma distribution ecosystem. Defined the product vision (“Bloomberg Terminal for Pharma”), sized TAM–SAM–SOM, built dual buyer–seller personas, architected core marketplace features (bid/offer engine, compliance validation, anonymous negotiation), prioritised roadmap using impact–feasibility, and designed GTM and risk-mitigation strategies to drive trust, adoption, and sustained transaction liquidity across Tier 1–3 cities.',
    imageUrl: '/pharma.jpg',
    pitchDeckUrl: 'https://drive.google.com/filed/1TM516BQy7atutg7lipz_jaoEUvgZlMSN/view?usp=sharing',
    tags: ['Product Strategy', 'Market Sizing', 'Two-Sided Marketplace Design', 'Supply Chain', 'HealthTech', 'GTM', 'Risk Analysis'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: 'pharmaceutical trading marketplace',
  },
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
    title: 'BNPL by Refyne | Product Strategy & Launch Plan',
    date: 'July 2025',
    description: 'Designed a zero-to-one enterprise-linked BNPL product enabling salaried employees to access no-cost EMI purchases through salary-deducted repayments. Built the end-to-end strategy covering TAM–SAM–SOM sizing, dual-persona analysis (employees & HR), credit-risk architecture, phased MVP roadmap, success metrics, GTM plan, and regulatory risk mitigation to drive responsible credit adoption while maintaining low default risk across partner enterprises',
    imageUrl: '/Refyne.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1bg9DFH4ZFRBwGfNAlO0NL5xdKNTMNsqT/view?usp=sharing',
    tags: ['Product Strategy', 'Market Sizing', 'User Journeys', 'Risk Design', 'Credit'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "bnpl product strategy",
  },
  {
    title: 'Canva | User Onboarding – Product Strategy & Design',
    date: 'June 2025',
    description: 'Designed a product strategy and onboarding-led growth framework to improve new user activation and reduce early churn for a Canva-like design platform. Conducted market sizing (135M+ MAU), defined user personas, mapped onboarding friction points, proposed a “try-before-signup” onboarding flow, prioritised features using RICE, and outlined GTM, success metrics, and risk analysis to increase acquisition, engagement, and premium conversion across individual and community-based creators',
    imageUrl: '/Omnify.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1snpQjcqyoU_sFpPWQ15ivjPTdtSJFN9n/view?usp=sharing',
    tags: ['Product Strategy', 'Product Sense', 'Onboarding Design', 'Market Sizing', 'RICE Prioritisation', 'GTM'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "canva product strategy",
  },
  {
    title: 'JustBaat AI | Market Transition Strategy',
    date: 'May 2024',
    description: 'Designed an end-to-end product strategy and pitch deck for JustBaat AI, a video-first generative AI platform enabling faceless creators to produce vernacular AI videos at scale. Covered market sizing (7.5–15M creators), user personas, feature architecture, credit-based marketplace design, RICE prioritisation, success metrics, GTM plan, and risk analysis to improve creator onboarding, engagement, and monetisation across Meta and Google publisher ecosystems.',
    imageUrl: '/Justbaat.jpg',
    pitchDeckUrl: 'https://drive.google.com/file/d/1y1smVelyB3SY2hYz4wbbJ6_-OOE7FwgV/view?usp=sharing',
    tags: ['Product Strategy', 'Product Sense', 'Market Sizing', 'RICE Prioritisation', 'Wireframing', 'GTM'],
    icon: <Presentation className="h-6 w-6 text-accent" />,
    aiHint: "generative ai video platform strategy",
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
];

const KeyProjectsSection = () => {
  return (
    <section id="key-projects" className="container mx-auto py-12 md:py-16 scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Projects & Case Studies</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Projects built with a product-first approach across multiple digital verticals.
        </p>
        <div className="multicolor-line mt-6 mb-12 w-24 mx-auto"></div>
      </div>
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
                <ReadMore text={project.description} />
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
    </section>
  );
};

export default KeyProjectsSection;
