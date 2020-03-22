while (true) {
	i = Math.floor(Math.random() * 7) + 1;
	let guess = prompt("Число загадано. Угадайте число:");
	if (parseInt(guess) > i) { console.log('Загаднное число меньше!'); }
	if (parseInt(guess) < i) { console.log('Загаднное число больше!'); }
	if (parseInt(guess) === i) { console.log('Вы угадали!'); break; }
	if (parseInt(guess) === 0) { break; }
}