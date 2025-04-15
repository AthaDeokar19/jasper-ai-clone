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

// Demo Modal
document.querySelector('.demo-btn')?.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DDRHVVuP_0w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <button class="close-modal">✕</button>
    </div>
  `;
  modal.classList.add('modal-container');
  document.body.appendChild(modal);

  document.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
  });
});

// Login Modal
document.querySelectorAll('a[href="login.html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-content">
          <form id="login-modal-form">
            <label for="modal-email">Email:</label><br>
            <input type="email" id="modal-email" name="modal-email" required><br><br>
            <label for="modal-password">Password:</label><br>
            <input type="password" id="modal-password" name="modal-password" required><br><br>
            <input type="checkbox" id="modal-rememberMe" name="modal-rememberMe">
            <label for="modal-rememberMe">Remember Me</label><br><br>
            <a href="#" class="forgot-password">Forgot Password?</a><br><br>
            <button type="submit" class="login-btn">Login</button>
          </form>
        </div>
        <button class="close-modal">✕</button>
      </div>
    `;
    modal.classList.add('modal-container');
    document.body.appendChild(modal);

    document.querySelector('#login-modal-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('modal-email').value;
      const password = document.getElementById('modal-password').value;
      if (email && password) {
        alert(`Logged in with ${email}. Redirecting to dashboard soon.`);
        modal.remove();
      } else {
        alert('Please fill all fields!');
      }
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
      modal.remove();
    });
  });
});

// Button Click Actions
document.querySelectorAll('.plan-btn, .post-btn, .cta-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.classList.contains('plan-btn')) {
      if (btn.textContent === 'Contact Sales') {
        window.location.href = 'mailto:sales@jasper.ai';
      } else {
        window.location.href = 'signup.html';
      }
    } else if (btn.classList.contains('post-btn')) {
      const articleTitle = btn.closest('.post').querySelector('h2').textContent;
      const modal = document.createElement('div');
      modal.innerHTML = `
        <div class="modal article-modal">
          <div class="modal-content">
            <h2>${articleTitle}</h2>
            <p>This is a preview of the article. Sign up to read the full content!</p>
            <a href="signup.html" class="cta-btn">Sign Up</a>
          </div>
          <button class="close-modal">✕</button>
        </div>
      `;
      modal.classList.add('modal-container');
      document.body.appendChild(modal);

      document.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
      });
    } else if (btn.classList.contains('cta-btn')) {
      window.location.href = 'signup.html';
    }
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
// Enhanced dropdown logic
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-content').style.display = 'block';
  });
  
  dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-content').style.display = 'none';
  });
});
// Enhanced chat functionality
let chatHistory = [];

function getAIResponse(message) {
  const brandTone = document.getElementById('tone')?.value || 'professional';
  return fetch('/generate', {
    method: 'POST',
    body: JSON.stringify({
      prompt: `[${brandTone} tone] ${message}`,
      history: chatHistory
    })
  }).then(res => res.text());
}

// Update send button handler
sendButton.addEventListener('click', async () => {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, 'user');
    const response = await getAIResponse(message);
    addMessage(response, 'bot');
  }
});
// Typewriter effect for hero headline
const words = ["Marketing Teams", "Content Creators", "Entrepreneurs", "Businesses"];
let i = 0;
const typewriterEl = document.getElementById("typewriter");

function typeWriter() {
  typewriterEl.textContent = words[i];
  i = (i + 1) % words.length;
}
typeWriter();
setInterval(typeWriter, 2500);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Testimonial carousel
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

