import { useState, useRef, useEffect } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { BuscadorMovies } from './components/BuscadorMovies.jsx'
import './App.css'


export default function App() {

  const { movies } = useMovies('https://api.themoviedb.org/3/movie/popular?api_key=796bee2d71dcf52335289eed05b707bb&languaje=es-MX');

  return (
    <>
      <header>
        <BuscadorMovies></BuscadorMovies>
      </header>

      <h1>Lista de Peliculas</h1>
      <main id='container'>
        <Movies movies={movies}></Movies>
      </main>
    </>
  )

}




