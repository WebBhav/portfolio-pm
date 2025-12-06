import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Import Script component
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LoadingProvider } from '@/contexts/loading-context';
import GlobalLoaderWrapper from '@/components/layout/global-loader-wrapper';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Vaibhav Singhal Portfolio',
  description: 'Portfolio of Vaibhav Singhal, Product Manager, IIT Ropar Alumnus, specializing in AI, Design, and Monetization.',
  verification: {
    google: 'GHAwX5L_HelEtZxAP0y8lOnNTjNxqqtrRJctgl0lJ10',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', inter.variable)}>
      <body
        className={`antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        {/* Google Analytics Scripts */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0W9BGR6RZ"
          strategy="afterInteractive" // Load after page is interactive
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G0W9BGR6RZ');
          `}
        </Script>
         {/* End Google Analytics Scripts */}

        <LoadingProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
          <GlobalLoaderWrapper />
          <ScrollToTopButton />
        </LoadingProvider>
      </body>
    </html>
  );
}
