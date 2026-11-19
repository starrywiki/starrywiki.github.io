// Figure links still open the full image when JavaScript is unavailable.
const figureDialog = document.querySelector('.figure-dialog');
const expandedFigure = figureDialog?.querySelector('.expanded-figure');
const figureTitle = figureDialog?.querySelector('#figure-title');

if (figureDialog && typeof figureDialog.showModal === 'function') {
  document.querySelectorAll('[data-figure]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      expandedFigure.src = link.href;
      expandedFigure.alt = link.querySelector('img').alt;
      figureTitle.textContent = link.dataset.figure;
      figureDialog.showModal();
    });
  });

  figureDialog.addEventListener('click', (event) => {
    if (event.target !== figureDialog) return;
    const box = figureDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) {
      figureDialog.close();
    }
  });
}
