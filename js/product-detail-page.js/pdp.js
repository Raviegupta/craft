const asideOneUnitQ = document.querySelectorAll('.pdp-aside-last-unit-ques');
const asideOneUnitAns = document.querySelectorAll('.pdp-aside-last-unit-ans');

const aboutCreatorPara = document.querySelector('.about-creation-para');
const aboutCreatorShowMoreBtn = document.querySelector('.about-creation-show-more');
const aboutCreatorShowLessBtn = document.querySelector('.about-creation-show-less');


// Beutiful ❤️❤️❤️
for(let i = 0; i<asideOneUnitQ.length; i++) {
    asideOneUnitQ[i].addEventListener('click', () => {
        asideOneUnitAns[i].classList.toggle('hidden');
    })
}



const aboutCreatorParaText = aboutCreatorPara.textContent;
console.log(aboutCreatorParaText.length);

if(aboutCreatorParaText.length > 450 ) {
    aboutCreatorPara.textContent = aboutCreatorParaText.slice(0, 450) + '...';
    console.log('hello ')
} else {
    aboutCreatorPara.textContent = aboutCreatorParaText;

}

aboutCreatorShowMoreBtn.addEventListener('click', () => {
    aboutCreatorPara.textContent = aboutCreatorParaText;
    aboutCreatorShowMoreBtn.classList.add('hidden');
    aboutCreatorShowLessBtn.classList.remove('hidden');
})

aboutCreatorShowLessBtn.addEventListener('click', () => {
    aboutCreatorPara.textContent = aboutCreatorParaText.slice(0, 450) + '...';
    aboutCreatorShowLessBtn.classList.add('hidden');
    aboutCreatorShowMoreBtn.classList.remove('hidden');
})
