
// Functionality For Banner Slider

let nextBtn = document.querySelector('.banner-slider .next');
let prevBtn = document.querySelector('.banner-slider .prev');

let slider = document.querySelector('.banner-slider');
let sliderList = slider.querySelector('.banner-slider .list');
let thumbnail = document.querySelector('.banner-slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.banner-slider .item');

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
};

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.banner-slider .item');
    let thumbnailItems = document.querySelectorAll('.banner-slider .thumbnail .item');
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, {once: true}); // Remove the event listener after it's triggered once
}

// Automatically move the slider every 2 seconds
// setInterval(function() {
//     moveSlider('next');
// }, 3000);


// --------------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.why-elysium .rounded-card-row .rounded-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            card.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0)';
        });
    });
});