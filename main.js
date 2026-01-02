// NextGenTV Main JavaScript File

// Confirm website loaded
console.log("✅ NextGenTV website loaded successfully!");

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Optional message in console
console.log("💡 Follow us on Telegram: https://t.me/NextGenTVV");
