// Menu Toggle Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Button Click Alerts
document.querySelectorAll('.plan-btn, .post-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked!');
  });
});

// Demo Button Modal
document.querySelector('.demo-btn')?.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal">
      <iframe width="560" height="315" src="https://youtube.com/embed/jasper-demo"></iframe>
      <button class="close-modal">✕</button>
    </div>
  `;
  document.body.appendChild(modal);
});

// Close Modal
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-modal')) {
    e.target.parentElement.remove();
  }
});

// Login Form Submission
const loginForm = document.querySelector('form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Logged in with ${email}`);
  });
}

// Feedback Form Submission
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const messageDiv = document.getElementById('feedback-message');
    if (messageDiv) {
      messageDiv.textContent = `Thank you, ${name}, for your feedback: "${comment}"`;
      feedbackForm.reset();
    }
  });
}

// Hero Button Click
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    alert('Get Started clicked! Redirect to pricing soon.');
  });
}

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

const carouselNext = document.querySelector('.carousel-next');
const carouselPrev = document.querySelector('.carousel-prev');

if (carouselNext) {
  carouselNext.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}

if (carouselPrev) {
  carouselPrev.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}

// Auto-rotate Testimonials
setInterval(() => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}, 5000);

// Chat Widget Toggle
const chatHeader = document.querySelector('.chat-header');
if (chatHeader) {
  chatHeader.addEventListener('click', () => {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.classList.toggle('active');
    }
  });
}

// Hero Video Autoplay Fallback
const heroVideo = document.querySelector('.hero-video');
try {
  heroVideo.play().catch(e => {
    console.log("Autoplay blocked - showing fallback");
    document.querySelector('.fallback-image').style.display = 'block';
  });
} catch (e) {
  console.error("Video error:", e);
}
const billingToggle = document.getElementById('billing-toggle');
const monthlyPrices = [49, 99, 'Custom'];
const annualPrices = [490, 990, 'Custom'];

billingToggle.addEventListener('change', function() {
  const prices = this.checked ? annualPrices : monthlyPrices;
  document.querySelectorAll('.plan').forEach((plan, index) => {
    plan.querySelector('.price').textContent = prices[index] === 'Custom' ? 'Custom' : `$${prices[index]}/year`;
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelector('.demo-btn')?.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DDRHVVuP_0w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button class="close-modal">✕</button>
    </div>
  `;
  modal.classList.add('modal-container');
  document.body.appendChild(modal);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-modal')) {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
      modalContainer.remove();
    }
  }
});
