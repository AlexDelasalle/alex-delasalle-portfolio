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

// Show more/show less function
function showContent(cardId) {
  var previewContent = document.getElementById(cardId + '-preview');
  var fullContent = document.getElementById(cardId + '-content');
  var showMoreBtn = document.getElementById(cardId + '-show-more');
  var showLessBtn = document.getElementById(cardId + '-show-less');

  previewContent.style.display = 'none';
  fullContent.style.display = 'block';
  showMoreBtn.style.display = 'none';
  showLessBtn.style.display = 'inline';
}

function hideContent(cardId) {
  var previewContent = document.getElementById(cardId + '-preview');
  var fullContent = document.getElementById(cardId + '-content');
  var showMoreBtn = document.getElementById(cardId + '-show-more');
  var showLessBtn = document.getElementById(cardId + '-show-less');

  previewContent.style.display = 'block';
  fullContent.style.display = 'none';
  showMoreBtn.style.display = 'inline';
  showLessBtn.style.display = 'none';
}

// Show the "Show more" button initially and hide the "Show less" button and full content
document.querySelectorAll('.card').forEach(function(card) {
  var preview = card.querySelector('.preview-content');
  var content = card.querySelector('.card-content');
  var showMoreBtn = card.querySelector('.show-more');
  var showLessBtn = card.querySelector('.show-less');

  showMoreBtn.style.display = 'inline';
  showLessBtn.style.display = 'none';
  content.style.display = 'none';

  // Check if the preview content exceeds the maximum height
  if (preview.scrollHeight > preview.clientHeight) {
    showMoreBtn.style.display = 'inline';
  }
});
