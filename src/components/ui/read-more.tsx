'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
  initialExpanded?: boolean;
}

const ReadMore = ({ text, maxLength = 150, initialExpanded = false }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <Button
        variant="link"
        onClick={toggleReadMore}
        className="px-0 h-auto py-1 text-accent"
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </Button>
    </div>
  );
};

export default ReadMore;
