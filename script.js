// Menu Toggle Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active'); // Close mobile menu
    }
  });
});

// Button Click Alerts
document.querySelectorAll('.plan-btn, .post-btn, .hero-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked! Redirecting to signup soon.');
  });
});

// Demo Modal
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

  document.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
  });
});

// Login Form Submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
      alert(`Logged in with ${email}. Redirecting to dashboard soon.`);
      loginForm.reset();
    } else {
      alert('Please fill all fields!');
    }
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

if (carouselNext && carouselPrev) {
  carouselNext.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
  carouselPrev.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}

// Auto-rotate Testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000);

// Chat Widget Toggle
const chatIcon = document.querySelector('.chat-icon');
const chatBox = document.querySelector('.chat-box');
const closeChat = document.querySelector('.close-chat');
const chatInput = document.querySelector('.chat-input input');
const chatMessages = document.querySelector('.chat-messages');
const sendButton = document.querySelector('.chat-input button');

if (chatIcon && chatBox && closeChat && chatInput && chatMessages && sendButton) {
  chatIcon.addEventListener('click', () => {
    chatBox.classList.toggle('active');
  });

  closeChat.addEventListener('click', (e) => {
    e.stopPropagation();
    chatBox.classList.remove('active');
  });

  sendButton.addEventListener('click', () => {
    const messageText = chatInput.value.trim();
    if (messageText) {
      const userMessage = document.createElement('div');
      userMessage.classList.add('message', 'user');
      userMessage.textContent = messageText;
      chatMessages.appendChild(userMessage);

      setTimeout(() => {
        const botMessage = getBotResponse(messageText);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot');
        botMessageDiv.textContent = botMessage;
        chatMessages.appendChild(botMessageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);

      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
      e.preventDefault();
    }
  });
}

function getBotResponse(message) {
  message = message.toLowerCase();
  if (message.includes('pricing')) return "Our pricing plans start at $49/month. Visit our pricing page!";
  if (message.includes('features')) return "We offer AI content generation, templates, and more!";
  return "Thanks for your message! How else can I assist?";
}

// Make Chat Box Draggable
const chatHeader = document.querySelector('.chat-header');
if (chatHeader) {
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;

  chatHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - currentX;
    initialY = e.clientY - currentY;
    chatBox.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      const maxX = window.innerWidth - chatBox.offsetWidth;
      const maxY = window.innerHeight - chatBox.offsetHeight;
      currentX = Math.max(0, Math.min(maxX, currentX));
      currentY = Math.max(0, Math.min(maxY, currentY));
      chatBox.style.left = currentX + 'px';
      chatBox.style.top = currentY + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    chatBox.style.cursor = 'grab';
  });

  chatHeader.addEventListener('selectstart', (e) => {
    e.preventDefault();
  });
}

// Billing Toggle
const billingToggle = document.getElementById('billing-toggle');
if (billingToggle) {
  billingToggle.addEventListener('change', () => {
    const isAnnual = billingToggle.checked;
    const prices = document.querySelectorAll('.price');
    prices.forEach((price, index) => {
      const monthly = parseInt(price.dataset.monthly) || 'Custom';
      const annual = parseInt(price.dataset.annual) || 'Custom';
      price.textContent = isAnnual ? (annual === 'Custom' ? 'Custom' : `$${annual}/year`) : (monthly === 'Custom' ? 'Custom' : `$${monthly}/month`);
    });
  });
}
