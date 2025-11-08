// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Offer form (fake submit + basic validation)
const form = document.getElementById('offer-form');
const feedback = document.getElementById('form-feedback');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Simulate submission
    feedback.hidden = false;
    form.reset();
    window.scrollTo({top: feedback.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth'});
  });
}
