// import peliculasJson from '../json/results-pelis.json'
import { useState, useEffect } from "react";

export function useMovies(url) {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {
                const pelis = data.results;
                const pelisFormateadas = pelis?.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    year: movie.release_date,
                    poster: movie.poster_path
                }))
                setMovies(pelisFormateadas);

            })
            .catch(e => {
                throw new Error('Error al buscar las peliculas')
            })
    }, []);

    return { movies }
}

