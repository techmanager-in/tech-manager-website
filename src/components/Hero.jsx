import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { playHammerStrike } from '../utils/soundEffects';

export default function Hero() {
  const [activeChip, setActiveChip] = useState(null);

  const handleChipClick = (name) => {
    setActiveChip(name);
    playHammerStrike(1.2, 0.3);
    setTimeout(() => setActiveChip(null), 1000);
  };

  return (
    <section className="hero section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow glow-one" aria-hidden="true" />
      <div className="hero-glow glow-two" aria-hidden="true" />

      <div className="hero-copy reveal is-visible">
        <div className="eyebrow">
          <span className="status-dot" />
          DIGITAL SYSTEMS · FORGED FOR BUSINESS
        </div>
        <h1>
          Make technology<br />
          work <span className="gradient-word">for business.</span>
        </h1>
        <p className="hero-lede">
          From the first customer interaction to the work happening behind the scenes, we build digital systems that dismantle complexity and make business feel simpler.
        </p>

        <div className="hero-actions">
          <a className="button button-primary magnetic" href="#services">
            Explore what we do <ArrowUpRight size={16} />
          </a>
          <a className="text-link" href="#forge">
            Smash bottlenecks in Forge <ArrowDown size={14} />
          </a>
        </div>

        <div className="hero-footnote">
          <span className="foot-line" />
          <span>ONE TECHNOLOGY PARTNER.</span>
          <span>MORE ROOM TO GROW.</span>
        </div>
      </div>

      <div
        className="hero-art reveal reveal-delay is-visible"
        aria-label="Abstract illustration of connected business systems"
      >
        <div className="art-orbit orbit-a" />
        <div className="art-orbit orbit-b" />

        <div className="orbit-label label-top">
          <span className="mini-pulse" /> SYSTEMS ONLINE
        </div>
        <div className="orbit-label label-bottom">
          BUILT TO CONNECT <span>✳</span>
        </div>

        {/* Central Core Card */}
        <div
          className="core-card interactive"
          onClick={() => handleChipClick('Core')}
          title="Click to strike the Core with your hammer"
        >
          <div className="core-top">
            <span className="window-dots">
              <i /><i /><i />
            </span>
            <span className="core-tag">TM / CORE FORGE</span>
          </div>
          <div className="core-symbol">
            <span className="symbol-ring ring-1" />
            <span className="symbol-ring ring-2" />
            <span className="symbol-center">
              T<span>M</span>
            </span>
            <i className="spark spark-a" />
            <i className="spark spark-b" />
          </div>
          <div className="core-bottom">
            <span>CONNECTED OPERATIONS</span>
            <span className="core-live">● LIVE</span>
          </div>
        </div>

        {/* Floating Chips - clickable with hammer */}
        <div
          className={`float-chip chip-optical ${activeChip === 'Optical' ? 'chip-struck' : ''}`}
          onClick={() => handleChipClick('Optical')}
        >
          <span className="chip-icon">◈</span>
          <span>
            <b>Optical</b>
            <small>Retail systems</small>
          </span>
          <i>↗</i>
        </div>

        <div
          className={`float-chip chip-broadcast ${activeChip === 'Broadcast' ? 'chip-struck' : ''}`}
          onClick={() => handleChipClick('Broadcast')}
        >
          <span className="chip-icon">⌁</span>
          <span>
            <b>Broadcast</b>
            <small>Customer reach</small>
          </span>
          <i>↗</i>
        </div>

        <div
          className={`float-chip chip-web ${activeChip === 'Web' ? 'chip-struck' : ''}`}
          onClick={() => handleChipClick('Web')}
        >
          <span className="chip-icon">⌘</span>
          <span>
            <b>Web</b>
            <small>Digital experiences</small>
          </span>
          <i>↗</i>
        </div>

        <div
          className={`float-chip chip-surveillance ${activeChip === 'Surveillance' ? 'chip-struck' : ''}`}
          onClick={() => handleChipClick('Surveillance')}
        >
          <span className="chip-icon">◎</span>
          <span>
            <b>Surveillance</b>
            <small>Smarter visibility</small>
          </span>
          <i>↗</i>
        </div>

        <div className="art-cross cross-a">✳</div>
        <div className="art-cross cross-b">✳</div>
      </div>

      <div className="hero-bottom reveal is-visible">
        <span>STRIKE ANYWHERE WITH HAMMER TO INTERACT</span>
        <span className="scroll-mark">
          <i />
        </span>
        <span className="hero-coordinate">28° 38' N &nbsp; / &nbsp; 77° 13' E</span>
      </div>
    </section>
  );
}
