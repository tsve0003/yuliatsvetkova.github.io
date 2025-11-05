document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.mobile-logo-toggle .image-button');
  const form = document.querySelector('.form');
  const formFr = document.querySelector('.form-fr');
  const formConf = document.querySelector('.form-conf');
  const breadcrumb = document.querySelector('.breadcrumb-nav');
  const subscribeImg = document.querySelector('.subscribe_img');
  const mobileMenu = document.querySelector('.mobile-menu');
  const privacyBtn = document.querySelector('.privacy-btn');

  // Check if essential elements exist
  if (!toggleButton || !mobileMenu) {
    console.error("Essential elements are missing.");
    return;
  }

  toggleButton.addEventListener('click', function () {
      const lang = document.documentElement.lang || 'en'; // Default to English
      const menuIsActive = mobileMenu.classList.toggle('active');

      // Update button text based on menu state and language
      if (menuIsActive) {
        toggleButton.textContent = (lang === 'fr') ? 'Fermer X' : 'Close X';
        toggleButton.style.backgroundColor = '#F9B85D'; // Change to yellow when active
        toggleButton.style.color = 'black';
      } else {
        toggleButton.innerHTML = 'Menu <i class="fa-solid fa-bars"></i>';
        toggleButton.style.backgroundColor = '#26445F'; // Blue when menu closed
        toggleButton.style.color = 'white'; // White text on blue
      }
    

    // Toggle visibility of other elements
    if (form) form.classList.toggle('active', menuIsActive);
    if (formFr) formFr.classList.toggle('active', menuIsActive);
    if (breadcrumb) breadcrumb.classList.toggle('active', menuIsActive);
    if (subscribeImg) subscribeImg.classList.toggle('active', menuIsActive);
    if (privacyBtn) privacyBtn.classList.toggle('active', menuIsActive);

    // Hide form-conf when menu is active
    if (formConf) {
      formConf.style.display = menuIsActive ? 'none' : 'block';
    }
  });
});
