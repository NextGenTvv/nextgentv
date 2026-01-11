const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

document.querySelectorAll('.btn-click').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);
  });
});
