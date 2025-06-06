import React from 'react';

interface IconProps {
  className?: string;
}

export const RESTAPIsIcon: React.FC<IconProps> = ({ className = "w-auto h-16 flex-shrink-0" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 6.6h4.8v1.2h-4.8V6.6zm0 2.4h4.8v1.2h-4.8V9zm0 2.4h4.8v1.2h-4.8v-1.2zm0 2.4h4.8v1.2h-4.8v-1.2zm-1.8-4.8h-1.2v-1.2h1.2v1.2zm0 2.4h-1.2v-1.2h1.2v1.2zm0 2.4h-1.2v-1.2h1.2v1.2zm0 2.4h-1.2v-1.2h1.2v1.2zm9.6-7.2h-1.2v-1.2h1.2v1.2zm0 2.4h-1.2v-1.2h1.2v1.2zm0 2.4h-1.2v-1.2h1.2v1.2zm0 2.4h-1.2v-1.2h1.2v1.2z"/>
    </svg>
  );
}; 