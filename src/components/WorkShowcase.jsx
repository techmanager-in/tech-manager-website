import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { playHammerStrike } from '../utils/soundEffects';

export default function WorkShowcase() {
  const handleCardClick = () => {
    playHammerStrike(1.15, 0.2);
  };

  return (
    <section className="work-section section-space" id="work">
      <div className="section-shell">
        <div className="section-heading reveal is-visible">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-index">02 /</span> SELECTED WORK
            </div>
            <h2>
              Ideas, meet <span className="gradient-word">execution.</span>
            </h2>
          </div>
          <p>
            A few examples of the digital products and operational tools we work on. Each one starts with a real-world problem and a practical way to solve it.
          </p>
        </div>

        <div className="work-grid">
          {/* Work Item 1 */}
          <article className="work-card work-large reveal is-visible" onClick={handleCardClick}>
            <div className="work-art work-art-optical">
              <div className="work-art-top">
                <span>PRODUCT / 001</span>
                <span>IN ACTIVE DEPLOYMENT ↗</span>
              </div>
              <div className="work-stat-block">
                <small>STORE OVERVIEW</small>
                <strong>One view.<br />Every detail.</strong>
                <div className="stat-row">
                  <div>
                    <b>Sales</b>
                    <span>Daily tracking</span>
                  </div>
                  <div>
                    <b>Customers</b>
                    <span>Follow-up ready</span>
                  </div>
                  <div>
                    <b>Billing</b>
                    <span>Streamlined</span>
                  </div>
                </div>
              </div>
              <div className="work-art-tag">OPTICAL RETAIL PLATFORM</div>
            </div>
            <div className="work-meta">
              <div>
                <span className="work-type">SAAS · RETAIL OPERATIONS</span>
                <h3>Optical Manager</h3>
                <p>Bringing billing, customer management, inventory and follow-ups into one connected workflow for optical stores.</p>
              </div>
              <a className="round-arrow" href="#contact" aria-label="Discuss Optical Manager">
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>

          {/* Work Item 2 */}
          <article className="work-card reveal reveal-delay-small is-visible" onClick={handleCardClick}>
            <div className="work-art work-art-ops">
              <div className="work-art-top">
                <span>PLATFORM / 002</span>
                <span>WORKFLOW SYSTEM</span>
              </div>
              <div className="ops-stack">
                <div className="ops-window">
                  <div className="ops-window-head">
                    <b>Today’s workspace</b>
                    <span>•••</span>
                  </div>
                  <div className="ops-task done">
                    <i>✓</i>
                    <span>Attendance logged</span>
                    <small>09:04 AM</small>
                  </div>
                  <div className="ops-task">
                    <i>↗</i>
                    <span>Review documents</span>
                    <small>IN PROGRESS</small>
                  </div>
                  <div className="ops-task">
                    <i>○</i>
                    <span>Daily summary</span>
                    <small>UP NEXT</small>
                  </div>
                </div>
                <div className="ops-float">+ Team workflow</div>
              </div>
              <div className="work-art-tag">PEOPLE + OPERATIONS</div>
            </div>
            <div className="work-meta">
              <div>
                <span className="work-type">INTERNAL TOOLS · AUTOMATION</span>
                <h3>Operations Suite</h3>
                <p>Purpose-built tools for attendance, documents, task coordination and everyday team operations.</p>
              </div>
              <a className="round-arrow" href="#contact" aria-label="Discuss Operations Suite">
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>

          {/* Work Item 3 */}
          <article className="work-card reveal is-visible" onClick={handleCardClick}>
            <div className="work-art work-art-web">
              <div className="work-art-top">
                <span>EXPERIENCE / 003</span>
                <span>WEB + E-COMMERCE</span>
              </div>
              <div className="web-showcase">
                <div className="showcase-nav">
                  <b>FORME<span>.</span></b>
                  <small>COLLECTIONS &nbsp; OUR STORY</small>
                </div>
                <div className="showcase-copy">
                  <small>THE EVERYDAY EDIT</small>
                  <b>Designed<br />to <i>belong.</i></b>
                  <span>EXPLORE COLLECTION ↗</span>
                </div>
                <div className="showcase-sculpture">
                  <div className="sculpture-one" />
                  <div className="sculpture-two" />
                  <div className="sculpture-three" />
                </div>
              </div>
              <div className="work-art-tag">BRAND-LED DIGITAL EXPERIENCES</div>
            </div>
            <div className="work-meta">
              <div>
                <span className="work-type">WEBSITE · E-COMMERCE</span>
                <h3>Web Experiences</h3>
                <p>Brand-led websites and online stores designed to make products and services feel clear, considered and easy to explore.</p>
              </div>
              <a className="round-arrow" href="#contact" aria-label="Discuss web experiences">
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>

          {/* Work Item 4 */}
          <article className="work-card reveal reveal-delay-small is-visible" onClick={handleCardClick}>
            <div className="work-art work-art-vision">
              <div className="work-art-top">
                <span>INTELLIGENCE / 004</span>
                <span>PROTOTYPE</span>
              </div>
              <div className="vision-ui">
                <div className="vision-radar">
                  <i /><i /><i />
                  <b>◎</b>
                </div>
                <div className="vision-reading">
                  <small>SPACE INSIGHTS</small>
                  <b>Live visibility</b>
                  <span><i></i> Detection system active</span>
                  <div className="vision-lines">
                    <i /><i /><i />
                  </div>
                </div>
              </div>
              <div className="work-art-tag">CAMERA + AI WORKFLOWS</div>
            </div>
            <div className="work-meta">
              <div>
                <span className="work-type">COMPUTER VISION · MONITORING</span>
                <h3>Smart Surveillance</h3>
                <p>Exploring CCTV-connected monitoring and computer-vision features that turn video feeds into actionable operational signals.</p>
              </div>
              <a className="round-arrow" href="#contact" aria-label="Discuss smart surveillance">
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </div>

        <div className="work-note reveal is-visible">
          <span className="note-star">✳</span>
          <p>
            Have a project that doesn’t fit into a box? <a href="#contact">That’s where custom builds begin.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
