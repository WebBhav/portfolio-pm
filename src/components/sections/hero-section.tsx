
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Download } from 'lucide-react'; // Added Download icon
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section id="hero" className="relative container mx-auto flex flex-col items-center justify-center text-center min-h-[calc(70vh-5rem)] py-8 md:py-16 overflow-hidden">

      {/* Profile Picture */}
       <div className="mb-6 mt-8 md:mt-0">
         <Image
           src="/vaibhav-singhal.jpg" // Updated src: Assumes image is in public/vaibhav-singhal.jpg
           alt="Vaibhav Singhal"
           width={150}
           height={150}
           className="rounded-full border-4 border-accent shadow-lg"
           // data-ai-hint removed as it's no longer a placeholder
           priority={true}
         />
       </div>


      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Vaibhav Singhal
        </h1>
        {/* Updated Subheading */}
        <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-3xl mb-8">
          Product Manager | IIT Ropar Alumnus | Driving AI, Design and Monetisation in Product
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            {/* Updated href to point to the journey section */}
            <Link href="#journey">
              View Journey <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           {/* Keep Resume Download Button commented out as per previous state */}
           {/* <Button asChild variant="secondary" size="lg">
             <Link href="/resume/vaibhav_singhal_resume.pdf" download="Vaibhav_Singhal_Resume.pdf">
               Download Resume <Download className="ml-2 h-5 w-5" />
             </Link>
           </Button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
