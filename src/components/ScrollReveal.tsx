import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 50,
  className = ''
}) => {
  const { ref, isVisible } = useScrollReveal({ delay, triggerOnce: false });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.95)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.95)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.95)`;
      case 'fade':
        return 'translate3d(0, 0, 0) scale(0.95)';
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;