/* toggle navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Scroll */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  /* Sticky Navbar */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /* remove toggle icon and navbar when clicking a link in navabr */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

 /* Scroll Reveal */

 ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* Send message redirection */

// Show blog drop down function
const card = document.querySelector('.card');
const dropdownIcon = card.querySelector('.dropdown-icon');
const cardContent = card.querySelector('.card-content');

dropdownIcon.addEventListener('click', function() {
  if (cardContent.style.display === 'none') {
    cardContent.style.display = 'block';
    card.style.height = card.scrollHeight + 'px';
    dropdownIcon.textContent = 'remove'; // Change the icon to a dash (or any other desired icon)
  } else {
    cardContent.style.display = 'none';
    card.style.height = 'auto';
    dropdownIcon.textContent = 'arrow_drop_down_circle'; // Change the icon back to the original icon
  }
});
