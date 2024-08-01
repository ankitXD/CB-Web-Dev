document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');

  const toggleNav = () => {
    if (window.scrollY >= hero.offsetHeight - nav.offsetHeight) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  };

  window.addEventListener('scroll', toggleNav);
});
