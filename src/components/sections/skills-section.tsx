
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Wrench, Users, Briefcase } from 'lucide-react';
import ShowMoreSkills from '@/components/ui/show-more-skills'; // Import the new component

const skillsData = {
  productManagement: [
    'Wireframing',
    'Strong Documentation',
    'Cross Functional Communication',
    'Stakeholder Management',
    'Project Management',
    'UX',
    'APIs',
    'AI Prototyping',
    'FinTech',
    'AdTech',
    'Data Analysis',
    'Prompt Engineering',
  ],
  tools: [
    'AI Tools',
    'n8n',
    'ProjectLibre',
    'Google Analytics',
    'Google Ad-Manager',
    'Mixpanel',
    'MS Excel',
    'Linear',
    'Jira',
    'SQL',
    'Firebase',
    'Photoshop (PS)',
    'FIGMA',
    'Python (Basic)',
  ],
  // Optional: Add Soft Skills / Leadership if desired
  // leadershipCommunication: [
  //   'Leadership',
  //   'Team Management',
  //   'Public Speaking',
  //   'Collaboration',
  // ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Skills</h2>
      <div className="multicolor-line mb-12 w-24 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Management Skills Card */}
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
             <Briefcase className="h-8 w-8 text-accent" />
            <CardTitle className="text-xl">Product Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ShowMoreSkills skills={skillsData.productManagement} />
          </CardContent>
        </Card>

        {/* Tools Card */}
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Wrench className="h-8 w-8 text-accent" />
            <CardTitle className="text-xl">Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <ShowMoreSkills skills={skillsData.tools} />
          </CardContent>
        </Card>

        {/* Optional: Leadership & Communication Card */}
        {/* {skillsData.leadershipCommunication && (
          <Card className="bg-card md:col-span-2"> // Example: Span full width on medium screens if only 3 cards
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Users className="h-8 w-8 text-accent" />
              <CardTitle className="text-xl">Leadership & Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillsData.leadershipCommunication.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )} */}
      </div>
    </section>
  );
};

export default SkillsSection;
