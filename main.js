// ─── Reveal on Scroll ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ─── Side Dots Active State ───
const sections = document.querySelectorAll('section[id], footer[id]');
const dots = document.querySelectorAll('.side-dots .dot');

function updateDots() {
  const scrollY = window.scrollY + window.innerHeight / 3;
  let current = '';
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop) {
      current = section.id;
    }
  });
  dots.forEach((dot) => {
    dot.classList.toggle('active', dot.dataset.section === current);
  });
}
window.addEventListener('scroll', updateDots, { passive: true });
updateDots();

// ─── Particles ───
function createParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = Math.random() * 20 + 15;
    const delay = Math.random() * -20;
    const opacity = Math.random() * 0.3 + 0.1;
    Object.assign(p.style, {
      position: 'absolute',
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: `rgba(129, 140, 248, ${opacity})`,
      left: x + '%',
      top: y + '%',
      animation: `particleDrift ${dur}s ${delay}s ease-in-out infinite alternate`,
      pointerEvents: 'none',
    });
    container.appendChild(p);
  }
}

// Add particle keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes particleDrift {
    0%   { transform: translate(0, 0) scale(1); opacity: 0.3; }
    25%  { transform: translate(${rand()}px, ${rand()}px) scale(1.2); opacity: 0.6; }
    50%  { transform: translate(${rand()}px, ${rand()}px) scale(0.8); opacity: 0.2; }
    75%  { transform: translate(${rand()}px, ${rand()}px) scale(1.1); opacity: 0.5; }
    100% { transform: translate(${rand()}px, ${rand()}px) scale(1); opacity: 0.3; }
  }
`;
function rand() { return Math.round((Math.random() - 0.5) * 100); }
document.head.appendChild(style);
createParticles();

// ─── Nav Scroll Effect ───
const topnav = document.querySelector('.topnav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 100) {
    topnav.style.background = 'rgba(6, 8, 15, 0.9)';
  } else {
    topnav.style.background = 'rgba(6, 8, 15, 0.7)';
  }
  lastScroll = y;
}, { passive: true });
