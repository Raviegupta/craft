const sortButton = document.querySelector('.sort-by-wrapper');
const arrowUp = document.querySelector('.sort-by-filter-arrow-up');
const arrowDown = document.querySelector('.sort-by-filter-arrow-down');
const sortingOptions = document.querySelector('.sorting-options-box');


sortButton.addEventListener('click', () => {
    console.log('hello ravie');

    arrowDown.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
    sortingOptions.classList.toggle('hidden');
})
















//