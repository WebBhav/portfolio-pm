
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
    // Hide loader on route change completion.
    // The initial render is handled by the wrapper's isClient state.
    if (isLoading) {
      setIsLoading(false); 
    }
    // We only want this effect to run when the path changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]); 

  // This component now only controls the presentation of the loader based on the context state.
  if (!isLoading) return null;

  return <GlobalLoader />;
};


const GlobalLoaderWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only once on the client after hydration, setting isClient to true.
    setIsClient(true);
  }, []);

  // During SSR or before client-side hydration, render nothing.
  // This prevents any client-side hooks within GlobalLoaderLogic from running on the server.
  if (!isClient) {
    return null;
  }

  // Render the actual loader logic only on the client-side.
  return <GlobalLoaderLogic />;
};

export default GlobalLoaderWrapper;
