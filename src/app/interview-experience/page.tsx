'use client';

import InterviewPost from '@/components/sections/interview-post';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/ui/animated-section';

const interviewExperiences = [
  {
    company: 'Spinny',
    role: 'Associate Product Manager',
    date: 'March 2024',
    outcome: 'Not Converted',
    introduction: 'This was a multi-stage interview process focusing heavily on product sense, analytical skills, and leadership. Here is a round-by-round breakdown of my experience.',
    rounds: [
      {
        title: 'Round 1: Analytical Interview',
        content: "A case-based interview where I was given a problem like 'User onboarding has dropped by 10% at Uber. What would you do?' I broke down the problem, formulated hypotheses, identified key metrics to investigate, and proposed a structured plan to diagnose the issue.\n\nFirst I identified whether this could be cause due to governmental policy changes or competitors change which were not related because user searching for ride isn't dropped. Then after a thorough QnA, we found out that users are not able to board the uber because of conjusted area in the metropolitan geographies due to multi level story roads.",
      },
      {
        title: 'Round 2: Case Study Round',
        content: 'Round started with a small guestimate of "how many orders Swiggy platform completes in one average day in india". Then it took the pace. This round focused on my experience leading teams and projects. I was asked about a time I had to influence stakeholders without authority and how I would launch a new product. I used the STAR (Situation, Task, Action, Result) method to structure my answers.',
      },
    ],
  },
  {
    company: 'Google',
    role: 'Associate Product Manager',
    date: 'October 2023',
    outcome: 'Not Converted',
    introduction: 'This was a multi-stage interview process focusing heavily on product sense, analytical skills, and leadership. Here is a round-by-round breakdown of my experience.',
    rounds: [
      {
        title: 'Round 1: Recruiter Screen',
        content: 'A 30-minute call with a recruiter discussing my background, interest in the role, and high-level product questions. I was asked to walk through my resume and explain my most impactful project.',
      },
      {
        title: 'Round 2: Product Sense Interview',
        content: "This round was about creativity and product thinking. The prompt was: 'Design a new feature for Google Ads Ecosystem.' I focused on a feature to help users with personalised ads, detailing user personas, pain points, potential solutions, and success metrics. Finally, we concluded that the display of Ads should not interrupt, but rather be user-intentional.",
      },
      {
        title: 'Round 3: Analytical Interview',
        content: "A case-based interview where I was given a problem like 'Daily Active Users for YouTube have dropped by 10%. What would you do?' I broke down the problem, formulated hypotheses, identified key metrics to investigate, and proposed a structured plan to diagnose the issue.",
      },
      {
        title: 'Round 4: Leadership & Go-to-Market (GTM) Interview',
        content: 'This round focused on my experience leading teams and projects. I was asked about a time I had to influence stakeholders without authority and how I would launch a new product. I used the STAR (Situation, Task, Action, Result) method to structure my answers.',
      },
    ],
  },
  // You can add another experience here
  // {
  //   company: 'Another Company',
  //   role: 'Product Manager',
  //   date: 'September 2023',
  //   introduction: '...',
  //   rounds: [
  //     { title: 'Round 1', content: '...' },
  //   ],
  // }
];


export default function InterviewExperiencePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <AnimatedSection>
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Interview Experience</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                A collection of my interview journeys with various companies.
            </p>
             <div className="multicolor-line mt-6 mb-12 w-24 mx-auto"></div>
        </div>
      </AnimatedSection>
      
      <div className="space-y-12">
        {interviewExperiences.map((experience, index) => (
          <AnimatedSection key={index}>
            <InterviewPost {...experience} />
            {index < interviewExperiences.length - 1 && <Separator className="my-12" />}
          </AnimatedSection>
        ))}
      </div>

       <div className="text-center text-muted-foreground mt-16">
         <p>More experiences coming soon...</p>
       </div>
    </div>
  );
}
