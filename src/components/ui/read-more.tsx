'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

const ReadMore = ({ text, maxLength = 150 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
