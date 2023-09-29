const sortButton = document.querySelector('.sort-by-wrapper');
const arrowUp = document.querySelector('.sort-by-filter-arrow-up');
const arrowDown = document.querySelector('.sort-by-filter-arrow-down');
const sortingOptions = document.querySelector('.sorting-options-box');

const sortButtonMini = document.querySelector('.sort-by-wrapper-mini-devices');
const arrowUpMini = document.querySelector('.sort-by-filter-arrow-up-mini-devices');
const arrowDownMini = document.querySelector('.sort-by-filter-arrow-down-mini-devices');
const sortingOptionsMini = document.querySelector('.sorting-options-box-mini-devices');



sortButton.addEventListener('click', () => {
    console.log('hello ravie');

    arrowDown.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
    sortingOptions.classList.toggle('hidden');
})



sortButtonMini.addEventListener('click', () => {
    console.log('hello ravie');

    arrowDownMini.classList.toggle('hidden');
    arrowUpMini.classList.toggle('hidden');
    sortingOptionsMini.classList.toggle('hidden');
})