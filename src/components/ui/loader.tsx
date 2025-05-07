
'use client';

import { Loader2 } from 'lucide-react';

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm" aria-label="Loading page" role="alert" aria-live="assertive">
      <Loader2 className="h-12 w-12 animate-spin text-accent" />
    </div>
  );
};

export default GlobalLoader;
