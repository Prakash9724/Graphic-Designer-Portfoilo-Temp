import React, { useEffect, useState, useRef } from 'react';

/**
 * Custom cursor: small dot that grows into a labelled circle over work tiles.
 * Desktop only; disabled on touch devices.
 */
export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only activate on true pointer:fine (mouse) devices, never on touch or stylus-primary
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Smooth follow with RAF
    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.15,
        y: prev.y + (targetRef.current.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // Listen for hover on work tiles
    const handleOver = (e) => {
      if (e.target.closest('[data-cursor="view"]')) setIsHovering(true);
    };
    const handleOut = (e) => {
      if (e.target.closest('[data-cursor="view"]')) setIsHovering(false);
    };
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed pointer-events-none z-[80] mix-blend-difference"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      <div
        className="rounded-full flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          width: isHovering ? 64 : 8,
          height: isHovering ? 64 : 8,
          marginLeft: isHovering ? -32 : -4,
          marginTop: isHovering ? -32 : -4,
          backgroundColor: isHovering ? 'rgba(255,255,255,0.9)' : '#fff',
        }}
      >
        {isHovering && (
          <span className="text-[11px] font-heading font-semibold text-black tracking-wide">
            View
          </span>
        )}
      </div>
    </div>
  );
}
