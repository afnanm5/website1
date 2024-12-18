// app/components/ui/BackgroundLines.tsx

import React from 'react';

export const BackgroundLines = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-blue-500 to-green-500 opacity-10">
        {/* Background lines effect (you can customize it here) */}
      </div>
      <div className="relative z-20">{children}</div>
    </div>
  );
};
