const contactBtn = document.getElementById('contactBtn');
const projectLinks = document.querySelectorAll('.project-link');

contactBtn?.addEventListener('click', () => {
  window.location.href = 'mailto:kobebunn@gmail.com';
});

projectLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const card = event.target.closest('.project-card');
    if (!card) return;
    card.classList.add('project-active');
    setTimeout(() => {
      card.classList.remove('project-active');
    }, 400);
  });
});
