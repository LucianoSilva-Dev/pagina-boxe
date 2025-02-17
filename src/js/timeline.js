let selectedSpan = document.querySelector('.selected');
let selectedContent = document.querySelector('.timeline-content.selected');
const itens = document.querySelectorAll('.timeline-itens span');

function select(item) {
    selectedSpan.classList.remove('selected');
    selectedContent.classList.remove('selected');

    const content = document.querySelector(`.timeline-content.${item.getAttribute('data-year')}`);
    item.classList.add('selected');
    content.classList.add('selected');
    
    selectedSpan = item;
    selectedContent = content;
}

for (const item of itens) {
    item.addEventListener('click', () => select(item));
}
