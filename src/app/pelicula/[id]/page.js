import Image from 'next/image';
import Link from 'next/link';


async function getPelicula(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDdlNmRlOGJlMjZlYmIxODBjNGE2NjQ2M2M4ZGIwYSIsIm5iZiI6MTc0NDEzOTU2Mi44ODUsInN1YiI6IjY3ZjU3NTJhZGRmOTE5NDM4N2RhMGJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bkAzVlppSwptqwLQlqSiB3ON7BxyczgrO6HDAvZqwpY'
    },
    next: { revalidate: 60 } 
  });

  if (!res.ok) throw new Error('Error al obtener la película');
  return res.json();
}

export default async function DetallePelicula({ params }) {
    const { id } = params;  

    const pelicula = await getPelicula(id);

  return (
    <>
        <header>
                <h1 className="titulo">Movies World</h1>
                <h2 className="subtitulo">Todo sobre tus películas favoritas</h2>
        </header>
        <Link href="/">
            <button className="boton-regresar">Regresar</button>
        </Link>        
        <main className="detalle-pelicula">
        <h1>{pelicula.title}</h1>
        <Image
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}
            width={300}
            height={450}
        />
        <div className="infoPelicula">
            <p>{pelicula.overview}</p>
            <p><strong>Fecha de lanzamiento:</strong> {pelicula.release_date}</p>
            <p><strong>Calificación:</strong> {pelicula.vote_average}</p>
            <p><strong>Lenguaje original:</strong> {pelicula.original_language}</p>
            <p><strong>Duración:</strong> {pelicula.runtime} minutos</p>
            <p><strong>Géneros:</strong> {pelicula.genres.map(g => g.name).join(', ')}</p>
            <p><strong>Público:</strong> {pelicula.adult ? 'Solo adultos' : 'Todos los públicos'}</p>
        </div>
        </main>
    
    </>

  );
}
