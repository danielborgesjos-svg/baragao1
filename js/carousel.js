document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const heroSection = document.querySelector('.hero');
  
  if (!slides.length) return;

  let current = 0;
  let isPlaying = true;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      slide.setAttribute('aria-hidden', 'true');
      if (dots[i]) {
        dots[i].classList.remove('active');
        dots[i].setAttribute('aria-selected', 'false');
      }
    });

    slides[index].classList.add('active');
    slides[index].setAttribute('aria-hidden', 'false');
    if (dots[index]) {
      dots[index].classList.add('active');
      dots[index].setAttribute('aria-selected', 'true');
    }
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      current = index;
      showSlide(current);
      resetInterval();
    });
  });

  function startInterval() {
    slideInterval = setInterval(() => {
      if (isPlaying) nextSlide();
    }, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => isPlaying = false);
    heroSection.addEventListener('mouseleave', () => {
      isPlaying = true;
      resetInterval();
    });
  }

  // Initialize
  showSlide(current);
  startInterval();
});
