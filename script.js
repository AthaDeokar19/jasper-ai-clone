const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelectorAll('.plan-btn, .post-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked!');
  });
});
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
// Login form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Logged in with ${email}`);
});
const loginForm = document.querySelector('form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Logged in with ${email}`);
  });
}
  messageDiv.textContent = `Thank you, ${name}, for your feedback: "${comment}"`;
  document.getElementById('feedback-form').reset();
});
document.querySelector('.hero-btn').addEventListener('click', () => {
  alert('Get Started clicked! Redirect to pricing soon.');
});
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const messageDiv = document.getElementById('feedback-message');
    if (messageDiv) {
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    alert('Get Started clicked! Redirect to pricing soon.');
  });
}
  });
}

document.querySelector('.carousel-prev').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
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
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      const emailError = document.getElementById('email-error');
      if (emailError) {
        emailError.textContent = 'Valid email required';
      }
      return;
    }
    // Proceed with login
  });
}
// Force video play and handle failures
const heroVideo = document.querySelector('.hero-video');

try {
  heroVideo.play().catch(e => {
    console.log("Autoplay blocked - showing fallback");
    document.querySelector('.fallback-image').style.display = 'block';
  });
} catch (e) {
  console.error("Video error:", e);
}