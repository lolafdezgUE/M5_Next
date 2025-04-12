'use client';

import { useRouter } from 'next/navigation';
import '../css/style.css';

export default function Pelicula({ pelicula }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/pelicula/${pelicula.id}`);
    };

    return (
        <div className="pelicula" onClick={handleClick}>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
            <div className="overlay">
                <h3>{pelicula.title}</h3>
                <p>{pelicula.overview}</p>
            </div>
        </div>
    );
}
