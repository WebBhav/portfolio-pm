import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto py-12 md:py-24 text-center scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Get In Touch</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
        I'm always open to discussing new projects, product challenges, or opportunities to collaborate. Feel free to reach out!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="mailto:vaibhavsinghal2808@gmail.com"> {/* Updated Email */}
            <Mail className="mr-2 h-5 w-5" /> Email Me
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://linkedin.com/in/vaibhav-singhal-iit-ropar/" target="_blank" rel="noopener noreferrer"> {/* Updated LinkedIn */}
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          {/* Assuming GitHub link remains the same, update if different */}
          <Link href="https://github.com/vaibhavsinghal18" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          {/* Assuming Twitter/X link remains the same, update if different */}
          <Link href="https://x.com/VaibhvSinghal" target="_blank" rel="noopener noreferrer">
            <Twitter className="mr-2 h-5 w-5" /> Twitter/X
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
