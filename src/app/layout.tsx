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
  metadataBase: new URL('https://vaibhavsinghal.dev'), // Replace with your domain
  title: {
    default: 'Vaibhav Singhal | AI Product Manager',
    template: '%s | Vaibhav Singhal',
  },
  description: 'Portfolio of Vaibhav Singhal, an AI Product Manager and IIT Ropar Alumnus, specializing in AI, Product Design, and Monetization strategy.',
  openGraph: {
    title: 'Vaibhav Singhal | AI Product Manager',
    description: 'Explore the portfolio of Vaibhav Singhal, showcasing projects in AI, product management, and design.',
    url: 'https://vaibhavsinghal.dev', // Replace with your domain
    siteName: 'Vaibhav Singhal Portfolio',
    images: [
      {
        url: '/vaibhav-singhal.jpg', // Path to your OG image
        width: 150,
        height: 150,
        alt: 'Vaibhav Singhal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Singhal | AI Product Manager',
    description: 'Portfolio of Vaibhav Singhal, an AI Product Manager and IIT Ropar Alumnus.',
    // creator: '@yourtwitterhandle', // Optional: add your twitter handle
     images: ['/vaibhav-singhal.jpg'], // Must be an absolute URL in the future
  },
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
