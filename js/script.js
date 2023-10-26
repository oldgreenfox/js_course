'use strict';
const numberOfFilms = Number(prompt('Скільки фільмів ви уже подивились?'));
const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	private : false
};
const film1 = prompt('Один з останніх переглянутих фільмів?');
const vote1 = prompt('Оцініть його');
const film2 = prompt('Один з останніх переглянутих фільмів?');
const vote2 = prompt('Оцініть його');

personalMovieDB.movies[film1] = vote1;
personalMovieDB.movies[film2] = vote2;
console.log(personalMovieDB);