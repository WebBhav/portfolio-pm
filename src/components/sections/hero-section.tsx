
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, FileText } from 'lucide-react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section id="hero" className="relative container mx-auto flex flex-col items-center justify-center text-center min-h-[calc(70vh-5rem)] py-8 md:py-16 overflow-hidden">

      {/* Profile Picture */}
       <div className="mb-6 mt-8 md:mt-0">
         <Image
           src="/vaibhav-singhal.jpg"
           alt="Vaibhav Singhal"
           width={150}
           height={150}
           className="rounded-full border-4 border-accent shadow-lg"
           priority={true}
         />
       </div>


      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Vaibhav Singhal
        </h1>
        {/* Updated Subheading */}
        <div className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-3xl mb-8">
          <p>AI Product Manager | IIT Ropar Alumnus</p>
          <p>Driving AI, Design and Monetisation in Product</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects-ai">
              View Projects <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
