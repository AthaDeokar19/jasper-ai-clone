// Language Switching Logic
const languageSelector = document.querySelector('.language-switcher .dropdown-content a');
if (languageSelector) {
  document.querySelectorAll('.language-switcher .dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.getAttribute('data-lang');
      document.querySelector('.language-switcher .dropbtn').textContent = `Language: ${lang === 'en' ? 'English' : 'Español'}`;
      updateLanguage(lang);
    });
  });
}

function updateLanguage(lang) {
  const translations = {
    en: {
      home: 'Home',
      more: 'More',
      pricing: 'Pricing',
      blog: 'Blog',
      login: 'Login',
      guides: 'Guides',
      tryFree: 'Try for Free',
      heroTitle: 'Write Better Content with AI',
      heroSubtitle: 'Create blog posts, social media, and more 10x faster with Jasper.',
      startTrial: 'Start Free Trial',
      watchDemo: 'Watch Demo',
      whyChoose: 'Why Choose Jasper?',
      trustedBy: 'TRUSTED BY 100,000+ TEAMS WORLDWIDE',
      features: {
        fast: '10x Faster',
        quality: 'Premium Quality',
        consistent: 'Brand Consistent'
      },
      useCases: {
        blogPosts: 'Blog Posts',
        socialMedia: 'Social Media',
        marketing: 'Marketing Copy',
        emails: 'Emails'
      },
      testimonialsTitle: 'What Our Customers Say',
      ctaTitle: 'Ready to create amazing content?',
      ctaSubtitle: 'Join thousands of marketers and entrepreneurs creating content with Jasper.',
      tryJasper: 'Try Jasper Free'
    },
    es: {
      home: 'Inicio',
      more: 'Más',
      pricing: 'Precios',
      blog: 'Blog',
      login: 'Iniciar Sesión',
      guides: 'Guías',
      tryFree: 'Prueba Gratis',
      heroTitle: 'Escribe Mejor Contenido con IA',
      heroSubtitle: 'Crea publicaciones de blog, redes sociales y más 10 veces más rápido con Jasper.',
      startTrial: 'Comienza la Prueba Gratis',
      watchDemo: 'Ver Demostración',
      whyChoose: '¿Por qué elegir Jasper?',
      trustedBy: 'CONFIANZA DE 100,000+ EQUIPOS EN TODO EL MUNDO',
      features: {
        fast: '10x Más Rápido',
        quality: 'Calidad Premium',
        consistent: 'Consistente con la Marca'
      },
      useCases: {
        blogPosts: 'Publicaciones de Blog',
        socialMedia: 'Redes Sociales',
        marketing: 'Copia de Marketing',
        emails: 'Correos Electrónicos'
      },
      testimonialsTitle: 'Qué Dicen Nuestros Clientes',
      ctaTitle: '¿Listo para crear contenido increíble?',
      ctaSubtitle: 'Únete a miles de marketers y emprendedores que crean contenido con Jasper.',
      tryJasper: 'Prueba Jasper Gratis'
    }
  };

  const langData = translations[lang] || translations['en'];

  // Update navigation
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.textContent === 'Home') link.textContent = langData.home;
    if (link.textContent === 'More') link.closest('.dropdown').querySelector('.dropbtn').textContent = langData.more;
    if (link.textContent === 'Pricing') link.textContent = langData.pricing;
    if (link.textContent === 'Blog') link.textContent = langData.blog;
    if (link.textContent === 'Login') link.textContent = langData.login;
    if (link.textContent === 'Guides') link.textContent = langData.guides;
    if (link.classList.contains('cta-btn')) link.textContent = langData.tryFree;
  });

  // Update hero section
  document.querySelector('.hero h1').textContent = langData.heroTitle;
  document.querySelector('.hero p').textContent = langData.heroSubtitle;
  document.querySelector('.hero-buttons .cta-btn').textContent = langData.startTrial;
  document.querySelector('.hero-buttons .secondary-btn').textContent = langData.watchDemo;

  // Update other sections
  document.querySelector('.trusted-by-label').textContent = langData.trustedBy;
  document.querySelector('.features .section-title').textContent = langData.whyChoose;
  document.querySelectorAll('.feature-card h3').forEach((el, i) => {
    el.textContent = Object.values(langData.features)[i];
  });
  document.querySelector('.use-cases .section-title').textContent = 'What Can You Create?'; // Simplified for time
  document.querySelectorAll('.use-case-card h3').forEach((el, i) => {
    el.textContent = Object.values(langData.useCases)[i];
  });
  document.querySelector('.testimonials .section-title').textContent = langData.testimonialsTitle;
  document.querySelector('.cta-section h2').textContent = langData.ctaTitle;
  document.querySelector('.cta-section p').textContent = langData.ctaSubtitle;
  document.querySelector('.cta-section .cta-btn').textContent = langData.tryJasper;
}

// Menu Toggle Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth Navigation for All Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      window.location.href = href; // Redirect to the linked page
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active'); // Close mobile menu
      }
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
