const asideOneUnitQ = document.querySelectorAll('.pdp-aside-last-unit-ques');
const asideOneUnitAns = document.querySelectorAll('.pdp-aside-last-unit-ans');

const aboutCreatorPara = document.querySelector('.about-creation-para');
const aboutCreatorShowMoreBtn = document.querySelector('.about-creation-show-more');
const aboutCreatorShowLessBtn = document.querySelector('.about-creation-show-less');

const artistHighlightsOneUnitQ = document.querySelectorAll('.art-light-1-unit-txt-section');
const artistHighlightsOneUnitAns = document.querySelectorAll('.art-light-1-unit-txt-section-ans');


// -------------------------------------------------------------------------------
// ASIDE PART ACCORDIAN ❤️❤️❤️
for(let i = 0; i<asideOneUnitQ.length; i++) {
    asideOneUnitQ[i].addEventListener('click', () => {
        asideOneUnitAns[i].classList.toggle('hidden');
    })
}

// -------------------------------------------------------------------------------



  

// -------------------------------------------------------------------------------
// ABOUT THE CREATION SHOW MORE AND SHW LESS 
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
// -------------------------------------------------------------------------------





// -------------------------------------------------------------------------------
// ABOUT THE CREATOR ARTIST HIGHLIGHT PART
for(let i = 0; i<artistHighlightsOneUnitQ.length; i++) {
    artistHighlightsOneUnitQ[i].addEventListener('click', () => {
        artistHighlightsOneUnitAns[i].classList.toggle('hidden');
    })
}