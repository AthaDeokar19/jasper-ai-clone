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