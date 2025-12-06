
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = (
    <>
      <p>
        Hi, I’m Vaibhav — a product thinker who blends data, design, and strategy to build meaningful digital experiences.
      </p>
      <p>
        I deep-dive into markets fast, turn insights into decisions, and ship 0–1 products with clarity. With years of hands-on design experience, I still sketch, wireframe, and build UI myself.
      </p>
      <p>
        I’ve led teams, built IIT Ropar’s first eSports community, revived campus culture post-COVID, and helped secure ₹3M+ in sponsorships. I enjoy creating systems that scale — whether products, communities, or ideas.
      </p>
      <p>
        Mechanical Engineering @ IIT Ropar. Born in Alwar. Driven by curiosity, craft, and impact.
      </p>
    </>
  );

  const truncatedText = (
    <p>
      Hi, I’m Vaibhav — a product thinker who blends data, design, and strategy to build meaningful digital experiences. I deep-dive into markets fast, turn insights into decisions, and ship 0–1 products with clarity...
    </p>
  );

  return (
    <section id="about" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">About Me</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
           <Image
              src="https://picsum.photos/seed/handshake/300/400"
              alt="Handshake"
              width={300}
              height={400}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="business agreement"
            />
        </div>
        <div className="md:col-span-2 text-lg text-muted-foreground space-y-4">
          {!isMobile ? (
            fullText
          ) : (
            <div>
              {isExpanded ? fullText : truncatedText}
              <Button
                variant="link"
                onClick={toggleReadMore}
                className="px-0 h-auto py-1 text-accent mt-2"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
