// Typewriter effect for hero role line
(function () {
  const el = document.getElementById('typewriter');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const text = 'Signal Support Systems Specialist · Cybersecurity Student';

  if (prefersReduced) {
    el.textContent = text;
    return;
  }

  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 32);
    }
  }
  type();
})();

// Draw the signal spine as a gentle wandering line down the page,
// with slight jitter at each section checkpoint to suggest a live trace.
(function () {
  const svg = document.getElementById('signalSpine');
  const path = document.getElementById('signalPath');

  function draw() {
    const height = document.body.scrollHeight;
    svg.setAttribute('viewBox', `0 0 40 ${height}`);
    svg.setAttribute('height', height);

    // Sample a gently wandering curve down the page using sine jitter
    const steps = Math.max(8, Math.floor(height / 120));
    let d = `M 20 0`;
    for (let s = 1; s <= steps; s++) {
      const y = (height / steps) * s;
      const x = 20 + Math.sin(s * 1.3) * 6;
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }

    path.setAttribute('d', d);
  }

  window.addEventListener('load', draw);
  window.addEventListener('resize', draw);
  // Redraw after fonts/layout settle
  setTimeout(draw, 300);
})();
