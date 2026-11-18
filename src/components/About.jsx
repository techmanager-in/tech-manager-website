import React from 'react';
import { playHammerStrike } from '../utils/soundEffects';

export default function About() {
  return (
    <section className="about-band" id="about">
      <div className="section-shell about-inner">
        <div
          className="about-mark reveal is-visible interactive"
          onClick={() => playHammerStrike(1.3, 0.25)}
          title="Click to strike the Tech Manager seal"
        >
          <div className="about-mark-grid">
            <span> T </span>
            <span> M </span>
            <i />
            <i />
          </div>
          <div className="about-mark-caption">TECH MANAGER / EST. FOR WHAT’S NEXT</div>
        </div>

        <div className="about-copy reveal is-visible">
          <div className="eyebrow">
            <span className="eyebrow-index">04 /</span> A LITTLE ABOUT US
          </div>
          <h2>
            Not just another<br />
            <span className="muted-heading">technology vendor.</span>
          </h2>
          <p>
            Tech Manager is an engineering partner for businesses that want to work smarter. We combine product intuition, robust modern engineering, and a relentless problem-solving mindset to build tools that keep your business moving forward.
          </p>
          <div className="about-values">
            <span>BUILT WITH INTENT</span>
            <span>DESIGNED FOR PEOPLE</span>
            <span>READY TO EVOLVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
