import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LoadingProvider } from '@/contexts/loading-context';
import GlobalLoaderWrapper from '@/components/layout/global-loader-wrapper';
import { cn } from '@/lib/utils';
// Favicon is now handled by Next.js convention via src/app/icon.svg

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Vaibhav Singhal Portfolio',
  description: 'Portfolio of Vaibhav Singhal, Associate Product Manager, IIT Ropar Alumnus, specializing in AI solutions.',
  // icons field removed to let Next.js automatically pick up src/app/icon.svg
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', inter.variable)}>
      {/* <head /> is automatically managed by Next.js for metadata */}
      <body
        className={`antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <LoadingProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
          <GlobalLoaderWrapper />
        </LoadingProvider>
      </body>
    </html>
  );
}
