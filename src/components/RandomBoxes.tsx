import { useState, useEffect } from 'react';

interface Shape {
  id: number;
  type: 'box' | 'circle' | 'triangle' | 'binary';
  color: string;
  size: string;
  x: number;
  y: number;
  rotation: number;
  content?: string; // For binary digits
}

export function RandomBoxes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  const colors = [
    '#2A4494',
    '#4A90E2',
    '#6BB6FF',
    '#8B5CF6',
    '#06B6D4',
    '#10B981',
    '#F59E0B',
    '#EF4444',
    '#EC4899',
    '#84CC16'
  ];

  const sizes = ['w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8'];
  const binarySizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
  const shapeTypes: ('box' | 'circle' | 'triangle' | 'binary')[] = ['box', 'circle', 'triangle', 'binary'];

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: Shape[] = [];
      for (let i = 0; i < 50; i++) { // More shapes for full background
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        
        newShapes.push({
          id: i,
          type: shapeType,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: shapeType === 'binary' 
            ? binarySizes[Math.floor(Math.random() * binarySizes.length)]
            : sizes[Math.floor(Math.random() * sizes.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          content: shapeType === 'binary' ? (Math.random() > 0.5 ? '1' : '0') : undefined,
        });
      }
      setShapes(newShapes);
    };

    generateShapes();

    // Regenerate shapes every 4 seconds
    const interval = setInterval(generateShapes, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderShape = (shape: Shape) => {
    const baseClasses = `absolute transition-all duration-1500 ease-in-out opacity-40 hover:opacity-80`;
    const position = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      transform: `rotate(${shape.rotation}deg)`,
    };

    switch (shape.type) {
      case 'box':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} ${shape.size}`}
            style={{
              backgroundColor: shape.color,
              ...position,
            }}
          />
        );
      
      case 'circle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} ${shape.size} rounded-full`}
            style={{
              backgroundColor: shape.color,
              ...position,
            }}
          />
        );
      
      case 'triangle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} ${shape.size}`}
            style={{
              ...position,
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: `16px solid ${shape.color}`,
              backgroundColor: 'transparent',
            }}
          />
        );
      
      case 'binary':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} ${shape.size} font-mono font-bold select-none`}
            style={{
              color: shape.color,
              ...position,
            }}
          >
            {shape.content}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {shapes.map(renderShape)}
    </div>
  );
} 