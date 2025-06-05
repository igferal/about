import { useState, useEffect, useRef } from 'react';

export function AnimatedName() {
  const name = "Igferal";
  const [coloredLetters, setColoredLetters] = useState<Set<number>>(new Set());
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      // Start the animation
      intervalRef.current = setInterval(() => {
        // Get all letter indices (excluding spaces)
        const letterIndices = name
          .split('')
          .map((char, index) => char !== ' ' ? index : -1)
          .filter(index => index !== -1);

        // Randomly select 1-3 letters to color
        const numToColor = Math.floor(Math.random() * 3) + 1;
        const shuffled = [...letterIndices].sort(() => Math.random() - 0.5);
        const newColoredLetters = new Set(shuffled.slice(0, numToColor));
        
        setColoredLetters(newColoredLetters);
      }, 400); // Slower animation - change every 400ms
    } else {
      // Stop the animation and clear colors
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setColoredLetters(new Set());
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, name]);

  return (
    <h1
      className="font-merriweather text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-tight cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name.split('').map((char, index) => (
        <span
          key={index}
          className={`transition-colors duration-500 ${
            coloredLetters.has(index)
              ? 'text-[#2A4494]'
              : 'text-foreground'
          }`}
        >
          {char}
        </span>
      ))}
    </h1>
  );
} 