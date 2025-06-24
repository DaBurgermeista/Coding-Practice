// tip-calculator/main.js

document.getElementById('calculate').addEventListener('click', (event) => {
	event.preventDefault();

	const tipElement = document.getElementById('tip-amount');
	const totalElement = document.getElementById('total');
	const personElement = document.getElementById('per-person');

	const bill = parseFloat(document.getElementById('bill').value);
	const tipPercent = parseFloat(document.getElementById('tip').value);
	const numPeople = parseFloat(
		document.getElementById('number-of-people').value
	);

	const tipAmount = bill * (tipPercent / 100);
	const totalAmount = bill + tipAmount;

	tipElement.innerHTML = `$${tipAmount.toFixed(2)}`;
	totalElement.innerHTML = `$${totalAmount.toFixed(2)}`;
	if (!isNaN(numPeople) && numPeople > 0) {
		const perPerson = totalAmount / numPeople;
		personElement.textContent = `$${perPerson.toFixed(2)}`;
	} else {
		personElement.textContent = 'N/A';
	}
});
