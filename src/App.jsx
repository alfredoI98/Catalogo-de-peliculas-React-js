import { useState, useRef, useEffect } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { BuscadorMovies } from './components/BuscadorMovies.jsx'
import './App.css'

//MUI
import { Button } from '@mui/material'


export default function App() {
  const [busqueda, setBusqueda] = useState(false);
  const api_key = "047d00a9fdbe89d61bd8441a72e8e92d";
  const url_all_movies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&languaje=es-MX`;
  const url_search_movies = `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=${api_key}&languaje=es-MX`;
  const { movies } = useMovies(url_all_movies, url_search_movies, busqueda);

  return (
    <>
      <Button variant='contained'>Hola mundo</Button>
      <header>
        <BuscadorMovies setBusqueda={setBusqueda} busqueda={busqueda}></BuscadorMovies>
      </header>

      <h1>Lista de Peliculas</h1>
      <main id='container'>
        <Movies movies={movies}></Movies>
      </main>
    </>
  )

}




