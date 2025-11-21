// import peliculasJson from '../json/results-pelis.json'
import { useState, useEffect } from "react";

export function useMovies(url_all_movies, url_search_movies, busqueda) {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchMovies = async () => {
            try {
                const url = busqueda ? url_search_movies : url_all_movies;
                const res = await fetch(url, { signal });
                const data = await res.json();
                const pelis = data.results;
                const pelisFormateadas = pelis?.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    year: movie.release_date,
                    poster: movie.poster_path,
                    overview: movie.overview
                }));
                setMovies(pelisFormateadas);
            } catch (e) {
                if (e.name === 'AbortError') return;
                console.error('Error al buscar las peliculas', e);
                setMovies([]); // o manejar error con otro estado
            }
        };

        fetchMovies();

        return () => controller.abort();
    }, [url_all_movies, url_search_movies, busqueda]);

    return { movies }
}

