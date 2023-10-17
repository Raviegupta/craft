// FILTER SECTIONB FOR LOWER DEVICES
const filterMiniDeviceBtn = document.querySelector('.artist-page-filter-section-lower-devices');
const filterMiniDeviceOptions = document.querySelector('#artist-section-filter-section');
const filterMiniDeviceSectionsHidden = document.querySelectorAll('.ravie');
const filterMiniCross = document.querySelector('.modal-cross');

console.log(filterMiniDeviceBtn);


filterMiniDeviceBtn.addEventListener('click', () => {
    console.log('ravie .........................');
    
    // console.log(filterMiniDeviceOptions);
    filterMiniDeviceOptions.classList.toggle('hidden');
    // console.log(filterMiniDeviceOptions);

    for(let i=0; i<filterMiniDeviceSectionsHidden.length; i++ ) {
        filterMiniDeviceSectionsHidden[i].classList.toggle('hidden');
        // console.log(filterMiniDeviceSectionsHidden[i]);
    }
})


filterMiniCross.addEventListener('click', () => {

    for(let i=0; i<filterMiniDeviceSectionsHidden.length; i++ ) {
        filterMiniDeviceSectionsHidden[i].classList.toggle('hidden');
        // console.log(filterMiniDeviceSectionsHidden[i]);
    }

    filterMiniDeviceOptions.classList.toggle('hidden');

})

