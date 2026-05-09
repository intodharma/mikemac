/* =============================================
   I AM with Gary Cardone — JavaScript
   ============================================= */

const QUOTES = [
  "The mind is the most powerful asset you will ever own.",
  "You don't rise to your goals, you fall to your systems.",
  "Freedom is not given. It is built — one decision at a time.",
  "Your environment is either building you or breaking you.",
  "The biggest risk is not taking any risk at all.",
  "Bitcoin isn't just money. It's a philosophy of freedom.",
];

let currentQuote = 0;

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Light / Dark mode toggle ── */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '🌙' : '☀';
});

/* ── Countdown timer to next Sunday 10:30 AM ET ── */
function getNextSunday() {
  const now = new Date();
  const et  = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const day = et.getDay(); // 0 = Sunday
  const daysUntil = day === 0 ? 7 : 7 - day;
  const next = new Date(et);
  next.setDate(et.getDate() + daysUntil);
  next.setHours(10, 30, 0, 0);
  return next;
}

function updateCountdown() {
  const target = getNextSunday();
  const now    = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const diff   = target - now;

  if (diff <= 0) return;

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const pad = n => String(n).padStart(2, '0');
  document.getElementById('days').textContent    = pad(days);
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ── Quote carousel (hero bar) ── */
const heroQuoteText = document.getElementById('heroQuoteText');
const heroDots      = document.querySelectorAll('.hero-quote-bar .dot');

function setHeroQuote(idx) {
  heroQuoteText.style.opacity = '0';
  setTimeout(() => {
    heroQuoteText.textContent = QUOTES[idx];
    heroQuoteText.style.opacity = '1';
  }, 300);
  heroDots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

heroQuoteText.style.transition = 'opacity 0.3s';

let heroQuoteIdx = 0;
setInterval(() => {
  heroQuoteIdx = (heroQuoteIdx + 1) % QUOTES.length;
  setHeroQuote(heroQuoteIdx);
}, 5000);

heroDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    heroQuoteIdx = i;
    setHeroQuote(i);
  });
});

/* ── Main quote section ── */
const mainQuoteEl   = document.getElementById('mainQuote');
const quoteDots     = document.querySelectorAll('.quote-dots-row .dot');
const nextQuoteBtn  = document.getElementById('nextQuoteBtn');

function setMainQuote(idx) {
  mainQuoteEl.style.opacity = '0';
  mainQuoteEl.style.transform = 'translateY(10px)';
  setTimeout(() => {
    mainQuoteEl.textContent = QUOTES[idx];
    mainQuoteEl.style.opacity = '1';
    mainQuoteEl.style.transform = 'translateY(0)';
  }, 300);
  quoteDots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

mainQuoteEl.style.transition = 'opacity 0.3s, transform 0.3s';

nextQuoteBtn.addEventListener('click', () => {
  currentQuote = (currentQuote + 1) % QUOTES.length;
  setMainQuote(currentQuote);
});

quoteDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentQuote = i;
    setMainQuote(i);
  });
});

/* Share on X */
document.querySelector('.btn-share').addEventListener('click', () => {
  const text = encodeURIComponent(`"${QUOTES[currentQuote]}" — Gary Cardone`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
});

/* ── Session carousel button ── */
document.querySelector('.carousel-next')?.addEventListener('click', () => {
  const grid = document.querySelector('.sessions-grid');
  grid.scrollBy({ left: 300, behavior: 'smooth' });
});

/* ── Smooth reveal on scroll ── */
const revealTargets = document.querySelectorAll(
  '.session-card, .writing-card, .pillar, .painting-item, .achievement'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

/* ── Journal form ── */
document.querySelector('.journal-form')?.addEventListener('submit', e => e.preventDefault());
document.querySelector('.journal-input')?.closest('div')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') e.preventDefault();
});

document.querySelector('.btn-journal')?.addEventListener('click', () => {
  const input = document.querySelector('.journal-input');
  if (!input.value || !input.value.includes('@')) {
    input.style.borderColor = '#c0392b';
    setTimeout(() => (input.style.borderColor = ''), 2000);
    return;
  }
  input.value = '';
  const btn = document.querySelector('.btn-journal');
  btn.textContent = 'THANK YOU!';
  setTimeout(() => (btn.textContent = 'GET THE JOURNAL'), 3000);
});

/* ── Ask Gary form ── */
document.querySelector('.ask-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'QUESTION SUBMITTED!';
  btn.style.background = '#2a6a2a';
  setTimeout(() => {
    btn.textContent = 'SUBMIT YOUR QUESTION';
    btn.style.background = '';
    e.target.reset();
  }, 4000);
});
