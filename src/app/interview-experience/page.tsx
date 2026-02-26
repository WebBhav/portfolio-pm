
import type { Metadata } from 'next';
import InterviewPost from '@/components/sections/interview-post';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interview Experiences | Vaibhav Singhal',
  description: 'A collection of my interview journeys with various companies for product management roles, including Appreciate Wealth, Google, Spinny, Credgenics, and Adda247.',
};

const interviewExperiences = [
  {
    company: 'Appreciate Wealth',
    role: 'Associate Product Manager',
    date: 'January 2026',
    outcome: 'Converted',
    introduction: 'Secured via direct alumni referral and completed back-to-back interview rounds in a single day, navigating an unstructured hiring process with strong product clarity and execution depth.',
    rounds: [
      {
        title: 'Round 1: Screening & RCA',
        content: "Deep-dived into leadership PoRs and founder mindset behind initiating clubs and zero-to-one efforts, followed by an RCA on “Why 80% of users complete onboarding but never make their first transaction?” — structured the problem from metric definition, cohort breakdown, and full user journey mapping to behavioral, trust, and activation bottlenecks, driving toward data-backed hypotheses and activation levers.",
      },
      {
        title: 'Round 2: Product & Onboarding Improvement',
        content: "Led a 1.5-hour solutioning discussion on improving onboarding conversion by auditing existing KYC/banking flows, identifying friction points, and proposing intelligent automation (e.g., PAN-based Aadhaar auto-fetch with one-click consent), reducing cognitive load and time-to-completion while aligning with compliance constraints.",
      },
      {
        title: 'Round 3: HR & Negotiation',
        content: "Cleared cultural fit and stakeholder alignment discussion after a delayed cycle (1+ month), concluding with structured negotiation and final conversion.",
      },
    ],
  },
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
        title: 'Round 2: Product Analytics',
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
    company: 'Refyne',
    role: 'Associate Product Manager',
    date: 'October 2025',
    outcome: 'Not Converted',
    introduction: 'I received this interview opportunity through a Direct Apply. A 4-round process at Refyne evaluating my experience, product thinking, technical fundamentals, stakeholder management, and cultural fit.',
    rounds: [
      {
        title: 'Round 1: Assignment Round',
        content: 'This round involved a product design challenge to conceptualise and launch a Buy Now, Pay Later (BNPL) platform for employees of partnered enterprises. The problem required designing a controlled e-commerce + credit ecosystem, where employees could purchase curated products or services and repay via no-cost EMIs, while balancing risk, usability, and enterprise constraints.',
      },
      {
        title: 'Round 2: Assignment Discussion',
        content: 'The discussion was centred around a detailed walkthrough of the assignment. I approached the problem using the CIRCLES framework, clearly defining the MVP scope, GTM strategy, and a scaling roadmap, while addressing key considerations such as eligibility, credit limits, merchant onboarding, and repayment flows.',
      },
      {
        title: 'Round 3: Technical Round',
        content: 'This was a SQL-heavy round, with most questions aligned to HackerRank Medium-level problems, testing data querying, joins, and aggregations. The round also covered lending fundamentals, including EMI calculations and the reducing balance interest model, to assess domain understanding.',
      },
      {
        title: 'Round 4: Founders’ Office Screening',
        content: 'The final round focused on my professional background, long-term career vision, and product mindset. Discussions included comparisons across lending models, in-depth analyses of user onboarding journeys, and an examination of how product decisions vary across segments within the lending ecosystem.',
      },
    ],
  },
  {
    company: 'NxtWave',
    role: 'Growth Product Manager',
    date: 'July 2025',
    outcome: 'Converted',
    introduction: 'I received this interview opportunity through the Naukri platform. Below is a round-by-round breakdown of my experience and key learnings from each stage.',
    rounds: [
      {
        title: 'Round 1: Assignment Round',
        content: 'This round involved a strategic assignment focused on planning and execution for Student Onboarding, Engagement, Retention, and Skill Outcomes over a 6-month horizon. The objective was to design scalable growth levers while balancing learner outcomes and business impact.',
      },
      {
        title: 'Round 2: Assignment Discussion',
        content: 'This was a thorough examination of the submitted assignment. I proposed multiple growth pathways, including collaborations with Career Development & Placement Cells and college-level programs offered free of cost to drive high-intent onboarding (achieving ~90–95% conversion). From there, the discussion centered on funnel design, where meaningful engagement begins only after students complete a defined set of activation tasks.',
      },
      {
        title: 'Round 3: Product Case Round',
        content: 'The round began with a walkthrough of my previous experience and gradually increased in complexity. It included guesstimates and RCA exercises, such as estimating the number of cars on Delhi roads on an average day, to evaluate structured thinking and assumptions. The conversation eventually moved to execution readiness and joining timelines.',
      },
      {
        title: 'Round 4: HR Round',
        content: 'The final round focused on situational and behavioural questions, followed by discussions around compensation expectations, role alignment, and joining logistics.',
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
];


export default function InterviewExperiencePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <AnimatedSection>
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Interview Experience</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                A collection of some of my interview journeys across different companies.
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
