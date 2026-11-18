// Web Audio API procedural sound effects synthesizer
// No external audio files required - zero latency and light footprint

let audioCtx = null;
let soundEnabled = false;

export const isSoundEnabled = () => soundEnabled;

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
  if (soundEnabled && !audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    } catch {
      // Audio not supported or blocked
    }
  }
  if (soundEnabled && audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return soundEnabled;
};

// Metallic hammer clink / anvil strike
export const playHammerStrike = (pitch = 1, volume = 0.25) => {
  if (!soundEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;

    // Metallic ping oscillator (high frequency chime)
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1400 * pitch, now);
    osc1.frequency.exponentialRampToValueAtTime(800 * pitch, now + 0.12);
    gain1.gain.setValueAtTime(volume * 0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    // Impact punch oscillator (low thump)
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(160 * pitch, now);
    osc2.frequency.exponentialRampToValueAtTime(40, now + 0.08);
    gain2.gain.setValueAtTime(volume * 0.7, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    // Connect nodes
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.16);
    osc2.stop(now + 0.12);
  } catch {
    // Ignore audio errors
  }
};

// Power shatter / Forge smash sound
export const playForgeShatter = () => {
  if (!soundEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;

    // First heavy impact
    playHammerStrike(0.85, 0.4);

    // Digital crystalline sparkle
    [1040, 1320, 1580, 2090].forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const start = now + 0.04 * idx;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.12, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + 0.28);
    });
  } catch {
    // Ignore
  }
};
