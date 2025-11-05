const navSlide = () => {
  const burger = document.querySelector('.hamburger-bar');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
};

const smoothTransition = () => {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      const sameHost = link.hostname === window.location.hostname;

      if (sameHost && href && !href.startsWith('#')) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  navSlide();
  smoothTransition();
});