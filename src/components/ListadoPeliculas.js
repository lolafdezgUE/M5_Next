'use client'

import { useEffect, useState } from "react";
import Pelicula from "./Pelicula";

export default function ListadoPeliculas() {
    const [peliculas, setPeliculas] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDdlNmRlOGJlMjZlYmIxODBjNGE2NjQ2M2M4ZGIwYSIsIm5iZiI6MTc0NDEzOTU2Mi44ODUsInN1YiI6IjY3ZjU3NTJhZGRmOTE5NDM4N2RhMGJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bkAzVlppSwptqwLQlqSiB3ON7BxyczgrO6HDAvZqwpY'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', options)
            .then(res => res.json())
            .then(res => setPeliculas(res.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="listado-peliculas">
            {peliculas.map(pelicula => (
                <Pelicula key={pelicula.id} pelicula={pelicula} />
            ))}
        </div>
    );
}
