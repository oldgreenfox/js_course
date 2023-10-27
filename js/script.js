const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 0; i <= lines; i++){
	for(let j = lines; j > i; j--){
		result += ' ';
	}
	for (let k = i * 2 + 1; k > 0; k--){
		result += '*';
	}
	result += '\n';
}
console.log(result);