const start = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeGame = document.querySelector('#time');
const board = document.querySelector('#board');
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

start.addEventListener('click', e => {
	e.preventDefault();
	screens[0].classList.add('up');
});

let time = 0;
let counter = 0;

timeList.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.classList.contains('time-btn')) {
		time = parseInt(e.target.getAttribute('data-time'));
		startGame();
	}
});

function startGame() {
	setInterval(() => {
		decreaseTime();
	}, 1000);

	screens[1].classList.add('up');
	setTime(time);
	createRandomCircle();
}

board.addEventListener('click', e => {
	if (e.target.classList.contains('circle')) {
		counter++;
		e.target.remove();
		createRandomCircle();
	}
});

function decreaseTime() {
	if (time === 0) {
		finishGame();
	} else {
		let current = --time;
		if (current < 10) {
			current = `0${current}`;
		}
		setTime(current);
	}
}

function setTime(value) {
	timeGame.innerHTML = `00.${value}`;
}

function finishGame() {
	console.log('now');
	timeGame.parentNode.remove();
	board.innerHTML = `<h1>Счет: <span class=primary>${counter}</span></h1>`;
	setTimeout(() => {
		screens[0].classList.remove('up');
		screens[1].classList.remove('up');
	}, 2000);
}

function createRandomCircle() {
	const circle = document.createElement('div');
	const size = getCircleNumber(20, 70);
	const { width, height } = board.getBoundingClientRect();

	const x = getCircleNumber(0, width - size);
	const y = getCircleNumber(0, height - size);
	const color = getRandomColor();

	circle.classList.add('circle');

	circle.style.background = `${color}`;
	circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;

	board.append(circle);
}

function getCircleNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
	return arrayColor[Math.floor(Math.random() * arrayColor.length)];
}
