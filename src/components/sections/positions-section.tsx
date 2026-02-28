import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Megaphone, Award } from 'lucide-react'; // Using relevant icons

const positionsData = [
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: 'Founder-Mentor-Secretary, ESportZ Club, IIT Ropar',
    duration: 'Nov 2022 - Present',
    description: 'Organised India’s First Gaming Festival (REVANCHE), 10+ Flagship Sponsored events. #1 Club in 8 months with 2.8Mn+ sponsorship raised.',
  },
  {
    icon: <Megaphone className="h-6 w-6 text-accent" />,
    title: 'Head, MOT, Career Development & Placement Cell, IIT Ropar',
    duration: 'May 2021 - Present',
    description: 'Led a team of 40+. Core committee member. Organised Corporate Connect 2.0, increased outreach by 800%.',
  },
   {
    icon: <Award className="h-6 w-6 text-accent" />, // Using Award as a proxy for leadership/core role
    title: 'Sponsorship Head | Core Team Member, Annual Techno-Cult Fest, IIT Ropar',
    duration: 'Oct 2022 - May 2023',
    description: 'Spearheaded Annual Festival (footfall: 15k+). Raised 8Mn+ sponsorship. Managed a team of 200+ students.',
  },
   {
    // Using a generic icon or omitting for brevity
    title: 'Other Roles',
    duration: 'Dec 2021 - Dec 2022',
    description: 'Deputy Secretary, ODAC | Representative, CDPC | Coordinator, Society of Mech Engg.',
  },
];

const PositionsSection = () => {
  return (
    <section id="positions" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Leadership Roles</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {positionsData.map((position, index) => (
          <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
               <div className="flex items-start gap-4">
                 {position.icon && <span className="mt-1">{position.icon}</span>}
                 <div>
                   <CardTitle className="text-lg mb-1">{position.title}</CardTitle>
                   <p className="text-xs text-muted-foreground">{position.duration}</p>
                 </div>
               </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{position.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PositionsSection;
