# Tech Manager — React & Interactive Hammer Experience

A responsive single-page agency & product platform for **Tech Manager**, rebuilt with **React 18** and **Vite**, featuring an interactive custom **Hammer Cursor** and the interactive **System Forge**.

---

## 🔨 Creative Features

1. **Custom Interactive Hammer Cursor (`HammerCursor.jsx`):**
   - Sleek cyber-forge hammer SVG with neon energy cell and titanium finish.
   - **Precision Hit Calibration:** The striking face of the hammer aligns directly with the pointer coordinates.
   - **Anticipation Pose:** When hovering over interactive elements (buttons, cards, links, inputs), the hammer cocks back to -40° and pulses with neon charge.
   - **Hammer Smash & Physics:** When clicking, the hammer strikes forward with momentum, creating:
     - 12+ randomized glowing neon/gold sparks with physical velocity and gravity.
     - Expanding shockwave rings at the point of impact.
     - Lens flare flash at the hammer head.
     - Moving trail motes during swift sweeps.
   - **Card & Component Jolt:** Elements jolt under the impact of the hammer.
   - **Sound Synthesizer (`soundEffects.js`):** Built-in procedural Web Audio API synthesizer for crisp anvil clinks and crystalline shatter sounds (no external audio files required, toggleable via header button).
   - **Responsive & Accessible:** Automatically falls back to standard cursor on touch devices and respects `prefers-reduced-motion`.

2. **The System Forge Interactive (`HammerForgeInteractive.jsx`):**
   - Allows users to smash 5 legacy business bottlenecks:
     - *Manual Paper & Excel Billing* ➔ **Optical Manager Active**
     - *Disorganized WhatsApp Messaging* ➔ **Broadcast Manager Online**
     - *Passive CCTV Video Feeds* ➔ **Surveillance AI Deployed**
     - *Fragmented Internal Operations* ➔ **Operations Suite Synced**
     - *Rigid Off-the-Shelf SaaS* ➔ **Custom Engine Built**
   - Real-time progress meter tracking smashed bottlenecks.

3. **Accessible Form (`ContactForm.jsx`):**
   - Follows modern web guidance with visible labels, standard autocomplete attributes, `max(1rem, 1em)` input sizing to prevent iOS zoom, touch-friendly 48px tap targets, blur-time validation, and clipboard export.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```
