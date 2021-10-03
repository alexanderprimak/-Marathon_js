const container = document.querySelector('.container');
const QUANTITY_SQUARES = 532;
const arrayColor = [
	'#6495ED',
	'#FF6347',
	'#FF8C00',
	'#6B8E23',
	'#FF00FF',
	'#DAA520',
	'#8A2BE2',
	'DarkCyan',
];

for (let i = 0; i < QUANTITY_SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	container.append(square);

	square.addEventListener('mouseover', mouseOver);

	square.addEventListener('mouseleave', mouseLeave);
}

function mouseOver(e) {
	const element = e.target;
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function mouseLeave(e) {
	const element = e.target;
	element.style.background = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	return arrayColor[Math.floor(Math.random() * arrayColor.length)];
}
