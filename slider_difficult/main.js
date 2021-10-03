const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slideCount = mainSlide.querySelectorAll('div').length;
const sideBar = document.querySelector('.sidebar');

sideBar.style.top = `-${(slideCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
	changeSlide('up');
});

downBtn.addEventListener('click', () => {
	changeSlide('down');
});

document.addEventListener('keydown', e => {
	if (e.key === 'ArrowUp') {
		changeSlide('up');
	} else if (e.key === 'ArrowDown') {
		changeSlide('down');
	}
});

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slideCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slideCount - 1;
		}
	}

	const height = container.clientHeight;
	console.log(height);
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
