document.addEventListener('DOMContentLoaded', function() {
  const accordion = document.querySelector('.js-accordion');
  let openItem = null;

  accordion.addEventListener('click', function(event) {
    const button = event.target.closest('[data-accordion-title]');
    if (!button) return;

    const itemId = button.getAttribute('data-accordion-title');
    const content = document.querySelector(`[data-accordion-content="${itemId}"]`);
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);


    if (openItem && openItem !== content) {
      const openButton = accordion.querySelector(`[aria-controls="${openItem.id}"]`);
      openButton.setAttribute('aria-expanded', 'false');
      openItem.hidden = true;
    }

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      content.hidden = false;
      openItem = content;
    } else {
      button.setAttribute('aria-expanded', 'false');
      content.hidden = true;
      openItem = null;
    }
  });
});
