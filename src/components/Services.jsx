import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { playHammerStrike } from '../utils/soundEffects';

export default function Services() {
  const handlePointerMove = (e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardEl.style.setProperty('--mx', `${x}px`);
    cardEl.style.setProperty('--my', `${y}px`);

    const rx = (y / rect.height - 0.5) * -4;
    const ry = (x / rect.width - 0.5) * 4;
    cardEl.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };

  const handlePointerLeave = (cardEl) => {
    if (!cardEl) return;
    cardEl.style.transform = '';
  };

  const handleCardClick = (e) => {
    playHammerStrike(1.1, 0.25);
    const target = e.currentTarget;
    target.classList.add('card-hammer-jolt');
    setTimeout(() => target.classList.remove('card-hammer-jolt'), 300);
  };

  return (
    <section className="services section-shell section-space" id="services">
      <div className="section-heading reveal is-visible">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-index">01 /</span> WHAT WE BUILD
          </div>
          <h2>
            One partner.<br />
            <span className="muted-heading">Many ways forward.</span>
          </h2>
        </div>
        <p>
          Technology should remove friction, not add another layer of it. Choose a focused service—or bring us a challenge and we’ll shape the right solution.
        </p>
      </div>

      <div className="service-grid">
        {/* Card 1: Optical Manager */}
        <article
          className="service-card service-featured spotlight-card reveal is-visible"
          onPointerMove={(e) => handlePointerMove(e, e.currentTarget)}
          onPointerLeave={(e) => handlePointerLeave(e.currentTarget)}
          onClick={handleCardClick}
        >
          <div className="card-topline">
            <span>01 — RETAIL OPERATIONS</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="service-visual optical-visual">
            <div className="mini-app optical-app">
              <div className="mini-sidebar">
                <b>om.</b>
                <i /><i /><i /><i />
              </div>
              <div className="mini-content">
                <div className="mini-app-head">
                  <span>Good morning, team</span>
                  <b>•••</b>
                </div>
                <div className="mini-metrics">
                  <div>
                    <small>Today's sales</small>
                    <b>₹ 24,850</b>
                    <em>↗ 12.8%</em>
                  </div>
                  <div>
                    <small>Open bills</small>
                    <b>08</b>
                    <em>In progress</em>
                  </div>
                </div>
                <div className="mini-chart">
                  <div className="chart-label">
                    <span>Sales overview</span>
                    <small>THIS WEEK</small>
                  </div>
                  <div className="chart-bars">
                    <i style={{ height: '32%' }} />
                    <i style={{ height: '55%' }} />
                    <i style={{ height: '43%' }} />
                    <i style={{ height: '72%' }} />
                    <i style={{ height: '59%' }} />
                    <i style={{ height: '88%' }} />
                    <i style={{ height: '68%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-orbit" />
            <span className="visual-caption">A CLEARER VIEW OF YOUR STORE</span>
          </div>
          <div className="service-content">
            <div className="service-title-row">
              <h3>Optical Manager</h3>
              <span className="service-number">01</span>
            </div>
            <p>
              A connected workspace for optical stores—billing, customer records, prescription follow-ups and business insights in one place.
            </p>
            <a className="arrow-link" href="#contact">
              Explore the solution <ArrowUpRight size={14} />
            </a>
          </div>
        </article>

        {/* Card 2: Broadcast Manager */}
        <article
          className="service-card spotlight-card reveal is-visible"
          onPointerMove={(e) => handlePointerMove(e, e.currentTarget)}
          onPointerLeave={(e) => handlePointerLeave(e.currentTarget)}
          onClick={handleCardClick}
        >
          <div className="card-topline">
            <span>02 — CUSTOMER COMMUNICATION</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="service-visual broadcast-visual">
            <div className="broadcast-window">
              <div className="broadcast-head">
                <span className="wa-dot">⌁</span>
                <div>
                  <b>Campaign overview</b>
                  <small>Broadcast Manager</small>
                </div>
                <span className="live-pill">● READY</span>
              </div>
              <div className="broadcast-message">
                <small>CAMPAIGN PREVIEW</small>
                <b>Your customers,<br />in the loop.</b>
                <span>New updates and offers, delivered directly to WhatsApp.</span>
                <div className="message-button">
                  View update <i>↗</i>
                </div>
              </div>
              <div className="broadcast-foot">
                <span><i></i> 1,420 Audience selected</span>
                <span>WhatsApp flow</span>
              </div>
            </div>
            <div className="broadcast-orb orb-left" />
            <div className="broadcast-orb orb-right" />
          </div>
          <div className="service-content">
            <div className="service-title-row">
              <h3>Broadcast Manager</h3>
              <span className="service-number">02</span>
            </div>
            <p>
              Reach customers with organized WhatsApp campaigns, contact segmentation and a more consistent communication workflow.
            </p>
            <a className="arrow-link" href="#contact">
              Explore the solution <ArrowUpRight size={14} />
            </a>
          </div>
        </article>

        {/* Card 3: Web Manager */}
        <article
          className="service-card spotlight-card reveal is-visible"
          onPointerMove={(e) => handlePointerMove(e, e.currentTarget)}
          onPointerLeave={(e) => handlePointerLeave(e.currentTarget)}
          onClick={handleCardClick}
        >
          <div className="card-topline">
            <span>03 — DIGITAL EXPERIENCES</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="service-visual web-visual">
            <div className="browser-mock">
              <div className="browser-bar">
                <span /><span /><span />
                <small>yourbrand.com</small>
              </div>
              <div className="browser-body">
                <div className="browser-nav">
                  <b>STUDIO<span>.</span></b>
                  <small>SHOP &nbsp; ABOUT &nbsp; CONTACT</small>
                </div>
                <div className="browser-hero">
                  <div>
                    <small>MADE FOR EVERY DAY</small>
                    <b>Make room<br />for <i>more.</i></b>
                    <span className="browser-cta">DISCOVER THE EDITION ↗</span>
                  </div>
                  <div className="browser-shape">
                    <div className="shape-arch" />
                    <div className="shape-ball" />
                  </div>
                </div>
              </div>
            </div>
            <div className="web-sticker">
              DESIGN<br />MEETS<br />FUNCTION <span>✳</span>
            </div>
          </div>
          <div className="service-content">
            <div className="service-title-row">
              <h3>Web Manager</h3>
              <span className="service-number">03</span>
            </div>
            <p>
              Thoughtful websites and e-commerce experiences that make your brand easier to discover, trust and choose.
            </p>
            <a className="arrow-link" href="#contact">
              Explore the solution <ArrowUpRight size={14} />
            </a>
          </div>
        </article>

        {/* Card 4: Surveillance Manager */}
        <article
          className="service-card spotlight-card reveal is-visible"
          onPointerMove={(e) => handlePointerMove(e, e.currentTarget)}
          onPointerLeave={(e) => handlePointerLeave(e.currentTarget)}
          onClick={handleCardClick}
        >
          <div className="card-topline">
            <span>04 — INTELLIGENT VISIBILITY</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="service-visual surveillance-visual">
            <div className="surv-screen">
              <div className="surv-top">
                <span>LIVE MONITORING</span>
                <span className="rec-dot">● REC</span>
              </div>
              <div className="camera-feed">
                <div className="camera-grid" />
                <div className="camera-person person-one" />
                <div className="camera-person person-two" />
                <div className="detect-box box-one">
                  <small>PERSON 01</small>
                </div>
                <div className="detect-box box-two">
                  <small>PERSON 02</small>
                </div>
                <div className="camera-time">CAM 04 &nbsp; 14:32:08</div>
              </div>
              <div className="surv-bottom">
                <span>CAMERAS <b>04</b></span>
                <span>DETECTION <b className="green-text">ACTIVE</b></span>
                <span>STATUS <b className="green-text">STABLE</b></span>
              </div>
            </div>
            <div className="surv-radar">
              <i /><i /><i />
              <b>◎</b>
            </div>
          </div>
          <div className="service-content">
            <div className="service-title-row">
              <h3>Surveillance Manager</h3>
              <span className="service-number">04</span>
            </div>
            <p>
              Bring CCTV feeds and intelligent computer-vision monitoring together to help teams gain real-time visibility into spaces.
            </p>
            <a className="arrow-link" href="#contact">
              Explore the solution <ArrowUpRight size={14} />
            </a>
          </div>
        </article>

        {/* Card 5: Custom Software Manager */}
        <article
          className="service-card service-wide spotlight-card reveal is-visible"
          onPointerMove={(e) => handlePointerMove(e, e.currentTarget)}
          onPointerLeave={(e) => handlePointerLeave(e.currentTarget)}
          onClick={handleCardClick}
        >
          <div className="card-topline">
            <span>05 — BUILT AROUND YOUR WORK</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="wide-service-layout">
            <div className="service-visual custom-visual">
              <div className="node-flow">
                <div className="flow-node node-main">
                  <span>✳</span>
                  <div>
                    <b>Your business</b>
                    <small>One unique challenge</small>
                  </div>
                </div>
                <div className="flow-path path-a" />
                <div className="flow-path path-b" />
                <div className="flow-path path-c" />
                <div className="flow-node node-a">
                  <span>↗</span>
                  <b>Automate</b>
                </div>
                <div className="flow-node node-b">
                  <span>⌘</span>
                  <b>Integrate</b>
                </div>
                <div className="flow-node node-c">
                  <span>◎</span>
                  <b>Build</b>
                </div>
                <div className="flow-end">
                  <span>✦</span>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-title-row">
                <h3>Custom Software Manager</h3>
                <span className="service-number">05</span>
              </div>
              <p>
                When off-the-shelf tools don’t fit, we design and develop custom applications, dashboards, integrations and workflows around the way your team actually works.
              </p>
              <a className="arrow-link" href="#contact">
                Tell us what you need <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
