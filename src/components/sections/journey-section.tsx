
'use client';

import { Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

// Combined and typed data for the journey timeline
type JourneyItem = {
  type: 'experience' | 'education';
  icon: JSX.Element;
  date: string;
  title: string;
  description: string;
  details?: string[];
  startDate: Date; // Added for sorting
};

const journeyData: JourneyItem[] = [
  // Experience Items
  {
    type: 'experience',
    icon: <Briefcase className="h-4 w-4 text-accent-foreground" />,
    date: 'July 2024 - Present',
    title: 'Associate Product Manager - JustBaat AI',
    description: 'AI Video Generation and Programmatic Ad Mediators.',
    details: [ // Updated details without leading "— "
      "Launched & scaled 6+ engagement products (Player, Shorts, Quiz, Poll, etc.), generating $300K in 6 months, filling 100% inventory for 400+ publishers, and increasing direct revenue by 16%.",
      "Built a D2C review marketplace, later pivoting it into a WhatsApp Community Monetization Platform, solving a three-way problem—demand partners needed genuine traffic, admins sought better monetization, and it boosted engagement & platform metrics.",
      "Led the development of 5+ platforms, including a Self-Serve Platform for AdTech Vertical, an AI Content Generator, and increased B2B2C user acquisition by 11% in 3 months.",
    ],
    startDate: new Date(2024, 6), // July 2024
  },
  {
    type: 'experience',
    icon: <Briefcase className="h-4 w-4 text-accent-foreground" />,
    date: 'May 2023 - July 2023',
    title: 'Product Management Intern - B.S. Geartech Pvt. Ltd.',
    description: 'Optimized procurement and contributed to website revamp.',
    details: [
      "Optimized Buy vs. Build for 60+ imported parts across 10+ products, impacting 1.3Cr revenue.",
      "Revamped website landing page with the UI, UX & Growth teams.",
    ],
     startDate: new Date(2023, 4), // May 2023
  },
   {
    type: 'experience',
    icon: <Briefcase className="h-4 w-4 text-accent-foreground" />,
    date: 'Apr 2021 - June 2021',
    title: 'Marketing & Operations Intern - UnSchool',
    description: 'Executed market expansion strategies for LinkedIn #3 Ranked Startup of 2020.',
    details: [
        "Executed market expansion and penetration strategies, reaching approx 3K people.",
        "Aligned efforts with goals for audience growth and product visibility.",
    ],
     startDate: new Date(2021, 3), // April 2021
  },
  // Education Item (IIT Ropar only)
  {
    type: 'education',
    icon: <GraduationCap className="h-4 w-4 text-accent-foreground" />,
    date: '2020 - 2024',
    title: 'Indian Institute of Technology, Ropar',
    description: 'Bachelor of Technology (B.Tech) in Mechanical Engineering.',
    details: ['CGPA: 7.39'],
    startDate: new Date(2020, 7), // Assuming start in Aug 2020 for sorting, exact month isn't critical for relative order here.
  },
];

// Sort journey items chronologically, most recent first
journeyData.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());


const JourneySection = () => {
  return (
    <section id="journey" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">My Journey</h2>
      <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="relative">
        {/* The main timeline line is implicitly created by the connectors */}
        {journeyData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-connector"></div>
            <div className="timeline-dot">
              {/* Icon can be placed inside or next to the dot if needed */}
            </div>
            <div className="timeline-content">
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2">
                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
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
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;



