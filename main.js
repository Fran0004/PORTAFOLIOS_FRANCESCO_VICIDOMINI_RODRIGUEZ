AOS.init({
    duration: 1000,
    once: true
  });

  const section = document.getElementById('inicio');
  const footer = document.getElementById("finalShin");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.remove('activo');
        footer.classList.add('desctivo');
      } else {
        footer.classList.add('activo');
        footer.classList.remove('desctivo');
      }
    });
  }, {
    threshold: 0.5 // Cambia si quieres que se active antes o después
  });

  observer.observe(section);
