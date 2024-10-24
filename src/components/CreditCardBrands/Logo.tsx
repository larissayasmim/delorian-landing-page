import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={className} />
  );
};

export default Logo;
