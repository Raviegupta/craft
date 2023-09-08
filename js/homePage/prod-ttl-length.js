const title = document.querySelectorAll('.pro-ttl-stl');

// let longTitle = title.innerHTML
// console.log(longTitle);
// let shortTitle = longTitle.substring(0, 12) + "...";
// console.log(shortTitle);
// prodTitle.innerHTML = shortTitle;

title.forEach(title => {
    const text = title.textContent;
    if( text.length > 12 ) {
        title.textContent = text.slice(0, 12) + '...';
        console.log(title)
    }
});

