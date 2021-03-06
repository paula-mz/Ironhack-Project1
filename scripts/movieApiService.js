'use strict';

let apiMovieURL = "https://api.themoviedb.org/3/discover/movie?api_key=35dace4745a4ee8ae13d0cf2fd62e8db&language=es-ES&include_adult=false&include_video=false&page=1&release_date.lte=2018&vote_average.gte=7";

let movieArray,movie;
let randomMovie = Math.round(Math.floor((Math.random() * 20)));


const connectToApiMovie = () => {
    fetch(apiMovieURL)
    .then (responseMovie => responseMovie.json())
    .then (dataMovie => movieArray = dataMovie.results)
    .then (movieArrayData => movie = movieArrayData[randomMovie])
    .then (getElement => document.getElementById("movie").innerHTML = `
    <div>
        <h1>¡La palomitera ha decidido!</h1>
    </div>
    <div>
        <img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" alt="poster-${movie.title}">
        <h3>${movie.title}</h3>
        <p><span>Año: ${movie.release_date.split("-")[0]}</span> <span>Puntuación :${movie.vote_average}</span></p>
        <h4>Sinopsis</h4>
        <p>${movie.overview}</p>
    </div>`)
    .catch(function (error) {
        return error;
    });
};


//window.onload = connectToApiMovie;