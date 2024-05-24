const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {
const current = event.target;
const isReadMoreBtn = current.className.includes('read-more-btn');

if (!isReadMoreBtn) return;

const currentText = current.parentNode.querySelector('.read-more-text');

currentText.classList.toggle('read-more-text--show');

current.textContent = current.textContent.includes('View More') ? "View Less" : "View More";
});
