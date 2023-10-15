// JavaScript code for carousel functionality
let currentIndex = 0;
const featureCards = document.querySelectorAll('.feature-card');
const dotsContainer = document.querySelector('.dot-indicators');
const images = [
    'https://source.unsplash.com/random/800x600',
    'https://source.unsplash.com/random/800x601',
    'https://source.unsplash.com/random/800x602',
    'https://source.unsplash.com/random/800x603',
    'https://source.unsplash.com/random/800x604',
    'https://source.unsplash.com/random/800x601',
    
];

function showCard(index) {
    featureCards.forEach(card => card.style.display = 'none');
    featureCards[index].style.display = 'block';
    featureCards[index].querySelector('.feature-image').src = images[index];
}

function createDots() {
    featureCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            showCard(currentIndex);
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % featureCards.length;
    showCard(currentIndex);
    updateDots();
}

createDots(); // Create dot indicators dynamically
featureCards[0].style.display = 'block'; // Show the first card initially
setInterval(nextCard, 3000);


// JavaScript code for responsive navigation bar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// JavaScript code for form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const contactNumber = formData.get('contactNumber');
  const email = formData.get('email');
  const message = formData.get('message');

  // Handle form data (you can send it to a server using fetch API)
  console.log('Name:', name);
  console.log('Contact Number:', contactNumber);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form after submission if needed
  contactForm.reset();
});

// JavaScript code for smooth scroll to sections
const navbarLinks = document.querySelectorAll('.nav-links a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    menuToggle.click(); // Close the mobile menu after clicking a link
  });
});
