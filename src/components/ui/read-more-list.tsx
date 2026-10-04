'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface ReadMoreListProps {
  items: string[];
  initialCount?: number;
}

const ReadMoreList = ({ items, initialCount = 1 }: ReadMoreListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const shouldTruncate = isMobile && items.length > initialCount;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const itemsToShow = shouldTruncate && !isExpanded ? items.slice(0, initialCount) : items;

  return (
    <div>
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
        {itemsToShow.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {shouldTruncate && (
        <Button
          variant="link"
          onClick={toggleExpansion}
          className="px-0 h-auto py-1 text-accent text-sm"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>
  );
};

export default ReadMoreList;
