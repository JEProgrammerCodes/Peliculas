import {apikey} from './config.js';

document.addEventListener('DOMContentLoaded', async () => {
    return await mostrarPeliculas();
});

const mostrarPeliculas = async () => {

    const url = 'https://api.themoviedb.org/3/movie/popular'

    const respuesta = await fetch(`${url}?api_key=${apikey}`); 

    const datosPeliculas = await respuesta.json();

    const peliculas = datosPeliculas.results;

    const imgURL = [];

    peliculas.forEach(pelicula => {
        imgURL.push(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`);
    });

    imgURL.forEach(img => {
        const imagenPeliculas = document.createElement('img');
        imagenPeliculas.src = img;
        document.body.appendChild(imagenPeliculas);
    });

}