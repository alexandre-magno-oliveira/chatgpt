(() => {
  document.getElementById('print-button').addEventListener('click', () => window.print());
  const contents = document.querySelector('.contents');
  const mobile = window.matchMedia('(max-width: 800px)');
  const adapt = () => { contents.open = !mobile.matches; };
  adapt();
  mobile.addEventListener('change', adapt);
  const links = [...document.querySelectorAll('.contents nav a')];
  links.forEach(link => link.addEventListener('click', () => {
    if (mobile.matches) contents.open = false;
  }));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('.document-section').forEach(section => observer.observe(section));
  }
})();
