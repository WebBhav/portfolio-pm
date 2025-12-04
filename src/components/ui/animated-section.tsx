'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in';
  delay?: string;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 'delay-0',
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
  }[animation];

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-opacity duration-1000 ease-out',
        delay,
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible && animationClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
