
'use client';

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Instagram, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto pt-12 pb-4 md:pt-24 md:pb-8 text-center scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Get In Touch</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 px-4 sm:px-12">
        I'm always open to discussing new projects, product challenges, or opportunities to collaborate. Feel free to reach out!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="mailto:vaibhavsinghal2808@gmail.com">
            <Mail className="mr-2 h-5 w-5" /> Email Me
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://www.linkedin.com/in/vaibhav-singhal-iit-ropar" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          <Link href="https://github.com/WebBhav" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          <Link href="https://www.instagram.com/thewebbhav" target="_blank" rel="noopener noreferrer">
            <Instagram className="mr-2 h-5 w-5" /> Instagram
          </Link>
        </Button>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50">
        <p className="text-muted-foreground mb-4 font-medium">Having any query? Ask here</p>
        <Button asChild size="lg" variant="accent">
          <Link href="/query">
            Submit a query <MessageSquare className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
