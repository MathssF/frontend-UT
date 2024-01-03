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
    <div style={{ border: 0, margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <header
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            backgroundColor: '#E73980',
            height: '54px',
            margin: 0,
            padding: 0,
          }}
        >
          <p>TMBD</p>
        </div>
      </header>

      <main
        style={{
          backgroundColor: '#861040',
          height: '450px',
          overflow: 'auto',
          margin: 0,
          padding: '30px 0 0',
        }}
      >
        <p style={{
          fontSize: '48px',
          marginTop: '85px',
          color: 'white',
          maxWidth: '781px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <b>Milhões de filmes, séries e pessoas para descobrir. Explore já.</b>
        </p>
        <p>Filtre por:</p>
        <GenresComponent
          genres={genres}
          onGenreSelect={handleGenreSelect}
        />
      </main>

      <div
        style={{
          backgroundColor: 'white',
          margin: '30px 0 0',
          padding: '20px',
        }}
      >
        <Titles genres={selectedGenreIds} />
      </div>

      <footer
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
}
