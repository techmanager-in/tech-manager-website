import React, { useEffect, useState, useRef } from 'react';
import { playHammerStrike } from '../utils/soundEffects';

export default function HammerCursor({ soundActive }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHitting, setIsHitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [sparks, setSparks] = useState([]);
  const [shockwaves, setShockwaves] = useState([]);
  const [trails, setTrails] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const sparkIdCounter = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports fine hover pointer (mouse)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsEnabled(false);
      return;
    }
    setIsEnabled(true);
    document.documentElement.classList.add('custom-hammer-active');

    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      // Calculate speed for trailing sparks
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 18 && Math.random() > 0.4) {
        const trailId = ++sparkIdCounter.current;
        setTrails((prev) => [
          ...prev.slice(-8),
          {
            id: trailId,
            x: clientX,
            y: clientY,
            size: Math.random() * 3 + 2,
            color: Math.random() > 0.5 ? '#80d9eb' : '#a78bfa',
            createdAt: Date.now()
          }
        ]);
      }
      lastPos.current = { x: clientX, y: clientY };

      // Detect if hovering over clickable/interactive elements
      const target = document.elementFromPoint(clientX, clientY);
      if (target) {
        const isClickable = target.closest('a, button, input, select, textarea, [role="button"], .spotlight-card, .interactive, .process-item, [data-tilt]');
        setIsHovering(!!isClickable);
      }
    };

    const handleMouseDown = (e) => {
      setIsHitting(true);
      playHammerStrike(1, 0.35);

      const impactX = e.clientX;
      const impactY = e.clientY;

      // Create burst of impact sparks
      const newSparks = [];
      const sparkCount = 12;
      const colors = ['#80d9eb', '#a78bfa', '#fde047', '#ffffff', '#e6b5df'];

      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 5 + 3;
        newSparks.push({
          id: ++sparkIdCounter.current,
          x: impactX,
          y: impactY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          createdAt: Date.now()
        });
      }

      setSparks((prev) => [...prev.slice(-30), ...newSparks]);

      // Create shockwave ring
      setShockwaves((prev) => [
        ...prev.slice(-4),
        {
          id: ++sparkIdCounter.current,
          x: impactX,
          y: impactY,
          createdAt: Date.now()
        }
      ]);
    };

    const handleMouseUp = () => {
      setIsHitting(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.documentElement.classList.remove('custom-hammer-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [soundActive]);

  // Clean up expired sparks, shockwaves, and trails via animation loop
  useEffect(() => {
    if (!isEnabled) return;
    let animId;
    const updateParticles = () => {
      const now = Date.now();
      setSparks((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy,
            vy: s.vy + 0.22, // gravity
            opacity: s.opacity - 0.035
          }))
          .filter((s) => s.opacity > 0 && now - s.createdAt < 700)
      );

      setShockwaves((prev) => prev.filter((sw) => now - sw.createdAt < 500));
      setTrails((prev) => prev.filter((t) => now - t.createdAt < 400));

      animId = requestAnimationFrame(updateParticles);
    };
    animId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animId);
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="hammer-cursor-layer" aria-hidden="true">
      {/* Shockwave Rings */}
      {shockwaves.map((sw) => (
        <div
          key={sw.id}
          className="hammer-shockwave"
          style={{
            left: `${sw.x}px`,
            top: `${sw.y}px`
          }}
        />
      ))}

      {/* Trailing Motes */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="hammer-trail-mote"
          style={{
            left: `${t.x}px`,
            top: `${t.y}px`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            backgroundColor: t.color,
            boxShadow: `0 0 8px ${t.color}`
          }}
        />
      ))}

      {/* Impact Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="hammer-spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: spark.color,
            boxShadow: `0 0 10px ${spark.color}, 0 0 4px #ffffff`,
            opacity: spark.opacity
          }}
        />
      ))}

      {/* The Styled Hammer Graphic */}
      <div
        className={`hammer-container ${isHitting ? 'hitting' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      >
        <svg
          className="hammer-svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Energy aura glow around head */}
          <filter id="hammerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <g className="hammer-group">
            {/* Hammer Handle / Shaft */}
            <line
              x1="12"
              y1="14"
              x2="38"
              y2="40"
              stroke="#2e334a"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="15"
              x2="37"
              y2="39"
              stroke="#586187"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Grip Wraps */}
            <line x1="22" y1="24" x2="25" y2="27" stroke="#161827" strokeWidth="2.5" />
            <line x1="27" y1="29" x2="30" y2="32" stroke="#161827" strokeWidth="2.5" />
            <line x1="32" y1="34" x2="35" y2="37" stroke="#161827" strokeWidth="2.5" />

            {/* Pommel / Base */}
            <circle cx="39" cy="41" r="3.2" fill="#80d9eb" />
            <circle cx="39" cy="41" r="1.5" fill="#ffffff" />

            {/* Hammer Head - Heavy Futuristic Design */}
            {/* Impact face is right near (4, 6) which hits near (0,0) */}
            <path
              d="M3 13L15 1L21 7L9 19L3 13Z"
              fill="url(#hammerHeadGrad)"
              stroke="#a78bfa"
              strokeWidth="1.2"
              filter="url(#hammerGlow)"
            />

            {/* Rear claw / anvil spike */}
            <path
              d="M16 3L23 10L19 14L12 7L16 3Z"
              fill="#242842"
              stroke="#6b739e"
              strokeWidth="1"
            />

            {/* Hardened Front Strike Plate */}
            <line
              x1="2.5"
              y1="13.5"
              x2="14.5"
              y2="1.5"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Central Neon Core */}
            <circle cx="12" cy="10" r="2.5" fill="#80d9eb" />
            <circle cx="12" cy="10" r="1" fill="#ffffff" />
            <line x1="7" y1="8" x2="16" y2="12" stroke="#a78bfa" strokeWidth="1" />
          </g>

          <defs>
            <linearGradient id="hammerHeadGrad" x1="3" y1="1" x2="21" y2="19" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f3ecff" />
              <stop offset="0.45" stopColor="#9679ec" />
              <stop offset="1" stopColor="#1a1c31" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic Strike Spark flare when hitting */}
        {isHitting && <div className="hammer-strike-flash" />}
      </div>
    </div>
  );
}
