const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');


// ================= MENU MOBILE =================

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);

});

// ================= FECHAR MENU AO CLICAR =================

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');

  });
});