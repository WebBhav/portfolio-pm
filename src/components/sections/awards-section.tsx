import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award as AwardIcon, Star, Trophy, FileText as CaseStudyIcon, Percent, BarChart } from 'lucide-react'; // Using relevant icons

const awardsData = [
  { icon: <AwardIcon className="h-5 w-5 text-accent" />, description: 'Exceptional Youth Leader of Excellence, Award of honour by MENTORx.', year: 2024 }, // Keep year data
  { icon: <AwardIcon className="h-5 w-5 text-accent" />, description: 'Letter of Recommendation, Awarded by Founder-CEO, HoverRobotix, Dr Munish Jindal.', year: 2024 }, // Keep year data
  { icon: <Star className="h-5 w-5 text-accent" />, description: 'SQL & Problem Solving, 5 Star rating in Hackerrank.', year: 2023 }, // Keep year data
  { icon: <CaseStudyIcon className="h-5 w-5 text-accent" />, description: '2nd Position, secured in Trust Data Privacy Case Study, FinCOM.', year: 2022 }, // Keep year data
  { icon: <Trophy className="h-5 w-5 text-accent" />, description: 'Rank 9, State Talent Search Exam- Olympiad 2020.', year: 2020 }, // Keep year data
  { icon: <Percent className="h-5 w-5 text-accent" />, description: 'Top 0.5%, in India among 1.2 mn+ candidates in IIT JEE Advanced Exam 2020.', year: 2020 }, // Keep year data
  { icon: <BarChart className="h-5 w-5 text-accent" />, description: '99%tile, in the very first attempt of JEE Main 2020.', year: 2020 }, // Keep year data
];

// Sort awards by year, most recent first.
awardsData.sort((a, b) => {
  if (a.year === null && b.year === null) return 0;
  if (a.year === null) return 1;
  if (b.year === null) return -1;
  return b.year - a.year; // Sort descending by year
});


const AwardsSection = () => {
  return (
    <section id="awards" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Awards & Achievements</h2>
      <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <Card className="bg-card">
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {awardsData.map((award, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1">{award.icon}</span>
                <p className="text-muted-foreground">
                  {award.description}
                  {/* Re-added conditional year display */}
                  {award.year && <span className="text-xs ml-1">({award.year})</span>}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default AwardsSection;
