'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from './badge';

interface ShowMoreSkillsProps {
  skills: string[];
  initialCount?: number;
}

const ShowMoreSkills = ({ skills, initialCount = 8 }: ShowMoreSkillsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const shouldTruncate = isMobile && skills.length > initialCount;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const skillsToShow = shouldTruncate && !isExpanded ? skills.slice(0, initialCount) : skills;

  return (
    <div className="flex flex-wrap gap-2">
      {skillsToShow.map((skill, index) => (
        <Badge key={index} variant="secondary" className="text-sm">
          {skill}
        </Badge>
      ))}
      {shouldTruncate && (
        <Button
          variant="link"
          onClick={toggleExpansion}
          className="px-1 h-auto py-1 text-accent text-sm"
        >
          {isExpanded ? 'Show less' : `+${skills.length - initialCount} more`}
        </Button>
      )}
    </div>
  );
};

export default ShowMoreSkills;
