
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto py-8 flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
          <Link href="/terms-of-use" className="hover:text-foreground transition-colors">
            Terms of Use
          </Link>
          <span className="hidden sm:inline opacity-40">|</span>
          <p className="text-center">
            &copy; {currentYear} Vaibhav Singhal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
