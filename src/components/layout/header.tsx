
'use client';

import type { ComponentProps } from 'react';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Mail, Menu } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollAreaViewport } from '@/components/ui/scroll-area';
import { useLoading } from '@/contexts/loading-context';
import { usePathname } from 'next/navigation'; // Import usePathname


const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' }, // Changed from Experience & Education
  { href: '#positions', label: 'Positions' },
  { href: '#key-projects', label: 'Key Projects' },
  { href: '#projects-ai', label: 'AI Projects' },
  { href: '#awards', label: 'Awards' },
];

const NavLink = ({
  href,
  children,
  className,
  onClick,
  isActive, // Add isActive prop
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean; // Define isActive prop type
}) => {
  const linkOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update hash without redundant navigation
        if (typeof window !== 'undefined' && window.location.hash !== href) {
            history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={linkOnClick}
      className={cn(
        'transition-colors px-3 py-2 rounded-md text-sm font-medium',
        'text-muted-foreground hover:text-foreground hover:bg-accent/10', // Default style
        isActive ? 'text-foreground bg-accent/10 font-semibold' : '', // Active style
        className
      )}
      aria-current={isActive ? 'page' : undefined} // Add aria-current for accessibility
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
  isActive, // Add isActive prop
}: ComponentProps<typeof Link> & { onClick?: (href: string) => void, isActive?: boolean }) => { // Define isActive prop type
  const mobileLinkOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick && href) {
        onClick(href as string);
    }
    if ((href as string).startsWith('#')) {
        e.preventDefault();
    }
  };
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={mobileLinkOnClick}
        className={cn(
          'block py-2 text-base font-medium transition-colors rounded-sm px-3',
          'text-foreground/80 hover:text-foreground hover:bg-accent/10', // Default style
          isActive ? 'text-foreground bg-accent/10 font-semibold' : '', // Active style
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
        )}
        aria-current={isActive ? 'page' : undefined} // Add aria-current for accessibility
      >
        {children}
      </Link>
    </SheetClose>
  );
};

const Header = () => {
  const { setIsLoading } = useLoading();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname(); // Get current pathname

  // Function to scroll to section and update state/history
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (typeof window !== 'undefined' && window.location.hash !== `#${id}`) {
           history.pushState(null, '', `#${id}`);
        }
        // Manually set active section immediately for better UX,
        // IntersectionObserver will refine it on scroll end.
        setActiveSection(id);
    }
  }, []);

  const handleNavigationClick = useCallback((href: string) => {
    setIsLoading(true);
    if (href.startsWith('#')) {
        const elementId = href.substring(1);
        scrollToSection(elementId);
        setTimeout(() => setIsLoading(false), 500); // Hide loader after scroll attempt
    } else {
         if (typeof window !== 'undefined') {
             window.location.href = href; // Use standard navigation for non-hash links
             // Loader will be handled by page load/GlobalLoaderWrapper for full page navigations
         }
    }
  }, [setIsLoading, scrollToSection]);


  const handleSheetLinkClick = useCallback((href: string) => {
    setIsSheetOpen(false); // Close sheet on click
    handleNavigationClick(href); // Reuse the same logic
  }, [handleNavigationClick]);

  // Effect for Intersection Observer
  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this runs only on the client

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '-50% 0px -50% 0px', // Trigger when the section is in the middle 50% of the viewport
        threshold: 0, // Trigger as soon as any part enters/leaves the margin
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that have IDs corresponding to nav links
    navLinks.forEach((link) => {
        if (link.href.startsWith('#')) {
            const element = document.getElementById(link.href.substring(1));
            if (element) {
                observer.observe(element);
            }
        }
    });

     // Initial check for hash on load
     const currentHash = window.location.hash;
     if (currentHash) {
         const initialSectionId = currentHash.substring(1);
         const correspondingLink = navLinks.find(link => link.href === currentHash);
         if (correspondingLink) {
             setActiveSection(initialSectionId);
             // Optional: Smooth scroll to the section if it's not fully visible
             // document.getElementById(initialSectionId)?.scrollIntoView({ behavior: 'smooth' });
         }
     } else if (pathname === '/') {
         // If no hash and on homepage, maybe default to no active section or '#hero' if needed
         // setActiveSection(null); // Or 'hero' if HeroSection has id="hero"
     }


    // Cleanup function
    return () => {
        navLinks.forEach((link) => {
            if (link.href.startsWith('#')) {
                const element = document.getElementById(link.href.substring(1));
                if (element) {
                    observer.unobserve(element);
                }
            }
        });
    };
  }, [pathname]); // Re-run observer setup if pathname changes (though less relevant for hash links)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="multicolor-line"></div>
      <div className="container flex h-16 items-center justify-between"> {/* Use justify-between */}
        {/* Left: Logo & Brand */}
        <div className="flex items-center pl-4"> {/* Add padding for spacing */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => handleNavigationClick('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-accent">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            </svg>
            <span className="font-bold text-lg">Vaibhav Singhal</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
         <div className="hidden md:flex flex-grow justify-center">
          <nav className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => handleNavigationClick(link.href)}
                isActive={activeSection === link.href.substring(1)} // Pass isActive state
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
         </div>


        {/* Right: Buttons */}
        <div className="flex items-center gap-2 pr-4"> {/* Add padding for spacing */}
           <div className="hidden md:flex">
             <Button asChild variant="default" size="sm" className="shadow-md" onClick={() => handleNavigationClick('#contact')}>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Link>
            </Button>
           </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-0 flex flex-col">
               <SheetHeader className="p-6 pb-4 border-b">
                 <div className="flex items-center space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 text-accent">
                     <rect width="256" height="256" fill="none"></rect>
                     <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                     <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                   </svg>
                   <span className="font-semibold text-lg">Menu</span>
                 </div>
                 <VisuallyHidden>
                   <SheetTitle>Main Menu</SheetTitle>
                   <SheetDescription>Links to different sections of the portfolio.</SheetDescription>
                 </VisuallyHidden>
              </SheetHeader>
              <ScrollArea className="flex-grow">
                <ScrollAreaViewport className="h-full p-6">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <MobileNavLink
                        key={link.href}
                        href={link.href}
                        onClick={handleSheetLinkClick}
                        isActive={activeSection === link.href.substring(1)} // Pass isActive state
                      >
                        {link.label}
                      </MobileNavLink>
                    ))}
                  </nav>
                </ScrollAreaViewport>
              </ScrollArea>
              <div className="p-6 mt-auto border-t">
                <SheetClose asChild>
                  <Button asChild variant="default" className="w-full" onClick={() => handleSheetLinkClick('#contact')}>
                    <Link href="#contact">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </Link>
                  </Button>
                </SheetClose>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

