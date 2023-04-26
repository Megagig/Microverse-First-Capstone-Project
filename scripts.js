// Select the hamburger icon and the navigation menu element from the DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

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

// CREATING FEATURED SPEAKER SECTION DYNAMICALLY
// Select the speakers element using the class name
const speakers = document.querySelector('.guest-speakers');

// Define an array of speaker details
const speakersDetails = [
  {
    id: 1,
    name: 'Pharm. Folashade Lawal',
    title: 'CEO, Victory Drugs Limited.',
    speakerImg: 'images/Folashade-lawal.png',
    about:
      'Pharm. Folash Lawal is the CEO of Victory Drugs Limited. A leading community Pharmacy in FESTAC Town, Lagos',
  },
  {
    id: 2,
    name: 'Dr. Peter Bamkole',
    title: 'Physician, Hilton-Top Hospital Ikoyi, Lagos.',
    speakerImg: 'images/Dr-Peter-Bamkole.jpg',
    about:
      'Peter Bamkole, pioneered the Enterprise Development Centre (EDC) of the Pan-Atlantic University in January 2003, now one of the top enterprise development centers in Africa.',
  },
  {
    id: 3,
    name: 'Pharm. Bisi Bright',
    title: 'Consultant Clinical Pharmacist and Public Health Manager.',
    speakerImg: 'images/Pharm.-Bisi-Bright.jpeg',
    about:
      'Pharm. (Dr) Mrs. Bisi Bright is a Consultant Clinical Pharmacist and Public Health Manager. A fellow of both the Pharmaceutical Society of Nigeria and the West African Postgraduate College of Pharmacists (WAPCP), she also holds a Masters’ in Public Health.',
  },
  {
    id: 4,
    name: 'Chidi Okoro',
    title: 'Executive Consultant of Drug and Medicines.',
    speakerImg: 'images/Pharm.-Chidi-Okoro.jpeg',
    about:
      'Chidi Okoro teaches Strategy at Lagos Business School. He is currently the Founder/Executive Consultant of Drugs and Medicaments Nigeria Limited, a retail chain/own brands dealer in the Pharmaceutical sector.',
  },
  {
    id: 5,
    name: 'Abimbola Adebakin',
    title: 'CEO, Advantage Health Africa',
    speakerImg: 'images/Abimbola-Adebakin.jpg',
    about:
      'Abimbola is the Chief Executive Officer of Advantage Health Africa, an aggregator in the retail pharmacy space.',
  },
  {
    id: 6,
    name: 'Adedotun Sulaiman',
    title: 'Veteran Sports Journalist',
    speakerImg: 'images/Adedotun-Sulaiman.jpg',
    about:
      'Mr. Adedotun Sulaiman, MFR is a veteran Management and Strategy consultant, with over 25 years’ experience. He has been the head of 15 different companies and is the Executive Chairman of Arian Capital Limited.',
  },
];

// Define a function to generate a random speaker from the array
function randomSpeaker() {
  // Use the map function to create a new array of speaker details HTML elements
  const speakerDetailsHTML = speakersDetails.map(
    (speaker) => `
      <div class="speakers-details">
        <img src="${speaker.speakerImg}" alt="Speaker Image" />
        <div class="details">
          <h4>${speaker.name}</h4>
          <p class="title">${speaker.title}</p>
          <hr />
          <p class="position">${speaker.about}</p>
        </div>
      </div>
    `
  );

  // Use the join function to concatenate the array of HTML elements into a string
  const speakersHTML = speakerDetailsHTML.join('');

  // Set the innerHTML of the speakers element to the generated HTML string
  speakers.innerHTML = speakersHTML;
}

// Call the randomSpeaker function to generate a random speaker on page load
document.addEventListener('load', randomSpeaker());
// randomSpeaker();
