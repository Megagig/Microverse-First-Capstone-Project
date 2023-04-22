// Select the hamburger icon and the navigation menu element from the DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Define the mobileMenu() that toggles the 'active' class on the hamburger icon and the nav menu
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll'); // add or remove the 'no-scroll' class to the body element
}

// Add a click event listener to the hamburger icon that triggers the mobileMenu function
hamburger.addEventListener('click', mobileMenu);

// Define the closeMenu() that removes the 'active' class from the hamburger icon and the nav menu
function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll'); // remove the 'no-scroll' class from the body element
}

// Select all the nav links and add a click event to each one that triggers the closeMenu function
navLink.forEach((n) => n.addEventListener('click', closeMenu));
