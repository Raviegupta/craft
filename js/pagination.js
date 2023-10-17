const paginationPage = document.querySelectorAll('.my-pagination-page');

for(let i=0; i<paginationPage.length; i++) {
    paginationPage[i].addEventListener('click', () => {
        paginationPage[i].classList.add('my-pagination-page-on-click');
        for(let j=0; j<paginationPage.length; j++) {
            if(j !== i) {
                paginationPage[j].classList.remove('my-pagination-page-on-click');
            }
        }
    });

}