
import type { Metadata } from 'next';
import InterviewPost from '@/components/sections/interview-post';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interview Experiences | Vaibhav Singhal',
  description: 'A collection of my interview journeys with various companies for product management roles, including Google, Spinny, Credgenics, and Adda247.',
};

const interviewExperiences = [
  {
    company: 'Credgenics',
    role: 'Associate Product Manager',
    date: 'December 2025',
    outcome: 'Not Converted',
    introduction: 'I landed this interview opportunity through LinkedIn Jobs. The hiring process was structured as a multi-stage interview, with a strong emphasis on product sense, analytical thinking, and leadership skills.\n\nBelow is a round-by-round breakdown of my experience and key learnings from each stage.',
    rounds: [
      {
        title: 'Round 1: Screening and Case Study',
        content: "This round focused on understanding my background, motivation for the role, and overall product thinking. I walked through my resume and deep-dived into my most impactful project, primarily from the FinTech domain.\n\nThe discussion then moved to high-level product questions, including customer intent assessment in the context of loan defaults and collections, and how product decisions can be shaped using behavioral signals.\n\nThe round concluded with a logical puzzle i.e. Find the Forfeited Coins’ Jar, aimed at evaluating structured thinking and problem-solving approach.",
      },
      {
        title: 'Product Analytics',
        content: "The round began with a brief introduction and quickly moved into a rapid RCA exercise. I was presented with a scenario: a 45% drop in repayments triggered by reminder messages.\n\nThe analysis started at a high level and progressively went deeper into the end-to-end data journey. I mapped out potential data sources, delivery touchpoints, and failure points across the funnel. Through this, I identified a likely root cause: a formatting issue in how contact details were being fetched, which led to shortened or failed message delivery and ultimately impacted repayments.\n\nThe round concluded with a few HR and behavioural questions to assess culture fit and communication style.",
      },
    ],
  },
   {
    company: 'InCred Financial Services',
    role: 'Associate Product Manager',
    date: 'December 2025',
    outcome: 'Converted',
    introduction: 'I landed through Hirist platform. A three-round interview at InCred evaluating my experience, product thinking, technical fundamentals, stakeholder management, and cultural fit.',
    rounds: [
      {
        title: 'Round 1: Telephonic Screening',
        content: "This was an initial screening focused on my previous work experience, role transitions, and overall background. The discussion went into detail around my responsibilities, impact, and alignment with the role at InCred.",
      },
      {
        title: 'Round 2: Product Round',
        content: "This was the core evaluation round. It started with foundational questions such as why I want to move into the product domain and what the role of a Product Manager means to me.\nThe conversation then moved into technical fundamentals, including my understanding of APIs, CDNs, and how product managers collaborate with engineering and other stakeholders.\nThe round concluded with a product design problem — designing a Referral System within the InCred platform, focusing on user incentives, abuse prevention, and business impact.",
      },
      {
        title: 'Round 3: HR Round',
        content: "The HR round was thorough and scenario-driven, covering how I would respond to different workplace and ethical situations, my communication style, and cultural alignment. The discussion also included compensation expectations and role fit.",
      },
    ],
  },
  {
    company: 'Adda247',
    role: 'Associate Product Manager',
    date: 'June 2025',
    outcome: 'Not Converted',
    introduction: 'I got this interview through the LinkedIn posts. This was a multi-stage interview process focusing heavily on product sense, design capabilities, and leadership. Here is a round-by-round breakdown of my experience.',
    rounds: [
      {
        title: 'Round 1: Guesstimate and Product Design Round',
        content: 'Started with a thorough resume discussion and cross-questioning. This was followed by a simple RCA, where I need to build a whole platform that simplifies the teaching experiences for the teachers and students across the country. I started by mentioning different personas and using the CIRCLES, and I evaluated each solution in a possible, prioritised manner. Also, proposed a GTM with it. The round ended with a guesstimate that asked how many cars are in Delhi.',
      },
      {
        title: 'Round 2: Puzzle and User Journey Optimisation Round',
        content: 'I was then asked quickly about my prior achievements, followed by a brief clarification of my resume. Moving on to the question, I was first asked how I would optimise the journey for the Adda247 study app for students. I started with the STAR but quickly transitioned to Pain Point and Persona solving according to current needs.',
      },
    ],
  },
  {
    company: 'Spinny',
    role: 'Associate Product Manager',
    date: 'March 2025',
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

       <AnimatedSection>
         <div className="text-center mt-16">
           <p className="text-muted-foreground mb-8">More experiences coming soon...</p>
           <Button asChild size="lg" variant="outline">
               <Link href="/#journey">
                   <Briefcase className="mr-2 h-5 w-5" /> My Professional Journey
               </Link>
           </Button>
         </div>
       </AnimatedSection>
    </div>
  );
}
