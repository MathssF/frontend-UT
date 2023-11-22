import React, { useContext } from 'react';
import { GenresContext, GenresProvider } from '../contexts/genresContext';
import GenresComponent from './genresComponent';

export default function Desktop() {
  const { genres, setGenres } = useContext(GenresContext);

  const handleGenreSelect = (id) => {
    setGenres(prevGenres => prevGenres.map(genre =>
        genre.id === id? { ...genre, select: !genre.select} : genre
      ))
  }

  return (
    <div
      style={{
        padding: '0px',
        margin: '0px'
      }}
    >
      <header>
        <div>
          <p>TMBD</p>
        </div>
      </header>

      <main
        style={{
          backgroundColor: 'purple'
        }}
      >
        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>
        <p>Filtre por:</p>
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
