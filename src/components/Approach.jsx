import React from 'react';
import { playHammerStrike } from '../utils/soundEffects';

export default function Approach() {
  const steps = [
    {
      num: '01',
      title: 'Understand the moving parts',
      desc: 'We learn how your business operates today, where time gets lost and what a better outcome looks like.',
      icon: '⌕'
    },
    {
      num: '02',
      title: 'Shape the right solution',
      desc: 'We map the user experience, database architecture and integrations—without adding complexity for its own sake.',
      icon: '✳'
    },
    {
      num: '03',
      title: 'Build, test and refine',
      desc: 'We turn the plan into a resilient, high-speed product, test it against daily use and polish the details that matter.',
      icon: '⌘'
    },
    {
      num: '04',
      title: 'Keep making it better',
      desc: 'As your team and market evolve, your digital tools should be engineered to scale and adapt smoothly with them.',
      icon: '↗'
    }
  ];

  return (
    <section className="approach section-shell section-space" id="approach">
      <div className="approach-intro reveal is-visible">
        <div className="eyebrow">
          <span className="eyebrow-index">03 /</span> HOW WE WORK
        </div>
        <h2>
          Good technology<br />
          starts with <span className="gradient-word">good questions.</span>
        </h2>
        <p>
          We don’t start with a stack of features. We start by understanding the people, process and bottleneck behind the brief.
        </p>
        <a className="text-link" href="#contact">
          Bring us a challenge <span>↗</span>
        </a>
      </div>

      <div className="process-list">
        {steps.map((step) => (
          <article
            key={step.num}
            className="process-item reveal is-visible"
            onClick={() => playHammerStrike(1.2, 0.2)}
          >
            <span className="process-num">{step.num}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            <span className="process-icon">{step.icon}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
