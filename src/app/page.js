import Link from 'next/link';
import ListadoPeliculas from "../components/ListadoPeliculas";
export default function PaginaPrincipal() {
    return (
        <main>
            <header>
                <h1 className="titulo">Movies world</h1>
                <h2 className="subtitulo">Todo sobre tus películas favoritas</h2>
            </header>
            <Link href="/buscador/">
              <button className="boton-regresar">Buscador</button>
            </Link>  
            <ListadoPeliculas />
        </main>
    );
}
