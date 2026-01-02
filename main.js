// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
    }
  });
});

// Animated multicolor background hue shift
let hue = 0;
setInterval(() => {
  hue = (hue + 0.4) % 360;
  document.body.style.background = `linear-gradient(135deg, hsl(${hue},60%,10%), hsl(${(hue+60)%360},60%,8%), hsl(${(hue+120)%360},60%,12%))`;
  document.body.style.backgroundSize = "400% 400%";
}, 100);

// Floating language toggle 🇬🇧 / 🇭🇷
const langBtn = document.createElement('button');
langBtn.classList.add('lang-btn');
langBtn.innerHTML = '<img src="https://flagcdn.com/w40/gb.png" alt="EN">';
document.body.appendChild(langBtn);

let lang = 'en';
langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'hr' : 'en';
  langBtn.innerHTML = lang === 'en'
    ? '<img src="https://flagcdn.com/w40/gb.png" alt="EN">'
    : '<img src="https://flagcdn.com/w40/hr.png" alt="HR">';

  if (lang === 'hr') {
    document.querySelector('#home h1').textContent = 'NextGenTv — Budućnost Streaminga';
    document.querySelector('#home p').textContent = 'Uživajte u premium IPTV usluzi s HD i 4K kvalitetom, Ex-Yu i EU kanalima.';
    document.querySelector('#pricing h2').textContent = 'Cijene';
    document.querySelector('#channels h2').textContent = 'Naši Kanali';
    document.querySelector('#app h2').textContent = 'NextGenTv Android Aplikacija';
    document.querySelector('#contact h2').textContent = 'Kontakt';
  } else {
    document.querySelector('#home h1').textContent = 'NextGenTv — The Future of Streaming';
    document.querySelector('#home p').textContent = 'Enjoy premium IPTV service with HD & 4K quality, Ex-Yu and EU channels, and instant activation.';
    document.querySelector('#pricing h2').textContent = 'Pricing';
    document.querySelector('#channels h2').textContent = 'Our Channels';
    document.querySelector('#app h2').textContent = 'NextGenTv Android App';
    document.querySelector('#contact h2').textContent = 'Contact Us';
  }
});
