import React from 'react';

interface IconProps {
  className?: string;
}

export const SymfonyIcon: React.FC<IconProps> = ({ className = "w-auto h-16 flex-shrink-0" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12c0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12zM8.64 6.2c-.36 0-.64.29-.64.64v10.32c0 .36.29.64.64.64.36 0 .64-.29.64-.64V6.84c0-.36-.29-.64-.64-.64zm3.2 3.2c-.36 0-.64.29-.64.64v4.32c0 .36.29.64.64.64.36 0 .64-.29.64-.64V10.04c0-.36-.29-.64-.64-.64zm3.2-1.6c-.36 0-.64.29-.64.64v7.12c0 .36.29.64.64.64.36 0 .64-.29.64-.64V8.44c0-.36-.29-.64-.64-.64z" />
    </svg>
  );
}; 