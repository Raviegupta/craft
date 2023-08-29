const accordionSections = document.querySelectorAll('.accordion-section');

accordionSections.forEach(section => {
    const header = section.querySelector('.accordion-header');
    const content = section.querySelector('.accordion-content');
    const icon = section.querySelector('.accordion-icon');
  
    header.addEventListener('click', () => {
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            icon.innerHTML = '<img src="../images/Accordian-Arrow-up.png" alt="Up Arrow" style="width: 12px;">';
        } else {
            icon.innerHTML = '<img src="../images/Accordian-Arrow-down.png" alt="Up Arrow" style="width: 12px;">';
        }
    });
});