'use client';

import { Briefcase, GraduationCap, FileText, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ReadMoreList from '@/components/ui/read-more-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

type JourneyItem = {
  type: 'experience' | 'education';
  icon: JSX.Element;
  date: string;
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
    date: '2026',
    title: 'Associate Product Manager - Moglix',
    description: 'Company Details: A B2B e-commerce company, specializing in industrial supplies and services.',
    details: [
        "Leading 0→1 build and GTM of an AI-native SaaS vertical at Moglix, transforming B2B procurement & ecommerce through intelligent automation, predictive analytics, and scalable product strategy across enterprise supply chains."
    ],
    startDate: new Date(2026, 0), 
  },
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/kb.jpg" alt="KreditBee" fill className="object-cover" />
      </div>
    ),
    date: '2025',
    title: 'Associate Product Manager - KreditBee',
    description: 'Company Details: an Instant Personal Loan & Online Credit Provider.',
    details: [
        "Improved Personal Loan onboarding and funnel conversion across salaried and self-employed segments by leading a website revamp, fixing key journey issues, and supporting product strategy for the UPI vertical."
    ],
    startDate: new Date(2025, 7), 
  },
  {
    type: 'experience',
    icon: (
      <div className="relative h-full w-full">
        <Image src="/Jb.jpg" alt="JustBaat" fill className="object-cover" />
      </div>
    ),
    date: '2024',
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
        <Image src="/BSG.jpg" alt="B.S. Geartech" fill className="object-cover" />
      </div>
    ),
    date: '2023',
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
    date: '2021',
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
    date: '2024',
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
  return (
    <section id="journey" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">My Journey</h2>
      <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="relative">
        <div className="timeline-comet"></div>

        {journeyData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-connector"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2">
                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent overflow-hidden border border-border/50">
                         {item.icon}
                       </span>
                      <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                    </div>
                    <span className="text-sm text-muted-foreground sm:ml-auto sm:pl-4">{item.date}</span>
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
      <div className="mt-12 text-center">
        <div className="shimmer-button-wrapper">
           <Button asChild size="lg" className="relative z-10 bg-background hover:bg-background/90 text-foreground border-none">
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