import React from 'react';
import { GenresContext, GenresProvider } from '../contexts/genresContext';
// import { GenresContext } from '../contexts/genresContext';
import { GenresComponent } from '../utils/genresComponent.js';

export default function Desktop() {
  // Começando esta parte aqui, modificando para o git add .
  const { genres, setGenres } = useContext(GenresContext);

  const handleGenreSelect = (id) => {
    setGenres(prevGenres => prevGenres.map(genre =>
        genre.id === id? { ...genre, select: !genre.select} : genre
      ))
  }

  return (
    <div>
      <header>
        <div>
          <p>TMBD</p>
        </div>
      </header>

      <main>
        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>
        <GenresProvider>
          <GenresComponent
            genres={genres}
            onGenreSelect={handleGenreSelect}
          />
        </GenresProvider>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}