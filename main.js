// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Language switcher
function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
  document.querySelector('#en-btn').classList.toggle('active', lang === 'en');
  document.querySelector('#hr-btn').classList.toggle('active', lang === 'hr');
}
