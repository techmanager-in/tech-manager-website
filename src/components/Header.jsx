import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { setSoundEnabled } from '../utils/soundEffects';

export default function Header({ soundActive, setSoundActive }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = total > 0 ? (current / total) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundActive;
    setSoundActive(nextState);
    setSoundEnabled(nextState);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Tech Manager home" onClick={closeMenu}>
          <span className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="brand-name">
            tech<span>manager</span><i>®</i>
          </span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#forge" onClick={closeMenu}>Forge <span className="nav-badge">NEW</span></a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#about" onClick={closeMenu}>About</a>
        </nav>

        <div className="header-right-actions">
          {/* Hammer SFX Toggle Button */}
          <button
            type="button"
            className={`sound-toggle-btn ${soundActive ? 'is-active' : ''}`}
            onClick={toggleSound}
            aria-label={soundActive ? 'Mute hammer sound effects' : 'Enable hammer sound effects'}
            title={soundActive ? 'Hammer sound: Active' : 'Hammer sound: Muted (Click to enable)'}
          >
            {soundActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span className="sound-toggle-label">
              HAMMER SFX: {soundActive ? 'ON' : 'OFF'}
            </span>
          </button>

          <a className="header-cta magnetic" href="#contact">
            Let’s talk <ArrowUpRight size={14} className="cta-arrow" />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
