import React from 'react';

interface IconProps {
  className?: string;
}

export const DefaultIcon: React.FC<IconProps> = ({ className = "w-auto h-16 flex-shrink-0" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16-.74 9-4.45 9-10V7l-10-5z" />
    </svg>
  );
}; 