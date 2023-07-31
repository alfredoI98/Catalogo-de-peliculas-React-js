function ListOfMovies({ movies }) {
    let urlPosterMovie = "https://image.tmdb.org/t/p/w500/";

    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <img src={urlPosterMovie + movie.poster} alt="Poster pelicula" />
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron resultados</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies
            ? <ListOfMovies movies={movies}></ListOfMovies>
            : <NoMoviesResults></NoMoviesResults>
    )
}