const slides = document.querySelectorAll('.slide');

function slideHandler(active) {
	slides[active].classList.add('active');

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			removeClassActive();
			slide.classList.add('active');
		});
	}

	function removeClassActive() {
		slides.forEach(item => {
			item.classList.remove('active');
		});
	}
}

slideHandler(1);
