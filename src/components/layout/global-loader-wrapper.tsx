
'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/contexts/loading-context';
import GlobalLoader from '@/components/ui/loader';

// This internal component contains the logic that uses client-side hooks
const GlobalLoaderLogic = () => {
  const { isLoading, setIsLoading } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Hide loader on route change completion
    if (isLoading) {
      // setIsLoading is stable, no need to add it if it causes re-renders of this effect
      // Consider a small delay if needed for state propagation, but often not necessary.
      // const timer = setTimeout(() => setIsLoading(false), 50); 
      // return () => clearTimeout(timer);
      setIsLoading(false); 
    }
    // isLoading and setIsLoading are included as per exhaustive-deps,
    // though setIsLoading is usually stable.
  }, [pathname, searchParams, isLoading, setIsLoading]); 

  if (!isLoading) return null;

  return <GlobalLoader />;
};


const GlobalLoaderWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, setting isClient to true
    setIsClient(true);
  }, []);

  if (!isClient) {
    // During SSR or prerender (like for /_not-found), render nothing
    // This prevents GlobalLoaderLogic and its client-side hooks from running
    return null;
  }

  // Render the actual logic only on the client-side
  return <GlobalLoaderLogic />;
};

export default GlobalLoaderWrapper;
