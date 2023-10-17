const asideOneUnitQ = document.querySelectorAll('.pdp-aside-last-unit-ques');
const asideOneUnitAns = document.querySelectorAll('.pdp-aside-last-unit-ans');

const aboutCreatorPara = document.querySelector('.about-creation-para');
const aboutCreatorShowMoreBtn = document.querySelector('.about-creation-show-more');
const aboutCreatorShowLessBtn = document.querySelector('.about-creation-show-less');

const artistHighlightsOneUnitQ = document.querySelectorAll('.art-light-1-unit-txt-section');
const artistHighlightsOneUnitAns = document.querySelectorAll('.art-light-1-unit-txt-section-ans');

const prodImageOnScreen = document.querySelector('.product-image-on-screen');
const prodImagesWrapper = document.querySelectorAll('.prod-img-wrapper');
const prodImages = document.querySelectorAll('.product-image');
const prev = document.querySelector('.product-image-prev');
const next = document.querySelector('.product-image-next');
const pdpBody = document.querySelector('.pdp-body');
const pdpModalCross = document.querySelector('.pdp-modal-cross');
const body = document.querySelector('body');
const prodThumbnails = document.querySelector('.product-image-to-be-displayed-div-wrapper');



const prodDisplayImage = document.querySelector('.prod-display-image');
const touchableElement = document.querySelector('.product-image-on-display');
// console.log(touchableElement);
const prodSection = document.querySelector('.product-section');
const pdpAsideBar = document.querySelector('.pdp-aside-wrapper');



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
// console.log(prodImages)

const arr = [];
let currIndex = 0;

for(let i=0; i<prodImages.length; i++) {
    // console.log(prodImages[i].src);
    arr[i] = prodImages[i].src
}
prodImageOnScreen.src == arr[0];


// FUNCTIONS
// this function is used to preview the current thumbnail
function currThumbnail() {
    prodImagesWrapper[currIndex].style.border = "1px solid black";
        for(let i=0; i<prodImagesWrapper.length; i++) {
            if(i !== currIndex) {
                prodImagesWrapper[i].style.border = "none";
            }
        }
}

// this function is used to show the previous image
function prevImage () {
    if(currIndex > 0) {
        currIndex--;
        prodImageOnScreen.src = arr[currIndex];
    } else if(currIndex == 0) {
        currIndex = arr.length - 1;
        prodImageOnScreen.src = arr[currIndex];
    }

    currThumbnail();
}

// this function is used to show the next image
function nextImage () {
    if(currIndex < arr.length - 1) {
        currIndex++;
        prodImageOnScreen.src = arr[currIndex];
    } else if(currIndex == arr.length - 1) {
        currIndex = 0;
        prodImageOnScreen.src = arr[currIndex];
    }

    currThumbnail();
}

// ADDEVENT LISTENER FOR CLICKING THE CURRENT THUMNAIL
for(let i = 0; i<prodImages.length; i++) {
    prodImages[i].addEventListener('click', () => {
        currIndex = i;
        // console.log(arr[currIndex]);
        prodImageOnScreen.src = arr[currIndex];
        console.log(prodImageOnScreen.src);

        currThumbnail();
    })
}
// console.log(prev, next);

prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);

// ----------------------------------------

touchableElement.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

touchableElement.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);


function handleGesture() {
    if (touchendX < touchstartX) {
        console.log('Swiped Left');
        nextImage();
    }

    if (touchendX > touchstartX) {
        console.log('Swiped Right');
        prevImage();
    }

    // if (touchendY < touchstartY) {
    //     console.log('Swiped Up');
    // }

    // if (touchendY > touchstartY) {
    //     console.log('Swiped Down');
    // }

    // if (touchendY === touchstartY) {
    //     console.log('Tap'); 
    // }
}
// -------------------------------------------------------------------------------





prodDisplayImage.addEventListener('click', () => {
    pdpModalCross.classList.remove('pdp-modal-cross-hidden');
    touchableElement.classList.add('product-image-full-view');
    prodDisplayImage.classList.add('prod-display-image-full-view');
    prodImageOnScreen.classList.add('product-image-on-screen-full-view');
    body.classList.add('body-full-view');
    prev.classList.add('product-image-next-full-view');
    next.classList.add('product-image-next-full-view');

    // console.log(body);
    // prodImageOnScreen.style.height = "100vh"

    prodThumbnails.classList.add('hidden');
    pdpAsideBar.classList.add('hidden');
});

pdpModalCross.addEventListener('click', () => {
    pdpModalCross.classList.add('pdp-modal-cross-hidden');
    touchableElement.classList.remove('product-image-full-view');
    prodDisplayImage.classList.remove('prod-display-image-full-view');
    prodImageOnScreen.classList.remove('product-image-on-screen-full-view');
    body.classList.remove('body-full-view');
    prev.classList.remove('product-image-next-full-view');
    next.classList.remove('product-image-next-full-view');

    prodThumbnails.classList.remove('hidden');
    pdpAsideBar.classList.remove('hidden');
})



// KEYBOARD EVENTS
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        // alert('Esc key pressed by ravie');    
        pdpModalCross.classList.add('pdp-modal-cross-hidden');
        touchableElement.classList.remove('product-image-full-view');
        prodDisplayImage.classList.remove('prod-display-image-full-view');
        prodImageOnScreen.classList.remove('product-image-on-screen-full-view');
        body.classList.remove('body-full-view');
        prev.classList.remove('product-image-next-full-view');
        next.classList.remove('product-image-next-full-view');

        prodThumbnails.classList.remove('hidden');
        pdpAsideBar.classList.remove('hidden');
    }

    if (evt.keyCode == 37) {
        // alert('left arrow key pressed by ravie');
        prevImage();
    }
    if(evt.keyCode == 39) {
        // alert('right arrow key pressed by ravie');
        nextImage();
    }
};

// MOUSE EVENTS
document.querySelector(".product-section").addEventListener("wheel", () => {
    pdpModalCross.classList.add('pdp-modal-cross-hidden');
    touchableElement.classList.remove('product-image-full-view');
    prodDisplayImage.classList.remove('prod-display-image-full-view');
    prodImageOnScreen.classList.remove('product-image-on-screen-full-view');
    body.classList.remove('body-full-view');
    prev.classList.remove('product-image-next-full-view');
    next.classList.remove('product-image-next-full-view');

    prodThumbnails.classList.remove('hidden');
    pdpAsideBar.classList.remove('hidden');
});