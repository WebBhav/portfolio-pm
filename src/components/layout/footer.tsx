
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto py-6"> {/* Ensured container is centered */}
        <p className="text-sm text-muted-foreground text-center"> {/* Text-center will now work relative to the centered container */}
          &copy; {currentYear} Vaibhav Singhal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
