(() => {
  const progress = document.getElementById('scrollProgress');
  const year = document.getElementById('year');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (year) year.textContent = new Date().getFullYear();

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Kokonut-inspired spotlight and subtle pointer tilt. Disabled for touch and reduced-motion users.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (finePointer && !reducedMotion) {
    document.querySelectorAll('.spotlight-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        if (card.hasAttribute('data-tilt')) {
          const rx = ((y / rect.height) - .5) * -2.6;
          const ry = ((x / rect.width) - .5) * 2.6;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
        }
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('pointermove', event => {
        const rect = el.getBoundingClientRect();
        const dx = (event.clientX - rect.left - rect.width / 2) * .08;
        const dy = (event.clientY - rect.top - rect.height / 2) * .12;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const brief = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Interested in: ${data.get('service')}`,
      `Project: ${data.get('message') || 'Not provided'}`
    ].join('\n');
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(brief).then(() => {
        feedback.textContent = 'Your enquiry details have been copied. Add your email / WhatsApp contact route to receive submissions when the site goes live.';
        feedback.classList.add('success');
      }).catch(() => {
        feedback.textContent = 'Your details are ready in this demo, but the form needs an email or backend endpoint before it can be sent.';
      });
    } else {
      feedback.textContent = 'Your details are ready in this demo, but the form needs an email or backend endpoint before it can be sent.';
    }
  });
})();
