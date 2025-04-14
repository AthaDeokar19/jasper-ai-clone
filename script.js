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
    }
  });
});

// Button Click Alerts
document.querySelectorAll('.plan-btn, .post-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked!');
  });
const demoBtn = document.querySelector('.demo-btn');
if (demoBtn) {
  demoBtn.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal">
        <iframe width="560" height="315" src="https://youtube.com/embed/jasper-demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button class="close-modal">✕</button>
      </div>
    `;
    modal.classList.add('modal-container');
    document.body.appendChild(modal);
  });
}
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
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  try {
    heroVideo.play().catch(e => {
      console.log("Autoplay blocked - showing fallback");
      const fallbackImage = document.querySelector('.fallback-image');
      if (fallbackImage) {
        fallbackImage.style.display = 'block';
      }
const billingToggle = document.getElementById('billing-toggle');
const monthlyPrices = [49, 99, 'Custom'];
const annualPrices = [490, 990, 'Custom'];

if (billingToggle) {
  billingToggle.addEventListener('change', function() {
    const prices = this.checked ? annualPrices : monthlyPrices;
    document.querySelectorAll('.plan').forEach((plan, index) => {
      const priceElement = plan.querySelector('.price');
      if (priceElement) {
        priceElement.textContent = prices[index] === 'Custom' ? 'Custom' : `$${prices[index]}/${this.checked ? 'year' : 'month'}`;
      }
    });
  });
}
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
document.querySelector('.secondary-btn.demo-btn')?.addEventListener('click', function() {
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
  `;

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      max-width: 80%;
      max-height: 80%;
      overflow: auto;
  `;

  // Create iframe for YouTube video
  const iframe = document.createElement('iframe');
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/your-demo-video-id"; // Replace with your YouTube video ID
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.textContent = "Close";
  closeButton.style.cssText = `
      margin-top: 10px;
      padding: 8px 12px;
      cursor: pointer;
  `;
  closeButton.addEventListener('click', function() {
      modalOverlay.remove();
  });

  // Assemble modal
  modalContent.appendChild(iframe);
  modalContent.appendChild(closeButton);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);
});
document.getElementById('feedback-form')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const feedbackMessage = document.getElementById('feedback-message');

  feedbackMessage.textContent = `Thank you, ${name}, for your feedback: "${comment}"`;
  document.getElementById('feedback-form').reset(); // Clear the form
});
document.getElementById('billing-toggle')?.addEventListener('change', function() {
  const isAnnual = this.checked;
  const planElements = document.querySelectorAll('.plan');

  planElements.forEach(plan => {
      const priceElement = plan.querySelector('.price');
      const monthlyPrice = priceElement.dataset.monthly;
      const annualPrice = priceElement.dataset.annual;

      if (isAnnual) {
          priceElement.textContent = annualPrice === 'Custom' ? 'Custom' : `$${annualPrice}/year`;
      } else {
          priceElement.textContent = monthlyPrice === 'Custom' ? 'Custom' : `$${monthlyPrice}/month`;
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const chatWidget = document.querySelector('.chat-widget');
  const chatIcon = document.querySelector('.chat-icon');
  const chatBox = document.querySelector('.chat-box');
  const closeChat = document.querySelector('.close-chat');
  const chatInput = document.querySelector('.chat-input input');
  const chatMessages = document.querySelector('.chat-messages');
  const sendButton = document.querySelector('.chat-input button');
  const chatHeader = document.querySelector('.chat-header');

  // Toggle Chat Box
  chatIcon.addEventListener('click', function() {
      chatBox.classList.toggle('active');
  });

  closeChat.addEventListener('click', function(event) {
      event.stopPropagation();
      chatBox.classList.remove('active');
  });

  // Send Message
  sendButton.addEventListener('click', function() {
      const messageText = chatInput.value.trim();
      if (messageText !== '') {
          // User Message
          const userMessageDiv = document.createElement('div');
          userMessageDiv.classList.add('message', 'user');
          userMessageDiv.innerHTML = `<p>${messageText}</p>`;
          chatMessages.appendChild(userMessageDiv);

          // Basic Bot Response (You can replace this with actual AI integration)
          setTimeout(function() {
              const botMessage = getBotResponse(messageText);
              const botMessageDiv = document.createElement('div');
              botMessageDiv.classList.add('message', 'bot');
              botMessageDiv.innerHTML = `<p>${botMessage}</p>`;
              chatMessages.appendChild(botMessageDiv);
              chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
          }, 500);

          chatInput.value = ''; // Clear input
          chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
      }
  });

  chatInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          sendButton.click();
          event.preventDefault(); // Prevent form submission on Enter key
      }
  });

  // Basic Bot Response Function
  function getBotResponse(userMessage) {
      userMessage = userMessage.toLowerCase();
      if (userMessage.includes('pricing')) {
          return "Our pricing plans start at $49/month. Check out our pricing page for more details!";
      } else if (userMessage.includes('features')) {
          return "We offer a range of features including AI content generation, templates, and more!";
      } else {
          return "Thanks for your message! We'll get back to you soon.";
      }
  }

   // Make chat box draggable
  let isDragging = false;
  let offsetX, offsetY;

  chatHeader.addEventListener('mousedown', function(event) {
      isDragging = true;
      offsetX = event.clientX - chatBox.offsetLeft;
      offsetY = event.clientY - chatBox.offsetTop;
      chatBox.style.cursor = 'grabbing';
  });

  document.addEventListener('mouseup', function() {
      isDragging = false;
      chatBox.style.cursor = 'grab';
  });

  document.addEventListener('mousemove', function(event) {
      if (!isDragging) return;

      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;

      // Keep chat box within viewport
      const maxX = window.innerWidth - chatBox.offsetWidth;
      const maxY = window.innerHeight - chatBox.offsetHeight;
       x = Math.min(Math.max(0, x), maxX);
       y = Math.min(Math.max(0, y), maxY);

      chatBox.style.left = x + 'px';
      chatBox.style.top = y + 'px';
  });

  // Prevent text selection while dragging
  chatHeader.addEventListener('selectstart', function(e) {
      e.preventDefault();
  });
});
