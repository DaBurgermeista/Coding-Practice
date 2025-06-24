// .mood-selector/main.js

const moods = {
	happy: 'Happy 😊',
	sad: 'Sad 😢',
	angry: 'Angry 😠',
	cool: 'Cool 😎',
	stressed: 'Stressed 🤯',
};

const output = document.getElementById('output');

Object.keys(moods).forEach((mood) => {
    // 'mood' is one string at a time, like 'happy'
	document.getElementById(mood).addEventListener('click', () => {
		output.textContent = `You clicked: ${moods[mood]}`;
	});
});
