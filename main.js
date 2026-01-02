// === Smooth Scroll for Navigation ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Active Link Highlight ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// === Floating Telegram Button ===
const telegramButton = document.createElement("a");
telegramButton.href = "https://t.me/NextGenTVV";
telegramButton.target = "_blank";
telegramButton.classList.add("floating-telegram");
telegramButton.innerHTML = "💬";
document.body.appendChild(telegramButton);

// === Scroll Reveal Animation ===
const revealElements = document.querySelectorAll(".price-card, .review-card, .channel-icons span");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) el.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
