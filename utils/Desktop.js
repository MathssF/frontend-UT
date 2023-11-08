import React, { useContext } from 'react';
import { GenresContext, GenresProvider } from '../contexts/genresContext';
import GenresComponent from './genresComponent';
// import { GenresContext } from '../contexts/genresContext';
// import { GenresComponent } from '../utils/genresComponent.js';

export default function Desktop() {
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
          <GenresComponent
            genres={genres}
            onGenreSelect={handleGenreSelect}
          />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}
