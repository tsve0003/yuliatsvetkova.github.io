// Fade-in animation and interactive click
document.addEventListener("DOMContentLoaded", () => {
  const countries = document.querySelectorAll(".country");

  countries.forEach((card, i) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 0.8s ease";
      card.style.opacity = "1";
    }, i * 150);
  });

  countries.forEach(card => {
    card.addEventListener("click", () => {
      alert(`Opening ${card.querySelector('h2').innerText} Dashboard`);
    });
  });
});
