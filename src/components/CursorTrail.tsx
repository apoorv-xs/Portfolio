import { useEffect, useState } from 'react';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  size: number;
  color: string;
  delay: number;
}

const CursorTrail = () => {
  const [trails, setTrails] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Create variety in size, color, and delay - reduced intensity
      const sizes = [4, 6, 8];
      const colors = [
        'hsl(var(--primary) / 0.4)',
        'hsl(var(--primary) / 0.3)',
        'hsl(var(--accent) / 0.4)',
        'hsl(var(--accent) / 0.3)',
        'hsl(var(--foreground) / 0.2)'
      ];
      
      const newTrail: TrailPoint = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.2
      };

      setTrails(prev => [...prev, newTrail]);

      // Remove trail after animation completes - shorter duration
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 600);
    };

    // Throttle mouse movement for better performance
    let ticking = false;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('mousemove', throttledMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x - trail.size/2}px`,
            top: `${trail.y - trail.size/2}px`,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            background: trail.color,
            animationDelay: `${trail.delay}s`,
            '--trail-size': `${trail.size}px`
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default CursorTrail;
