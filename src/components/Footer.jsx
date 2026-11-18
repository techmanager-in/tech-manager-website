import React from 'react';
import { ArrowUp } from 'lucide-react';
import { playHammerStrike } from '../utils/soundEffects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e) => {
    e.preventDefault();
    playHammerStrike(1.4, 0.2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top section-shell">
        <a className="brand" href="#top" onClick={handleBackToTop}>
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

        <p>
          Technology that keeps<br />
          your business moving.
        </p>

        <a href="#top" className="back-top" onClick={handleBackToTop}>
          BACK TO TOP <ArrowUp size={14} className="back-top-icon" />
        </a>
      </div>

      <div className="footer-bottom section-shell">
        <span>© {currentYear} TECH MANAGER. ALL RIGHTS RESERVED.</span>
        <span>
          ENGINEERED WITH REACT & FORGED WITH CARE <b>✳</b>
        </span>
        <span className="footer-location">INDIA · WORKING WORLDWIDE</span>
      </div>
    </footer>
  );
}
