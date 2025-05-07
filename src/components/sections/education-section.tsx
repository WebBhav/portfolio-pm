'use client';

import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const educationData = [
  {
    icon: <GraduationCap className="h-6 w-6 text-accent" />,
    date: '2020 - 2024',
    title: 'Indian Institute of Technology, Ropar',
    description: 'Bachelor of Technology (B.Tech) in Mechanical Engineering.',
    details: ['CGPA: 7.39'],
  },
   {
    icon: <GraduationCap className="h-6 w-6 text-accent" />,
    date: '2020',
    title: 'Board of Secondary Education, Rajasthan',
    description: 'Senior Secondary (Class 12)',
    details: ['Percentage: 89%'],
  },
   {
    icon: <GraduationCap className="h-6 w-6 text-accent" />,
    date: '2018',
    title: 'Board of Secondary Education, Rajasthan',
    description: 'Secondary (Class 10)',
    details: ['Percentage: 89.86%'],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Education</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {educationData.map((item, index) => (
            <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                 <div className="flex items-start gap-4">
                   {item.icon && <span className="mt-1">{item.icon}</span>}
                   <div>
                     <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                     <p className="text-xs text-muted-foreground">{item.date}</p>
                   </div>
                 </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <CardDescription>{item.description}</CardDescription>
                 {item.details && item.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pt-2">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                )}
              </CardContent>
            </Card>
         ))}
       </div>
    </section>
  );
};

export default EducationSection;
