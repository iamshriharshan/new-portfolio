import React, { useEffect, useState } from 'react';

interface Cube {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  speed: number;
  opacity: number;
}

const AnimatedBackground: React.FC = () => {
  const [cubes, setCubes] = useState<Cube[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const colors = [
    'bg-slate-600',
    'bg-gray-700',
    'bg-blue-800',
    'bg-indigo-700',
    'bg-slate-700',
    'bg-gray-600'
  ];

  useEffect(() => {
    // Reduce number of cubes on mobile for better performance
    const cubeCount = window.innerWidth < 768 ? 8 : 12;
    
    const initialCubes: Cube[] = Array.from({ length: cubeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * (window.innerWidth < 768 ? 30 : 50) + (window.innerWidth < 768 ? 20 : 30),
      rotation: Math.random() * 360,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.3 + 0.1 // Reduced opacity on mobile
    }));
    setCubes(initialCubes);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className={`absolute ${cube.color} transform-gpu transition-transform duration-1000 ease-out`}
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            opacity: cube.opacity,
            transform: `
              translateX(${Math.sin(scrollY * 0.001 + cube.id) * (window.innerWidth < 768 ? 20 : 40)}px)
              translateY(${Math.cos(scrollY * 0.001 + cube.id) * (window.innerWidth < 768 ? 15 : 25)}px)
              rotate3d(1, 1, 0, ${cube.rotation + scrollY * cube.speed}deg)
              scale(${1 + Math.sin(scrollY * 0.002 + cube.id) * 0.08})
            `,
            borderRadius: '4px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          }}
        />
      ))}
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 opacity-95" />
      
      {/* Subtle geometric elements - Reduced on mobile */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-900 rounded-full opacity-5 sm:opacity-10 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-20 sm:h-20 bg-slate-600 rounded-full opacity-10 sm:opacity-15" />
      <div className="absolute top-1/2 left-1/3 w-10 h-10 sm:w-16 sm:h-16 bg-gray-700 rounded-full opacity-15 sm:opacity-20" />
    </div>
  );
};

export default AnimatedBackground;