const asideOneUnitQ = document.querySelectorAll('.pdp-aside-last-unit-ques');
const asideOneUnitAns = document.querySelectorAll('.pdp-aside-last-unit-ans');

const aboutCreatorPara = document.querySelector('.about-creation-para');
const aboutCreatorShowMoreBtn = document.querySelector('.about-creation-show-more');
const aboutCreatorShowLessBtn = document.querySelector('.about-creation-show-less');

const artistHighlightsOneUnitQ = document.querySelectorAll('.art-light-1-unit-txt-section');
const artistHighlightsOneUnitAns = document.querySelectorAll('.art-light-1-unit-txt-section-ans');

const prodImageOnScreen = document.querySelector('.product-image-on-screen');
const prodImages = document.querySelectorAll('.product-image');
const prev = document.querySelector('.product-image-prev');
const next = document.querySelector('.product-image-next');

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
// console.log(aboutCreatorParaText.length);

if(aboutCreatorParaText.length > 450 ) {
    aboutCreatorPara.textContent = aboutCreatorParaText.slice(0, 450) + '...';
    // console.log('hello ')
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





// -------------------------------------------------------------------------------
// Product Image display from Stack
console.log(prodImages)

const arr = [];
let currIndex = 0;

for(let i=0; i<prodImages.length; i++) {
    // console.log(prodImages[i].src);
    arr[i] = prodImages[i].src
}
prodImageOnScreen.src == arr[0];


for(let i = 0; i<prodImages.length; i++) {
    prodImages[i].addEventListener('click', () => {
        currIndex = i;
        // console.log(arr[currIndex]);
        prodImageOnScreen.src = arr[currIndex];
        console.log(prodImageOnScreen.src);
    })
}
// console.log(prev, next);

prev.addEventListener('click', function() {
    if(currIndex > 0) {
        currIndex--;
        prodImageOnScreen.src = arr[currIndex];
    } else if(currIndex == 0) {
        currIndex = arr.length - 1;
        prodImageOnScreen.src = arr[currIndex];
    }
});

next.addEventListener('click', function() {
    if(currIndex < arr.length - 1) {
        currIndex++;
        prodImageOnScreen.src = arr[currIndex];
    } else if(currIndex == arr.length - 1) {
        currIndex = 0;
        prodImageOnScreen.src = arr[currIndex];
    }
});
// -------------------------------------------------------------------------------