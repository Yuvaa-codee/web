document.getElementById('day1-btn').addEventListener('click', function () {
    document.querySelector('.wcontent-wrapper').style.transform = 'translateX(0)';
    setActiveButton('day1-btn');
});

document.getElementById('day2-btn').addEventListener('click', function () {
    document.querySelector('.wcontent-wrapper').style.transform = 'translateX(-33.33%)';
    setActiveButton('day2-btn');
});

document.getElementById('day3-btn').addEventListener('click', function () {
    document.querySelector('.wcontent-wrapper').style.transform = 'translateX(-66.66%)';
    setActiveButton('day3-btn');
});

function setActiveButton(activeButtonId) {
    const buttons = document.querySelectorAll('.wday-button');
    buttons.forEach(button => {
        if (button.id === activeButtonId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}