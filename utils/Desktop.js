import React, { useContext } from 'react';
import { GenresContext } from '../contexts/genresContext';
import GenresComponent from './genresComponent';
import Titles from './Titles'

export default function Desktop() {
  const { genres, setGenres } = useContext(GenresContext);

  const handleGenreSelect = (id) => {
    setGenres(prevGenres => prevGenres.map(genre =>
      genre.id === id ? { ...genre, selected: !genre.selected } : genre
    ))
  }

  console.log('LISTA GENEROS: ', genres);

  const selectedGenreIds = genres
    .filter(genre => genre.selected)
    .map(genre => genre.id);

  console.log('LISTA SELECIONADOS: ', selectedGenreIds);

  return (
    <div
      style={{
        padding: '0px',
        margin: '0px',
        backgroundColor: '#E73980',
        height: '54px',
      }}
    >
      <header>
        <div>
          <p>TMBD</p>
        </div>
      </header>

      <main
        style={{
          backgroundColor: '#861040',
          height: '450px',
          overflow: 'auto',
        }}
      >
        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>
        <p>Filtre por:</p>
        <GenresComponent
          genres={genres}
          onGenreSelect={handleGenreSelect}
        />
      </main>

      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <Titles genres={selectedGenreIds} />
      </div>

      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}
