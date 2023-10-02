const asideOneUnitQ = document.querySelectorAll('.pdp-aside-last-unit-ques');
const asideOneUnitAns = document.querySelectorAll('.pdp-aside-last-unit-ans');


// Beutiful ❤️❤️❤️
for(let i = 0; i<asideOneUnitQ.length; i++) {
    asideOneUnitQ[i].addEventListener('click', () => {
        asideOneUnitAns[i].classList.toggle('hidden');
    })
}