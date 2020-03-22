let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
arrayCount = array.length;
for (i=0; i<arrayCount; i++) {
	for (k=0; k<arrayCount; k++) {
		if ((array[i] + array[k]) == 7) {
			console.log('Найдена пара чисел, которые в сумме дают 7! Это число ' +array[i]+ ' (индекс ' +i+ ' в первом массиве) и число ' +array[k]+ ' (индекс ' +k+ ' во втором массиве)');
		}
	}
}