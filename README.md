# Movies World - Next.js

Esta es una versión de la aplicación **Movies World** desarrollada con **Next.js**. Permite a los usuarios buscar información sobre películas, ver detalles de películas específicas y explorar una lista de películas mejor calificadas. La aplicación utiliza la API de The Movie Database (TMDb) para obtener los datos de las películas.

## Características

- **Página principal**: Muestra una lista de las películas mejor calificadas.
- **Buscador**: Permite buscar películas por nombre.
- **Detalle de película**: Muestra información detallada de una película seleccionada, incluyendo título, descripción, fecha de lanzamiento, calificación, duración, géneros y más.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Dependencias necesarias

Estas son las principales dependencias utilizadas en el proyecto:

- **Next.js**: `^13.0.0`
- **React**: `^18.0.0`
- **React DOM**: `^18.0.0`

Para instalar todas las dependencias, simplemente ejecuta el comando `npm install` después de clonar el repositorio.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd practica-next
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución en modo desarrollo

Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
npm run dev
```

Esto abrirá la aplicación en tu navegador en la dirección [http://localhost:3000](http://localhost:3000).


## Pruebas de la aplicación

1. **Explorar películas mejor calificadas**: En la página principal, se muestra una lista de películas mejor calificadas. Haz clic en cualquier película para ver sus detalles.
2. **Buscar películas**: Utiliza el buscador para encontrar películas por nombre.
3. **Ver detalles de una película**: Haz clic en una película de los resultados de búsqueda o de la lista principal para ver información detallada.

## Estilos

El diseño de la aplicación está definido en el archivo `style.css`, que incluye:

### Clases principales

- **`.pelicula`**: Estilo para las tarjetas de las películas, con un diseño atractivo y sombras.
- **`.buscador`**: Estilo para el buscador, con un diseño centrado y bordes redondeados.
- **`.boton-regresar`**: Botón para regresar a la página principal, con transiciones suaves.
- **`.detalle-pelicula`**: Contenedor para los detalles de una película, con un diseño centrado y responsivo.


