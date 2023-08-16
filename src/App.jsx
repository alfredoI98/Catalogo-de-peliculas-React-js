import { useState, useRef, useEffect } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { BuscadorMovies } from './components/BuscadorMovies.jsx'
import './App.css'

//MUI
import { Button } from '@mui/material'


export default function App() {
  const [busqueda, setBusqueda] = useState(false);
  const { movies } = useMovies('https://api.themoviedb.org/3/movie/popular?api_key=796bee2d71dcf52335289eed05b707bb&languaje=es-MX', busqueda);

  return (
    <>
      <Button variant='contained'>Hola mundo</Button>
      <header>
        <BuscadorMovies setBusqueda={ setBusqueda }></BuscadorMovies>
      </header>

      <h1>Lista de Peliculas</h1>
      <main id='container'>
        <Movies movies={movies}></Movies>
      </main>
    </>
  )

}




