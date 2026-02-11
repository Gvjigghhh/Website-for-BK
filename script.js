const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const joinForm = document.querySelector('.join-form');
const formMessage = document.querySelector('.form-message');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (joinForm && formMessage) {
  joinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = joinForm.querySelector('input[type="email"]');

    if (!emailInput?.value) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    formMessage.textContent = `Welcome to BloodKnights, ${emailInput.value}!`;
    joinForm.reset();
  });
}
