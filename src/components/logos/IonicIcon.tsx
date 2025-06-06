import React from 'react';

interface IconProps {
  className?: string;
}

export const IonicIcon: React.FC<IconProps> = ({ className = "w-auto h-16 flex-shrink-0" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.68 7.68a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/>
    </svg>
  );
}; 