'use client';

import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const experienceData = [
  {
    icon: <Briefcase className="h-4 w-4 text-accent-foreground" />,
    date: 'July 2024 - Present',
    title: 'Associate Product Manager - JustBaat AI',
    description: 'AI Video Generation and Programmatic Ad Mediators.',
    details: [
      "Launched & scaled 6+ engagement products (Player, Shorts, Quiz, Poll, etc.), generating $300K in 6 months.",
      "Filled 100% inventory for 400+ publishers, increasing direct revenue by 16%.",
      "Built a D2C review marketplace, pivoted to a WhatsApp Community Monetization Platform.",
      "Led end-to-end development of 5+ revenue-generating platforms, including an AI Content Generator.",
      "Drove an 11% increase in B2B2C user acquisition within 3 months.",
    ]
  },
  {
    icon: <Briefcase className="h-4 w-4 text-accent-foreground" />,
    date: 'May 2023 - July 2023',
    title: 'Product Management Intern - B.S. Geartech Pvt. Ltd.',
    description: 'Optimized procurement and contributed to website revamp.',
    details: [
      "Optimized Buy vs. Build for 60+ imported parts across 10+ products (impacting 1.3Cr revenue).",
      "Revamped website landing page with UI, UX & Growth teams.",
    ]
  },
  {
    icon: <Briefcase className="h-4 w-4 text-accent-foreground" />,
    date: 'Apr 2021 - June 2021',
    title: 'Marketing & Operations Intern - UnSchool',
    description: 'Executed market expansion strategies for LinkedIn #3 Ranked Startup of 2020.',
    details: [
        "Executed market expansion and penetration strategies, reaching approx 3K people.",
        "Aligned efforts with goals for audience growth and product visibility.",
    ]
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Experience</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="relative">
        {/* The main timeline line is implicitly created by the connectors */}
        {experienceData.map((item, index) => (
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

export default ExperienceSection;
