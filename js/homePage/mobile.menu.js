// this section js is for mobile menu
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerIconCross = document.querySelector('.hamburger-icon-cross');
const mobileMenuMain = document.querySelector('.mobile-menu-main');

const hamburgerIconClickNotRender = document.querySelectorAll('.hamburger-icon-click-not-render');

      
const mobileMenu1 = document.querySelector('.mobile-menu-1');
const mobileMenu1List = document.querySelector('.mobile-menu-1-list');
const arrowDown1 = document.querySelector('.arrow-down1');
const arrowUp1 = document.querySelector('.arrow-up1');
        
const mobileMenu2 = document.querySelector('.mobile-menu-2');
const mobileMenu2List = document.querySelector('.mobile-menu-2-list');
const arrowDown2 = document.querySelector('.arrow-down2');
const arrowUp2 = document.querySelector('.arrow-up2');

const mobileMenu3 = document.querySelector('.mobile-menu-3');
const mobileMenu3List = document.querySelector('.mobile-menu-3-list');
const arrowDown3 = document.querySelector('.arrow-down3');
const arrowUp3 = document.querySelector('.arrow-up3');

const mobileMenu4 = document.querySelector('.mobile-menu-4');
const mobileMenu4List = document.querySelector('.mobile-menu-4-list');
const arrowDown4 = document.querySelector('.arrow-down4');
const arrowUp4 = document.querySelector('.arrow-up4');

const mobileMenu5 = document.querySelector('.mobile-menu-5');
const mobileMenu5List = document.querySelector('.mobile-menu-5-list');
const arrowDown5 = document.querySelector('.arrow-down5');
const arrowUp5 = document.querySelector('.arrow-up5');

const mobileMenu6 = document.querySelector('.mobile-menu-6');
const mobileMenu6List = document.querySelector('.mobile-menu-6-list');
const arrowDown6 = document.querySelector('.arrow-down6');
const arrowUp6 = document.querySelector('.arrow-up6');

const mobileMenu7 = document.querySelector('.mobile-menu-7');
const mobileMenu7List = document.querySelector('.mobile-menu-7-list');
const arrowDown7 = document.querySelector('.arrow-down7');
const arrowUp7 = document.querySelector('.arrow-up7');

const mobileMenu8 = document.querySelector('.mobile-menu-8');
const mobileMenu8List = document.querySelector('.mobile-menu-8-list');
const arrowDown8 = document.querySelector('.arrow-down8');
const arrowUp8 = document.querySelector('.arrow-up8');

        
        
// console.log(hamburgerIconClickNotRender);

mobileMenu1.addEventListener('click', (() => {
    if (mobileMenu1List.classList.contains('menu-hidden')) {
            mobileMenu1List.classList.remove('menu-hidden');
            arrowDown1.classList.add('menu-hidden');
            arrowUp1.classList.remove('menu-hidden');
        } else {
            mobileMenu1List.classList.add('menu-hidden')
            arrowUp1.classList.add('menu-hidden');
            arrowDown1.classList.remove('menu-hidden')
        }
}))

mobileMenu2.addEventListener('click', (() => {
    if (mobileMenu2List.classList.contains('menu-hidden')) {
            mobileMenu2List.classList.remove('menu-hidden');
            arrowDown2.classList.add('menu-hidden');
            arrowUp2.classList.remove('menu-hidden');
        } else {
            mobileMenu2List.classList.add('menu-hidden')
            arrowUp2.classList.add('menu-hidden');
            arrowDown2.classList.remove('menu-hidden')
        }
}))

mobileMenu3.addEventListener('click', (() => {
    if (mobileMenu3List.classList.contains('menu-hidden')) {
            mobileMenu3List.classList.remove('menu-hidden');
            arrowDown3.classList.add('menu-hidden');
            arrowUp3.classList.remove('menu-hidden');
        } else {
            mobileMenu3List.classList.add('menu-hidden')
            arrowUp3.classList.add('menu-hidden');
            arrowDown3.classList.remove('menu-hidden')
        }
}))

mobileMenu4.addEventListener('click', (() => {
    if (mobileMenu4List.classList.contains('menu-hidden')) {
            mobileMenu4List.classList.remove('menu-hidden');
            arrowDown4.classList.add('menu-hidden');
            arrowUp4.classList.remove('menu-hidden');
        } else {
            mobileMenu4List.classList.add('menu-hidden')
            arrowUp4.classList.add('menu-hidden');
            arrowDown4.classList.remove('menu-hidden')
        }
}))

mobileMenu5.addEventListener('click', (() => {
    if (mobileMenu5List.classList.contains('menu-hidden')) {
            mobileMenu5List.classList.remove('menu-hidden');
            arrowDown5.classList.add('menu-hidden');
            arrowUp5.classList.remove('menu-hidden');
        } else {
            mobileMenu5List.classList.add('menu-hidden')
            arrowUp5.classList.add('menu-hidden');
            arrowDown5.classList.remove('menu-hidden')
        }
}))

mobileMenu6.addEventListener('click', (() => {
    if (mobileMenu6List.classList.contains('menu-hidden')) {
            mobileMenu6List.classList.remove('menu-hidden');
            arrowDown6.classList.add('menu-hidden');
                arrowUp6.classList.remove('menu-hidden');
    } else {
            mobileMenu6List.classList.add('menu-hidden')
            arrowUp6.classList.add('menu-hidden');
            arrowDown6.classList.remove('menu-hidden')
            }
}))

mobileMenu7.addEventListener('click', (() => {
    if (mobileMenu7List.classList.contains('menu-hidden')) {
            mobileMenu7List.classList.remove('menu-hidden');
            arrowDown7.classList.add('menu-hidden');
            arrowUp7.classList.remove('menu-hidden');
    } else {
            mobileMenu7List.classList.add('menu-hidden')
            arrowUp7.classList.add('menu-hidden');
            arrowDown7.classList.remove('menu-hidden')
    }
}))

mobileMenu8.addEventListener('click', (() => {
    if (mobileMenu8List.classList.contains('menu-hidden')) {
        mobileMenu8List.classList.remove('menu-hidden');
        arrowDown8.classList.add('menu-hidden');
        arrowUp8.classList.remove('menu-hidden');
    } else {
        mobileMenu8List.classList.add('menu-hidden')
        arrowUp8.classList.add('menu-hidden');
        arrowDown8.classList.remove('menu-hidden')
    }
}))


hamburgerIcon.addEventListener('click', (() => {
    console.log('hello world');
    console.log(mobileMenuMain);
    if(mobileMenuMain.classList.contains('menu-hidden')) {
        mobileMenuMain.classList.remove('menu-hidden')
        hamburgerIcon.classList.add('menu-hidden');
        hamburgerIconCross.classList.remove('menu-hidden');

        hamburgerIconClickNotRender.classList.add('menu-hidden');
    }       
}))

hamburgerIconCross.addEventListener('click', (() => {
    mobileMenuMain.classList.add('menu-hidden');
    hamburgerIconCross.classList.add('menu-hidden');
    hamburgerIcon.classList.remove('menu-hidden');
}))