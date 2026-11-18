import React from 'react';

export default function TrustMarquee() {
  const phrases = [
    'SMASHING BOTTLENECKS',
    'BETTER WORKFLOWS',
    'SMARTER TOOLS',
    'STRONGER CONNECTIONS',
    'CLEAN CODE ARCHITECTURE',
    'PURPOSE-BUILT AUTOMATION',
    'RETAIL & OPTICAL POS',
    'WHATSAPP BROADCASTS'
  ];

  return (
    <section className="trust-strip" aria-label="Our core capabilities">
      <div className="trust-label">WE TURN COMPLEXITY INTO</div>
      <div className="marquee-window">
        <div className="marquee-track">
          {phrases.concat(phrases).map((text, idx) => (
            <React.Fragment key={idx}>
              <span>{text}</span>
              <b>✳</b>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
