/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
 если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
while(!numberOfFilms){
	numberOfFilms = +prompt('Количество неверное. Сколько фильмов вы уже посмотрели?', '');
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
	let a = prompt('Просмотренный фильм №'+(i+1), '');
	while(!(a && a.trim().length < 50)){
		a = prompt('Неверное название. Просмотренный фильм №'+(i+1), '');	
	}	
	let b = prompt('На сколько оцените его?');
	while(!(b && b.trim())){
		b = prompt('Оценка неверна. На сколько оцените его?');
	}	
	personalMovieDB.movies[a] = b;
}

if(personalMovieDB.count >= 0 && personalMovieDB.count < 10){
	console.log("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
	console.log("Вы классический зритель");
}else if(personalMovieDB.count > 30){
	console.log("Вы киноман");
}

function showMyDB(hidden){
	if(!hidden){
		console.log(personalMovieDB);
	}
}

function writeGenres(db){
	for(let i = 0; i < 3; i++){
		let a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');	
		if(!(a && a.trim())){
			i--;
		} else {
			db.genres[i] = a;
		}
	}
}

writeGenres(personalMovieDB.privat);

showMyDB(personalMovieDB);