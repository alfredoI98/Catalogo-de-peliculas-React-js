import { useRef, useState } from 'react'

export function BuscadorMovies() {
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const value = inputRef.current.value;
        const containerMovies = document.getElementById('container');
        containerMovies.innerHTML = value;
    }
    return (
        <>
            <h1 style={{ textAlign: 'right' }}>Buscador de peliculas</h1>
            <form action="" style={{ display: 'flex', justifyContent: 'right' }} onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder='Avengers, Star Wars, ...' />
                <button type='submit'>Buscar</button>
            </form>
        </>
    )
}