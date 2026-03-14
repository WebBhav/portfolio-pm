
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto py-8 flex flex-col items-center gap-4">
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="/interview-experience" className="hover:text-foreground transition-colors">Interviews</Link>
          <Link href="/terms-of-use" className="hover:text-foreground transition-colors">Terms of Use</Link>
        </nav>
        <p className="text-xs text-muted-foreground text-center">
          &copy; {currentYear} Vaibhav Singhal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
