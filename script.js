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
// Existing code (navbar toggle and button alerts)
document.querySelectorAll('.plan-btn, .post-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked!');
  });
});

// Login form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Logged in with ${email}`);
});
// Existing code (navbar toggle, button alerts, login form)
document.querySelectorAll('.plan-btn, .post-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked!');
  });
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Logged in with ${email}`);
});

document.getElementById('feedback-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const messageDiv = document.getElementById('feedback-message');
  messageDiv.textContent = `Thank you, ${name}, for your feedback: "${comment}"`;
  document.getElementById('feedback-form').reset();
});
document.querySelector('.hero-btn').addEventListener('click', () => {
  alert('Get Started clicked! Redirect to pricing soon.');
});