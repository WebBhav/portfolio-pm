'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface InterviewPostProps {
  company: string;
  role: string;
  date: string;
  introduction: string;
  rounds: {
    title: string;
    content: string;
  }[];
  outcome?: string;
}

const InterviewPost = ({
  company,
  role,
  date,
  introduction,
  rounds,
  outcome,
}: InterviewPostProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
                <CardTitle className="text-2xl">{company}</CardTitle>
                <p className="text-lg text-accent">{role}</p>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{date}</span>
            </div>
        </div>
        {outcome && (
          <div className="pt-2">
            <Badge variant={outcome === 'Converted' ? 'success' : 'destructive'}>
              {outcome}
            </Badge>
          </div>
        )}
        <CardDescription className="pt-4 text-base">{introduction}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {rounds.map((round, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {round.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base whitespace-pre-line">
                {round.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default InterviewPost;
