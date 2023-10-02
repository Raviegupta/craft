const asideOneUnitQ = document.querySelectorAll('.pdp-aside-last-unit-ques');
const asideOneUnitAns = document.querySelectorAll('.pdp-aside-last-unit-ans');

const aboutCreatorPara = document.querySelector('.about-creation-para');
const aboutCreatorShowMoreBtn = document.querySelector('.about-creation-show-more');


// Beutiful ❤️❤️❤️
for(let i = 0; i<asideOneUnitQ.length; i++) {
    asideOneUnitQ[i].addEventListener('click', () => {
        asideOneUnitAns[i].classList.toggle('hidden');
    })
}



const aboutCreatorParaText = aboutCreatorPara.textContent;
console.log(aboutCreatorParaText.length);

if(aboutCreatorParaText.length > 300 ) {
    aboutCreatorPara.textContent = aboutCreatorParaText.slice(0, 300) + '...';
    console.log('hello ')
} else {
    aboutCreatorPara.textContent = aboutCreatorParaText;

}

aboutCreatorShowMoreBtn.addEventListener('click', () => {
    console.log('raviiiiiiiiiiiiiiiiiiiii');

    aboutCreatorPara.textContent = aboutCreatorParaText;
})
