'use client';

import { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, FileText, ArrowRight, MapPin, BrainCircuit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ReadMoreList from '@/components/ui/read-more-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type JourneyItem = {
  type: 'experience' | 'education';
  icon: JSX.Element;
  date: string;
  location?: string;
  title: string;
  description: string;
  details?: string[];
  startDate: Date; 
};

const journeyData: JourneyItem[] = [
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/moglix.jpg" alt="Moglix" fill className="object-cover" />
      </div>
    ),
    date: 'February 2026 - Present',
    location: 'Noida, Uttar Pradesh, IND',
    title: 'Associate Product Manager - Moglix',
    description: "Company Details: India's 13th Unicorn, revolutionising e-commerce specially in industrial supplies and services.",
    details: [
        "Spearheading AI-driven enterprise transformation, delivering an 80% automated AI-native Procurement-to-Pay platform covering RFQ automation, AI-powered vendor discovery & negotiation, predictive warehouse management, PoD-to-PO invoice matching, & payment reconciliation, leveraging specialized AI agents, RAG architectures, semantic search with Sentence Transformers embeddings, & self-serve prompt-based workflows for autonomous enterprise operations.",
        "Engineering Regex and AI-based Auditors for data quality enforcement, a semantic search engine using data embeddings for product discovery, and a RAG-based validator for automated procurement decision grounding.",
        "Building an AI Data Analyst for anomaly detection across daily operational reports, proactively surfacing outliers and enabling faster, data-driven interventions at scale."
    ],
    startDate: new Date(2026, 1), 
  },
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/Ind-Pro.jpg" alt="AI Research" fill className="object-cover" />
      </div>
    ),
    date: 'August 2025 - January 2026',
    location: 'Remote',
    title: 'AI Product Research - Independent Projects',
    description: 'Built AI-products using LLMs, RAG, Sentence Transformers, & semantic search architectures for enterprise workflows.',
    details: [
        "Designed fintech & SaaS product strategies focused on onboarding, analytics, monetization, & AI-driven automation."
    ],
    startDate: new Date(2025, 7, 15), 
  },
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/Jb.jpg" alt="JustBaat" fill className="object-cover" />
      </div>
    ),
    date: 'July 2024 - July 2025',
    location: 'Gurugram, Haryana, IND',
    title: 'Associate Product Manager - JustBaat AI (Powered By Google)',
    description: 'Company Details: AI Video Generation and Programmatic Ad Mediators.',
    details: [
      "Launched & scaled 6+ engagement products (Player, Shorts, Quiz, Poll, etc.), generating $300K in 6 months, filling 100% inventory for 400+ publishers, and increasing direct revenue by 16%.",
      "Built a D2C review marketplace, later pivoting it into a WhatsApp Community Monetization Platform, solving a three-way problem—demand partners needed genuine traffic, admins sought better monetization, and it boosted engagement & platform metrics.",
      "Led the development of 5+ platforms, including a Self-Serve Platform for AdTech Vertical, an AI Content Generator, and increased B2B2C user acquisition by 11% in 3 months.",
    ],
    startDate: new Date(2024, 6), 
  },
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/kb.jpg" alt="KreditBee" fill className="object-cover" />
      </div>
    ),
    date: '', 
    location: 'Bengaluru, Karnataka, IND',
    title: 'Associate Product Manager - KreditBee',
    description: 'Company Details: an Instant Personal Loan & Online Credit Provider.',
    details: [
        "Improved Personal Loan onboarding and funnel conversion across salaried and self-employed segments by leading a website revamp, fixing key journey issues, and supporting product strategy for the UPI vertical."
    ],
    startDate: new Date(2024, 5, 30), 
  },
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/BSG.jpg" alt="B.S. Geartech" fill className="object-cover" />
      </div>
    ),
    date: 'May 2023 - July 2023',
    location: 'Delhi, IND',
    title: 'Product Management Intern - B.S. Geartech Pvt. Ltd.',
    description: 'Company Details: Manufacture High Precision Gears and Gear Boxes.',
    details: [
      "Optimized Buy vs. Build for 60+ imported parts across 10+ products, impacting 1.3Cr revenue.",
      "Revamped website landing page with the UI, UX & Growth teams.",
    ],
     startDate: new Date(2023, 4), 
  },
   {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/unschool.jpg" alt="UnSchool" fill className="object-cover" />
      </div>
    ),
    date: 'May 2021 - July 2021',
    location: 'Remote',
    title: 'Marketing & Operations Intern - UnSchool',
    description: 'Company Details: #3 Ranked Startup of 2020 LinkedIn.',
    details: [
        "Executed market expansion and penetration strategies, reaching approx 3K people.",
        "Aligned efforts with goals for audience growth and product visibility.",
    ],
     startDate: new Date(2021, 3), 
  },
  {
    type: 'education',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/iitlogo.jpg" alt="IIT Ropar" fill className="object-cover" />
      </div>
    ),
    date: '2020 - 2024',
    title: 'Indian Institute of Technology, Ropar',
    description: 'Rupnagar, Punjab.',
    details: [
        'Bachelor of Technology (B.Tech) in Mechanical Engineering',
        'CGPA: 7.39'
    ],
    startDate: new Date(2020, 7),
  },
];

journeyData.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

const JourneySection = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsButtonVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (buttonContainerRef.current) {
      observer.observe(buttonContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">My Journey</h2>
      <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="relative">
        <div className="timeline-shimmer"></div>

        {journeyData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-connector"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                         <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent overflow-hidden border border-border/50">
                           {item.icon}
                         </span>
                        <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-10">
                          <MapPin className="h-3 w-3" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                    {item.date && (
                      <span className="text-sm text-muted-foreground sm:ml-auto sm:pl-4">{item.date}</span>
                    )}
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                {item.details && item.details.length > 0 && (
                  <CardContent>
                    <ReadMoreList items={item.details} initialCount={2}/>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center" ref={buttonContainerRef}>
        <div className={cn(
          "shimmer-button-wrapper group",
          isButtonVisible && "is-shimmering"
        )}>
           <Button asChild size="lg" className="relative z-10 bg-background hover:bg-background/95 text-foreground border-none rounded-[calc(var(--radius)-1px)] transition-all">
            <Link href="/interview-experience">
              Read My Interview Experiences <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;