(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('[data-hobby]').forEach((button) => {
    let finishTimer;

    button.addEventListener('click', () => {
      clearTimeout(finishTimer);
      button.classList.remove('is-playing');
      if (reducedMotion.matches) return;

      // Apply the reset before restarting a short effect on repeated clicks.
      void button.offsetWidth;
      button.classList.add('is-playing');
      finishTimer = setTimeout(() => button.classList.remove('is-playing'), 1200);
    });
  });
})();
