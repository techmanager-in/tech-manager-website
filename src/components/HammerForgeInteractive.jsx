import React, { useState } from 'react';
import { playForgeShatter } from '../utils/soundEffects';

const INITIAL_BOTTLENECKS = [
  {
    id: 1,
    problem: 'Manual Paper & Excel Billing',
    symptom: 'Lost invoices & errors',
    solution: 'Optical Manager Active',
    detail: 'Instant optical POS, automated customer recall & GST billing',
    smashed: false,
    color: '#a78bfa'
  },
  {
    id: 2,
    problem: 'Disorganized WhatsApp Messaging',
    symptom: 'Unread customer messages',
    solution: 'Broadcast Manager Online',
    detail: 'Targeted broadcast campaigns & automated conversational flows',
    smashed: false,
    color: '#80d9eb'
  },
  {
    id: 3,
    problem: 'Passive CCTV Video Feeds',
    symptom: 'Hours wasted reviewing tapes',
    solution: 'Surveillance AI Deployed',
    detail: 'Real-time human detection, smart perimeter & instant alerts',
    smashed: false,
    color: '#97e6c0'
  },
  {
    id: 4,
    problem: 'Fragmented Internal Operations',
    symptom: 'Attendance & tasks slipping',
    solution: 'Operations Suite Synced',
    detail: 'Synchronized team attendance, task boards & document review',
    smashed: false,
    color: '#ed9bd4'
  },
  {
    id: 5,
    problem: 'Rigid Off-the-Shelf SaaS',
    symptom: 'Teams forced to fit software',
    solution: 'Custom Engine Built',
    detail: 'Bespoke dashboards and API automations engineered for you',
    smashed: false,
    color: '#fde047'
  }
];

export default function HammerForgeInteractive() {
  const [items, setItems] = useState(INITIAL_BOTTLENECKS);
  const [lastSmashedId, setLastSmashedId] = useState(null);

  const handleSmash = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, smashed: true } : item))
    );
    setLastSmashedId(id);
    playForgeShatter();
  };

  const handleReset = () => {
    setItems(INITIAL_BOTTLENECKS);
    setLastSmashedId(null);
  };

  const smashedCount = items.filter((i) => i.smashed).length;
  const isAllSmashed = smashedCount === items.length;

  return (
    <section className="forge-section section-shell section-space" id="forge">
      <div className="section-heading reveal">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-index">INTERACTIVE /</span> THE SYSTEM FORGE
          </div>
          <h2>
            Smash complexity.<br />
            <span className="gradient-word">Forge your workflow.</span>
          </h2>
        </div>
        <p>
          Take your hammer cursor and click on any legacy operational bottleneck below to dismantle it and reveal the Tech Manager solution.
        </p>
      </div>

      <div className="forge-status-bar reveal">
        <div className="forge-score">
          <span>BOTTLENECKS SMASHED:</span>
          <b>{smashedCount} / {items.length}</b>
          <div className="forge-meter">
            <div
              className="forge-meter-fill"
              style={{ width: `${(smashedCount / items.length) * 100}%` }}
            />
          </div>
        </div>
        {smashedCount > 0 && (
          <button
            type="button"
            className="text-link reset-forge-btn"
            onClick={handleReset}
          >
            Reset Forge ↺
          </button>
        )}
      </div>

      <div className="forge-grid">
        {items.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            className={`forge-card ${item.smashed ? 'is-smashed' : ''} ${lastSmashedId === item.id ? 'just-smashed' : ''}`}
            onClick={() => !item.smashed && handleSmash(item.id)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !item.smashed) {
                e.preventDefault();
                handleSmash(item.id);
              }
            }}
            aria-label={item.smashed ? `${item.solution} active` : `Smash ${item.problem}`}
          >
            {!item.smashed ? (
              <div className="forge-unhit">
                <div className="forge-crack-hint">
                  <span className="forge-target-icon">⚡</span>
                  <small>CLICK TO SMASH</small>
                </div>
                <h3>{item.problem}</h3>
                <p className="forge-symptom">⚠ {item.symptom}</p>
                <div className="forge-prompt">
                  <span>STRIKE WITH HAMMER</span>
                  <span className="strike-arrow">🔨</span>
                </div>
              </div>
            ) : (
              <div className="forge-solved" style={{ '--accent-glow': item.color }}>
                <div className="forge-solved-badge">
                  <span className="status-dot"></span>
                  OPTIMIZED
                </div>
                <h3 style={{ color: item.color }}>{item.solution}</h3>
                <p>{item.detail}</p>
                <div className="forge-success-foot">
                  <span>SYSTEM RUNNING CLEAN</span>
                  <b>✓</b>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isAllSmashed && (
        <div className="forge-congrats reveal is-visible">
          <div className="congrats-content">
            <span className="congrats-star">✦</span>
            <div>
              <h3>ALL BOTTLENECKS DISMANTLED</h3>
              <p>Ready to bring this level of clarity and engineering to your actual company operations?</p>
            </div>
            <a className="button button-primary" href="#contact">
              Build your system now <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
